let canvas = document. getElementById ('retangulos') ;
let ctx = canvas.getContext ('2d') ;

// retângulos
ctx.beginPath () ;
ctx.lineWidth = 2;

ctx.fillstyle = 'brown';
ctx.strokestyle = 'brown';
ctx.fillRect (320,400,400,400);
ctx.closePath () ;

// retângulos
ctx.beginPath () ;
ctx.lineWidth = 2;

ctx.fillstyle = 'brown';
ctx.strokestyle = 'brown';
ctx.fillRect (50,50,50,50);
ctx.closePath () ;


ctx.beginPath ();
ctx.lineWidth = 2;

ctx.fillStyle = 'blue';
ctx.strokestyle = 'red';
ctx.moveTo (220,150) ;
ctx.lineTo (320,10);
ctx.lineTo (60,250);

ctx.lineTo (200,250) ;
ctx.lineTo (200,150) ;

ctx. fill () ;

ctx.stroke () ;

ctx.closePath () ;


