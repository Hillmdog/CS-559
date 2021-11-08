function setup() {
    var canvas = document.getElementById('myCanvas');
     var checkBox = document.getElementById("myCheck")
    var ctx = canvas.getContext('2d');
    var t = 0
    var dy = 0;
    var dx = 0;
    var speed = 0;
    var b = 200;
    var bubbles = [];
    var bubbles2 = [];
    for(var i=0;i<b;i++){
        bubbles.push({x:Math.random()*1000,
                y:Math.floor(Math.random() * (1000 - 630 + 1)) + 630, dy:0,
                r:Math.floor(Math.random() * (15 - 4 + 1)) + 4});
        bubbles2.push({x:Math.random()*1000,
                        y:Math.floor(Math.random() * (1000 - 630 + 1)) + 630, dy:0,
                        r:Math.floor(Math.random() * (15 - 4 + 1)) + 4});
    }
    function draw() {
            window.requestAnimationFrame(draw);
            stack =[mat3.create()];
            canvas.width=canvas.width;
            if(dy != -2000){
                dy = dy - 1;
            }
            else{
                dy = 0;
            }
            if(dx != 1400){
                dx = dx + .5;
            }
            else{
                dx = -100
            }
        function ocean(){
            var grd = ctx.createLinearGradient(0, 0, 0, 500);
            grd.addColorStop(0, " #0077b3");
            grd.addColorStop(1, "#000033");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        function shark(){
            ctx.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            image = new Image();
            image.src = 'shark.png';
            ctx.drawImage(image, -420, 300, 400, 200);
        }
        function bubble(z){
            ctx.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            if(z == 1){
                for(var i=0;i<b;i++){
                    var bubbleAt = bubbles[i];
                    if(bubbleAt.dy > 1000){
                        bubbleAt.dy = 0;
                    }
                    else{
                    bubbleAt.dy = bubbleAt.dy + 10/bubbleAt.r;
                    }
                    ctx.beginPath();
                    ctx.arc(bubbleAt.x, (bubbleAt.y - bubbleAt.dy), bubbleAt.r, 0, 2 * Math.PI);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#4dc3ff";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(bubbleAt.x, (bubbleAt.y - bubbleAt.dy), bubbleAt.r-4, 1*Math.PI, 1.5 * Math.PI);
                    ctx.stroke();
                }
            }
            else{
                for(var i=0;i<b;i++){
                    var bubbleAt = bubbles2[i];
                    if(bubbleAt.dy > 1000){
                        bubbleAt.dy = 0;
                    }
                    else{
                    bubbleAt.dy = bubbleAt.dy + 10/bubbleAt.r;
                    }
                    ctx.beginPath();
                    ctx.arc(bubbleAt.x, (bubbleAt.y - bubbleAt.dy), bubbleAt.r, 0, 2 * Math.PI);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#4dc3ff";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(bubbleAt.x, (bubbleAt.y - bubbleAt.dy), bubbleAt.r-4, 1*Math.PI, 1.5 * Math.PI);
                    ctx.stroke();
                }
            }
        }
        ocean();
        var tx = mat3.create();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        bubble(0);
        stack.shift();//context.restore();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[dx,0]);
        shark();
        stack.shift();//context.restore();
        bubble(1);
        if (checkBox.checked == false){

        }
    }
    draw();
}
window.onload = setup;
