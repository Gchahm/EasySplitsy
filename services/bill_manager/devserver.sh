# Capture the first IP address returned by hostname -I
ip=$(hostname -I | awk '{print $1}')


fastapi dev --host $ip --port 8000 &
ngrok http http://192.168.0.22:8000
