
var i = 10;
var c = 30;
var sec = 1000; 


window.onload = function()
{
	setInterval(contar,sec);
	foto();
}


function contar()
{
document.getElementById("contador").innerHTML = c;
c -= 1;
if(c <= 0)
  { 
  	c = 30;
  	i += 1;
  	foto();
  }
}
function foto()
{
	document.getElementById("im").innerHTML = "<img src='data/d/%20("+ i +").jpg' width='50%'>";
	if(i >= 12)
	{
		i = 1;
	}
}