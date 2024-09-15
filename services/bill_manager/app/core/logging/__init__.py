from opentelemetry import trace
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource

from app.core.config import get_settings
from app.core.logging.azure_exporter import get_azure_exporter 

import logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def setup_telemetry(app): 
    logging.info("Setting up telemetry")
    settings = get_settings() 
    # Set up OpenTelemetry tracing
    resource = Resource(attributes={
        SERVICE_NAME: "my-fastapi-service"
    })

    trace_provider = TracerProvider(resource=resource)

    if settings.dev_mode:
        logging.info("Running in dev mode")
        console_exporter = ConsoleSpanExporter()
        span_processor = BatchSpanProcessor(console_exporter)
        trace_provider.add_span_processor(span_processor)
    else:
        logging.info("Running in prod mode")
        span_processor = BatchSpanProcessor(get_azure_exporter())
        logging.info("Adding span processor")
        trace_provider.add_span_processor(span_processor)

    # Set the global trace provider
    trace.set_tracer_provider(trace_provider)

    FastAPIInstrumentor.instrument_app(app)
