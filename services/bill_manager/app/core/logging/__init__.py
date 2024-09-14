import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter
# from opentelemetry.exporter.azuremonitor import AzureMonitorTraceExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource


def setup_telemetry(app): 
# Set up OpenTelemetry tracing
    resource = Resource(attributes={
        SERVICE_NAME: "my-fastapi-service"
    })

# Use Azure Monitor Trace Exporter
# azure_exporter = AzureMonitorTraceExporter(
#     connection_string="InstrumentationKey=YOUR_INSTRUMENTATION_KEY"  # Replace with your key or connection string
# )
    console_exporter = ConsoleSpanExporter()

    trace_provider = TracerProvider(resource=resource)

# Add a batch span processor to send the trace data
# span_processor = BatchSpanProcessor(azure_exporter)
# trace_provider.add_span_processor(span_processor)
    trace_provider.add_span_processor(BatchSpanProcessor(console_exporter))

# Set the global trace provider
    from opentelemetry import trace
    trace.set_tracer_provider(trace_provider)

    FastAPIInstrumentor.instrument_app(app)
