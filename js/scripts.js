function detectMobile() 
{
    if(userAgent.match(/Mobile/i))
    {
        return "Mobile";
    }
}

var isMobile = detectMobile();

if(isMobile)
{
    window.location = "https://s.kwai.app/s/dGdmMXDR";
}
else
{
    window.location = "https://propagandofelicidade.online/questionario";
}