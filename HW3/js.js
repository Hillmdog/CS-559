function game() {
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var dx = 0;
    var dir = 0;

    var context = canvas.getContext("2d");
    var stack;

    function getKeyAndMove() {
        switch (event.keyCode) {
        case 37: //left arrow key
            if(dx > -450){
                dx = dx - 10;
                dir = 0;
            }
            break;
        case 39: //right arrow key
            if(dx < 490){
                dx = dx + 10;
                dir = 1;
            }
            break;
        }
    }

    function rect(x,y,w,h,C){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = C;
        context.fillRect(x,y,w,h);
    }

    function draw(){
        window.requestAnimationFrame(draw);
        stack =[mat3.create()];
        canvas.width=canvas.width;

        function Guy(){
            var tx = mat3.create();
            mat3.fromTranslation(tx,[500,450]);
            mat3.translate(tx,tx,[-500 + dx,-450]);
            mat3.multiply(stack[0],stack[0],tx);
            if(dir == 0){
                rect(450,450,60,80, "#4d4d4d");
                rect(450,525,25,25, "#cc8800");
                rect(450,545,25,5, "#000000");
                rect(485,525,25,25, "#cc8800");
                rect(485,545,25,5, "#000000");
                rect(450,510,60,20, "#cc8800");
                rect(450,510,60,5, "#000000");
                rect(510,475,25,45, "#cc4400");
                rect(475,485,20,30, "#333333");
            }
            else{
                rect(450,450,60,80, "#4d4d4d");
                rect(450,525,25,25, "#cc8800");
                rect(450,545,25,5, "#000000");
                rect(485,525,25,25, "#cc8800");
                rect(485,545,25,5, "#000000");
                rect(450,510,60,20, "#cc8800");
                rect(450,510,60,5, "#000000");
                rect(425,475,25,45, "#cc4400");
                rect(465,485,20,30, "#333333");
            }
        }


	rect(0,0,canvas.width,canvas.height, "#cceeff");
	rect(0,550,canvas.width,50,"#86592d");
	rect(0,550,canvas.width,10,"#339933");
        stack.unshift(mat3.clone(stack[0]));//context.save();
        Guy();
        stack.shift();//context.restore();

    }
    draw();
    window.addEventListener('keydown',getKeyAndMove);
}
function setup(){
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
}
window.onload=setup;
