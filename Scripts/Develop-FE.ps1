code ../Frontend;
Start-Process wt 'new-tab "powershell" .\StartBackendServer.ps1 `; new-tab "powershell" .\StartFrontendServer.ps1 `; split-pane "powershell" -noexit cd ..';