from opentelemetry import trace, _logs
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.sdk.resources import Resource

from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter

from opentelemetry.sdk._logs import LoggerProvider
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor, ConsoleLogExporter

from app.core.config import get_settings
from app.core.logging import azure


def setup_telemetry(app): 
    settings = get_settings() 
    
    resource = Resource.create({"service.name": "ez-split"})

    tracer_provider = TracerProvider(resource=resource)
    trace.set_tracer_provider(tracer_provider)
    tracer_provider.add_span_processor(get_tracer_processor(settings))

    logger_provider = LoggerProvider()
    _logs.set_logger_provider(logger_provider)
    logger_provider.add_log_record_processor(get_logger_processor(settings))

    FastAPIInstrumentor.instrument_app(app, tracer_provider=tracer_provider)


def get_tracer_processor(settings):
    if settings.dev_mode:
        return BatchSpanProcessor(ConsoleSpanExporter())
    else:
        return BatchSpanProcessor(azure.get_monitor_trace_exporter(settings))


def get_logger_processor(settings):
    if settings.dev_mode:
        return BatchLogRecordProcessor(ConsoleLogExporter())
    else:
        return BatchLogRecordProcessor(azure.get_monitor_log_exporter(settings))


from app.core.logging.logger import get_logger

