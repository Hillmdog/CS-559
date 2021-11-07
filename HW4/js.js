function setup() {
    var canvas = document.getElementById('myCanvas');
     var checkBox = document.getElementById("myCheck")
    var ctx = canvas.getContext('2d');
    var t = 0
    var dy = 0;
    var dx = 0;
    var b = 200;
    var bubbles = [];
    for(var i=0;i<b;i++){
        bubbles.push({x:Math.random()*1000,
                y:Math.floor(Math.random() * (2000 - 630 + 1)) + 630,
                r:Math.floor(Math.random() * (15 - 5 + 1)) + 5});
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
                dx = -220
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
        function bubble(){
            ctx.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            for(var i=0;i<b;i++){
               var bubbleAt = bubbles[i];
               ctx.beginPath();
               ctx.arc(bubbleAt.x, bubbleAt.y, bubbleAt.r, 0, 2 * Math.PI);
               ctx.lineWidth = 1;
               ctx.strokeStyle = "white";
               ctx.stroke();
               ctx.beginPath();
               ctx.arc(bubbleAt.x, bubbleAt.y, bubbleAt.r-3, 1*Math.PI, 1.5 * Math.PI);
               ctx.stroke();
            }
        }
        ocean();
        var tx = mat3.create();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[dx,0]);
        shark();
        stack.shift();//context.restore();
        mat3.translate(stack[0],stack[0],[0,dy]);
        //ctx.translate(0,dy);
        if (checkBox.checked == false){
            bubble();
        }
        var arrowCanvas = mat3.create();
        var tangent = CTcomp(t);
    }
    draw();
}
window.onload = setup;
