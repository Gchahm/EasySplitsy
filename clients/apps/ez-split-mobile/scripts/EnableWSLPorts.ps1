#This should be the port and address that show in Expo
$ports=@(8081);
$addr='172.27.126.14';
$port=@(8081);

Write-Host "Remove Firewall Exception Rules"
iex "Remove-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock'";

Write-Host "adding Exception Rules for inbound and outbound Rules"
iex "New-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock' -Direction Outbound -LocalPort $port -Action Allow -Protocol TCP";
iex "New-NetFireWallRule -DisplayName 'WSL 2 Firewall Unlock' -Direction Inbound -LocalPort $port -Action Allow -Protocol TCP";

for( $i = 0; $i -lt $ports.length; $i++ ){
  $port = $ports[$i];
  iex "netsh interface portproxy delete v4tov4 listenport=$port listenaddress=$addr";
  iex "netsh interface portproxy add v4tov4 listenport=$port listenaddress=$addr connectport=$port connectaddress=$remoteport";
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
    $listenAddress = $parts[0]
    $listenPort = $parts[1]

    # Construct and execute the netsh delete command
    $command = "netsh interface portproxy delete v4tov4 listenaddress=$listenAddress listenport=$listenPort"
    Write-Host "Executing: $command"
    Invoke-Expression $command
}


Write-Host "adding new proxy"
$netshCommand = @"
netsh interface portproxy add v4tov4 `
listenport=8081 `
listenaddress=192.168.0.22 `
connectport=$port `
connectaddress=$addr
"@

Invoke-Expression $netshCommand

Write-Host "port proxy entries:"
netsh interface portproxy show all

