from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter
from app.core.config import get_settings

def get_azure_exporter():
    setting = get_settings()
    azure_exporter = AzureMonitorTraceExporter(
            connection_string=setting.applicationinsights_connection_string
    )
    return azure_exporter


