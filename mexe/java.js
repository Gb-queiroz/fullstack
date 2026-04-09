
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');



let retangulo = {
    x: 0,
    y: 0,
    altura: 30,
    largura: 30,
    cor: "red",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}


function animacao() {
    ctx.clearRect(0, 0, 400, 400)
    retangulo.x = retangulo.x + 1;
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();










// function animacao() {
//     ctx.clearRect(0, 0, 400, 400)
//     circulo.desenha();
//     requestAnimationFrame(animacao)
// }
// animacao();
// document.addEventListener('keydown', function (evento) {
//     tecla = evento.key;
//     console.log(tecla);
//     if (tecla == 'ArrowUp')
//         if (tecla == 'ArrowDown') { circulo.y = circulo.y + 1 }
//     if (tecla == 'ArrowLeft') { circulo.x = circulo.x - 1 }
//     if (tecla == 'ArrowRight') { circulo.x = circulo.x + 1 }
//     { circulo.y = circulo.y - 1 }

// })


