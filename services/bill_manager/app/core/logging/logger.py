import logging
from opentelemetry.sdk._logs import LoggingHandler

def get_logger(name, level=logging.INFO):
    logger = logging.getLogger(name)
    handler = LoggingHandler()
    logger.addHandler(handler)
    logger.setLevel(level)
    return logger


