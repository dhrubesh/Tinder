var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.slim.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
setInterval(function(){ $("button[class*=like-green]").click(); }, 1000 );
