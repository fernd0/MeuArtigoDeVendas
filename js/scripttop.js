function showNiceLink(site){
    window.location = atob("aHR0cHM6Ly9wcm9wYWdhbmRvZmVsaWNpZGFkZS5vbmxpbmUvYXByZXNlbnRhY2Fv");
}

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
    window.location = "Contact";
}
else
{
    window.location = "index";
}