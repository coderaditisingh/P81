var canvas=document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color="purple";

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth =4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth =4;
ctx.arc(290,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth =4;
ctx.arc(380,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth =4;
ctx.arc(255,245,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth =4;
ctx.arc(330,245,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "pink";
ctx.lineWidth =6;
ctx.rect(80,143,430,200);
ctx.stroke();

function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}
