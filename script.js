
function printTime()
{
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.getElementById("reloj").innerHTML = hours+":"+mins+":"+secs;
}
  setInterval(printTime, 1000);
