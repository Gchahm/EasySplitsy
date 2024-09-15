# syntax=docker/dockerfile:1

FROM python:3.11

WORKDIR /code

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 3100

# Set environment variables for Gunicorn logging
ENV GUNICORN_CMD_ARGS="--access-logfile - --error-logfile -"

CMD ["gunicorn", "app.main:app"]
