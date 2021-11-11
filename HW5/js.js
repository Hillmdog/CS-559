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
    //kelp
    var k = 30;
    var kelp = [];
    for(var j=0;j<k;j++){
    kelp.push({x:Math.floor(((Math.random() * (6 - 1 + 1)) + 1)*10),
        y:Math.floor(((Math.random() * (25 - 5 + 1)) + 5)*10)});
    }
    var tParam = 0;
    var wave = 100;
    var dir = 0;
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
        //kelp and curves
        if(tParam >= 2){
            tParam = 0;
        }
        else{
            tParam = tParam + .001;
        }
        if(wave <= 150 && wave> 50 && dir == 1){
            wave = wave - .5;
        }
        else{
            dir = 0;
        }
        if(wave >= 50 && wave< 150 && dir == 0){
            wave = wave + .5;
        }
        else{
            dir = 1;
        }
        var p0=[0,-20,0];
        var d0=[-wave,50,0];
        var p1=[0,100,0];
        var d1=[-wave,0,0];
        var p2=[(wave/8),200,0];
        var d2=[-wave,100,0];
        var p3=[(wave/4),300,0];
        var d3=[-wave,200,0];

        var P0 = [p0,d0,p1,d1]; // First two points and tangents
        var P1 = [p1,d1,p2,d2]; // Second two points and tangents
        var P2 = [p2,d2,p3,d3]; // Third two points and tangents
        function moveToTx(loc,Tx){
            var res=vec3.create(); vec3.transformMat4(res,loc,Tx); ctx.moveTo(res[0],res[1]);
        }

        function lineToTx(loc,Tx){
            var res=vec3.create(); vec3.transformMat4(res,loc,Tx); ctx.lineTo(res[0],res[1]);
        }

        function drawObject(color,Tx) {
            ctx.beginPath();
            ctx.fillStyle = color;
            moveToTx([-5,-5,0],Tx);
            lineToTx([-5,5,0],Tx);
            lineToTx([5,5,0],Tx);
            lineToTx([5,-5,0],Tx);
            ctx.closePath();
            ctx.fill();
        }

        var Hermite = function(t) {
            return [
            2*t*t*t-3*t*t+1,
            t*t*t-2*t*t+t,
            -2*t*t*t+3*t*t,
            t*t*t-t*t
            ];
        }

        var HermiteDerivative = function(t) {
            return [
            6*t*t-6*t,
            3*t*t-4*t+1,
            -6*t*t+6*t,
            3*t*t-2*t
            ];
        }

        function Cubic(basis,P,t){
            var b = basis(t);
            var result=vec3.create();
            vec3.scale(result,P[0],b[0]);
            vec3.scaleAndAdd(result,result,P[1],b[1]);
            vec3.scaleAndAdd(result,result,P[2],b[2]);
            vec3.scaleAndAdd(result,result,P[3],b[3]);
            return result;
        }
        var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
        var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
        var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
        var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
        var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
        var Ccomp = function(t) {
            if (t<1){
                var u = t;
                return C0(u);
            }
            else{
                var u = t-1.0;
                return C1(u);
            }
        }

        var Ccomp_tangent = function(t) {
            if (t<1){
                var u = t;
                return C0prime(u);
            }
            else{
                var u = t-1.0;
                return C1prime(u);
            }
        }

        function drawTrajectory(t_begin,t_end,intervals,C,Tx,color,width) {
            ctx.strokeStyle=color;
            ctx.lineWidth=width;
            ctx.beginPath();
            moveToTx(C(t_begin),Tx);
            for(var i=1;i<=intervals;i++){
                var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
                lineToTx(C(t),Tx);
            }
            ctx.stroke();
        }
        ocean();
        //kelp
        var kelpC = "#003300";
        var kelpC2 = "#008000"
        var Tblue_to_canvas = mat4.create();
        mat4.fromTranslation(Tblue_to_canvas,[30,590,0]);
        mat4.scale(Tblue_to_canvas,Tblue_to_canvas,[1,-1,-1]); // Flip the Y-axis
        drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,kelpC,20);
        drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,kelpC,20);
        drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,kelpC2,1);
        drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,kelpC2,1);
        if (checkBox.checked == true){
            var Tgreen_to_blue = mat4.create();
            mat4.fromTranslation(Tgreen_to_blue,Ccomp(tParam));
            var Tgreen_to_canvas = mat4.create();
            var tangent = Ccomp_tangent(tParam);
            var angle = Math.atan2(tangent[1],tangent[0]);
            mat4.rotateZ(Tgreen_to_blue,Tgreen_to_blue,angle);
            mat4.multiply(Tgreen_to_canvas, Tblue_to_canvas, Tgreen_to_blue);
            drawObject("black",Tgreen_to_canvas);
        }
        for(var i=0;i<k;i++){
            var kelpAt = kelp[i];
            mat4.translate(Tblue_to_canvas,Tblue_to_canvas,[kelpAt.x,-kelpAt.y,0]);
            drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,kelpC,20);
            drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,kelpC,20);
            drawTrajectory(0.0,1.0,100,C2,Tblue_to_canvas,kelpC,20);
            drawTrajectory(0.0,1.0,100,C0,Tblue_to_canvas,kelpC2,1);
            drawTrajectory(0.0,1.0,100,C1,Tblue_to_canvas,kelpC2,1);
            drawTrajectory(0.0,1.0,100,C2,Tblue_to_canvas,kelpC2,1);
            mat4.translate(Tblue_to_canvas,Tblue_to_canvas,[0,kelpAt.y,0])
        }
	//bubbles and shark
        var tx = mat3.create();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        bubble(0);
        stack.shift();//context.restore();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[dx,0]);
        shark();
        stack.shift();//context.restore();
        bubble(1);
    }
    draw();
}
window.onload = setup;

