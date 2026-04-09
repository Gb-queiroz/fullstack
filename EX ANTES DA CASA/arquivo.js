let canvas = document.getElementById('retangulos');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;

ctx.fillstyle = 'blue';
ctx.strokestyle = 'red';
ctx.fillRect(0, 0, 120, 120);
ctx.strokeRect(0, 0, 120, 120);

ctx.closePath();


ctx.beginPath () ;
ctx.lineWidth = 2;

ctx.fillstyle = 'blue';
ctx.strokestyle = 'red';
ctx.arc(300,220,40,1.5*Math.PI,5.0*Math.PI);

ctx. fill () ;

ctx.stroke () ;

ctx.closePath () ;



ctx.beginPath();
ctx.lineWidth = 2;

ctx.fillstyle = 'pink';
ctx.strokestyle = 'green';
ctx.fillRect(600, 600, 120, 120);
ctx.strokeRect(600, 600, 120, 120);

ctx.closePath();