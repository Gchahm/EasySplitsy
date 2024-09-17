from azure.monitor.opentelemetry.exporter import AzureMonitorLogExporter, AzureMonitorTraceExporter
from app.core.config.settings import Settings

def get_monitor_trace_exporter(settings: Settings):
    azure_exporter = AzureMonitorTraceExporter(
            connection_string=settings.applicationinsights_connection_string
    )
    return azure_exporter


def get_monitor_log_exporter(settings: Settings):
    azure_exporter = AzureMonitorLogExporter(
            connection_string=settings.applicationinsights_connection_string
    )
    return azure_exporter

