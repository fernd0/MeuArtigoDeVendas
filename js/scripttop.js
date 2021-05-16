var usrAgent = navigator.userAgent;

function detectMobile() 
{
    if(usrAgent.match(/Mobile/i))
    {
        return "Mobile";
    }
}

var isMobile = detectMobile();

if(isMobile)
{
    window.location = "segredo";
}
else
{
    window.location = "questionario";
}