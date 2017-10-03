if(screen.mozOrientation !== undefined){
    browser = "Firefox";
}
else if (chrome.search !== undefined){
    browser = "Opera";
}
else if (navigator.msLaunchUri !== undefined){
    browser = "Internet Explorer or Edge";
}
else {
    browser = "Google Chrome or Chromium";
}
    document.getElementById("Browser").innerHTML = browser;

