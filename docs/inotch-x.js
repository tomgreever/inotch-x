var link = document.createElement("link");
link.href = "https://tomgreever.github.io/inotch-x/inotch-x.css";
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link);

window.onload = function () {   
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'inotch-x-wrapper';
  div.innerHTML = '<span class="inotch-x"></span>';
 }