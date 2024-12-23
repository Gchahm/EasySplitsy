#This should be the port and address that show in Expo
$ports=@(8081,8000);
$addr='172.27.126.14';
$listenAddress='192.168.0.22'
$ports_a = $ports -join ",";

Write-Host "Remove Firewall Exception Rules"
iex "Remove-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock'";

for( $i = 0; $i -lt $ports.length; $i++){
$port = $ports[$i];
Write-Host "adding Exception Rules for inbound and outbound Rules for port $port"
iex "New-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock' -Action Allow -Protocol TCP -Direction Outbound -LocalPort $port";
iex "New-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock' -Action Allow -Protocol TCP -Direction Inbound -LocalPort $port";
}


# Get the output of the current port proxy configuration
$proxyList = netsh interface portproxy show all

# Extract lines that contain valid port proxy mappings
$proxyLines = $proxyList | Select-String -Pattern '^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\s+\d+'

# Parse each line and extract ListenAddress and ListenPort
foreach ($line in $proxyLines) {
    # Split the line into parts based on whitespace
    $parts = $line -split '\s+'

    # Extract the ListenAddress and ListenPort
    $dListenAddress = $parts[0]
    $dListenPort = $parts[1]

    # Construct and execute the netsh delete command
    $command = "netsh interface portproxy delete v4tov4 listenaddress=$dListenAddress listenport=$dListenPort"
    Write-Host "Executing: $command"
    Invoke-Expression $command
}

for( $i = 0; $i -lt $ports.length; $i++ ){
  $port = $ports[$i];
  Write-Host "adding new proxy for port: $port from $listenAddress to $addr"
  $netshCommand = "netsh interface portproxy add v4tov4 listenport=$port listenaddress=$listenAddress connectport=$port connectaddress=$addr"
  Invoke-Expression $netshCommand
}


Write-Host "port proxy entries:"
netsh interface portproxy show all

