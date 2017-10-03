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

function get_text_dimensions(font){
    h = document.getElementsByTagName("BODY")[0];
    d = document.createElement("DIV");
    s = document.createElement("SPAN");
    d.appendChild(s);
    d.style.fontFamily = font;
    s.style.fontFamily = font;
    s.style.fontSize = "72px";
    s.innerHTML = "font_detection";
    h.appendChild(d);
    textWidth = s.offsetWidth;
    textHeight = s.offsetHeight;
    h.removeChild(d);
    return [textWidth, textHeight];
    }

hashCode = function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (var i in str) {
	char = str.charCodeAt(i);
	hash = ((hash<<5)-hash)+char;
	hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

fonts = ["Sans", "Arial", "Calibri", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Avant Garde", "Candara", "Century Gothic", "Franklin Gothic Medium", "Futura", "Geneva", "Gill Sans", "Helvetica", "Impact", "Lucida Grande", "Optima", "Segoe UI", "Tahoma", "Trebuchet MS", "Verdana", "Big Caslon", "Bodoni MT", "Book Antiqua", "Calisto MT", "Cambria", "Didot", "Garamond", "Georgia", "Goudy Old Style", "Hoefler Text", "Lucida Bright", "Palatino", "Perpetua", "Rockwell", "Rockwell Extra Bold", "Baskerville", "Times New Roman", "Consolas", "Courier New", "Lucidia Console", "Lucida Sans Typewriter", "Monaco", "Andale Mono", "Copperplate", "Papyrus", "Brush Script MT"];

sizes = fonts.map(get_text_dimensions);

string = JSON.stringify(sizes);

document.getElementById("Fingerprint").innerHTML = hashCode(string);

