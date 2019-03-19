function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    if (script.readyState) {    //IE    
        script.onreadystatechange = function() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {
        script.onload = function() {
            callbacks();
        }
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}