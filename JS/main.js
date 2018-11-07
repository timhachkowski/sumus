var today = new Date();
var factor = 1.13049;
var time = today.getTime();
var ms = today.getMilliseconds();
var s = today.getSeconds();
var m = today.getMinutes();
var h = today.getHours();
var minute = document.getElementById('minute-hand');
var hour = document.getElementById('hour-hand');
var min = document.getElementById('minute');
var hr = document.getElementById('hour');
var sec = document.getElementById('second');
var second = document.getElementById('second-hand');
var title = document.getElementById('Titling');

function init() {
  loadCrown(23);
  loadSecondHand(23);
  loadHourHand(23);
  loadMinuteHand(23);
  title.style.marginLeft = 23/2+"px"
}

function loadCrown(w) {
  var crown = document.getElementById('crown');
  crown.width = w;
  crown.style.top = (window.innerHeight/2 - crown.height*.5) + 'px';
}

function loadSecondHand(w) {
  var height = sec.viewBox.baseVal.height / factor
  sec.style.width = w;
  sec.style.position = 'fixed';
  second.style.fill = "white";
  second.style.transformOrigin = "50% 82% 0";
  sec.style.top = (window.innerHeight/2 - height*.82) + 'px';
}

function loadHourHand(w) {
  var height = hr.viewBox.baseVal.height / factor
  hr.style.width = w;
  hr.style.position = 'fixed';
  hour.style.transformOrigin = "50% 93.5% 0";
  hr.style.top = (window.innerHeight/2 - height*.935) + 'px';
}
function loadMinuteHand(w) {
  var height = min.viewBox.baseVal.height / factor
  min.style.width = w;
  min.style.position = 'fixed';
  minute.style.transformOrigin = "50% 96.2% 0";
  min.style.top = (window.innerHeight/2 - height*.962) + 'px';
}

function updateClock(){
    today = new Date();
    time = today.getTime();
    ms = today.getMilliseconds();
    s = today.getSeconds()+(ms/1000);
    m = today.getMinutes()+(s/60);
    h = today.getHours() + (m/60);
    second.style.transform = "rotate("+(s*6)+"deg)";
    document.getElementById('crown').style.transform = "rotate("+(s*6)+"deg)";
    document.getElementById('minute-hand').style.transform = "rotate("+(m*6)+"deg)";
    document.getElementById('hour-hand').style.transform = "rotate("+(h*30)+"deg)";
}
setInterval(updateClock, 30);
