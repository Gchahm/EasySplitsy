# Capture the first IP address returned by hostname -I
ip=$(hostname -I | awk '{print $1}')


fastapi dev --host $ip --port 8000 
