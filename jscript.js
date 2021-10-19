var canvas = document.getElementById('myCanvas');
canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
var dx = 0;
var dx2 = 0;
function draw() {
    var ctx = canvas.getContext('2d');
    var time = new Date();
    dx= moveTrac(dx);
    dx2 = moveClouds(dx2);
    canvas.width = canvas.width;
    //sky
    ctx.fillStyle='#ccf5ff';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    function DrawFrame() {
        ctx.beginPath();
        ctx.strokeStyle = '#996633';
        //tail
        ctx.moveTo(500,250);
        ctx.lineTo(600,250);
        //leg left
        ctx.moveTo(460,500);
        ctx.lineTo(480,295);
        //leg right
        ctx.moveTo(520,295);
        ctx.lineTo(540,500);
        //cross
        ctx.moveTo(463, 470);
        ctx.lineTo(535, 430);
        ctx.moveTo(537, 470);
        ctx.lineTo(466, 430);
        //cross B
        ctx.moveTo(466, 430);
        ctx.lineTo(532, 430);
        ctx.lineTo(470, 390);
        ctx.moveTo(530, 390);
        ctx.lineTo(466, 430);
        //cross M
        ctx.moveTo(470, 390);
        ctx.lineTo(528, 390);
        ctx.lineTo(475, 350);
        ctx.moveTo(470, 390);
        ctx.lineTo(525, 350);
        //cross T
        ctx.moveTo(475, 350);
        ctx.lineTo(525, 350);

        ctx.lineWidth = 4;
        ctx.stroke();
    }
    function moveTrac(dx){
            if (dx>1000) {
                dx = -150;
            } else {
                dx = dx + 1.5;
            }
        return dx
    }
    function moveClouds(dx2){
            if (dx2>1200) {
                dx2 = -750;
            } else {
                dx2 = dx2 + 1.5;
            }
        return dx2
    }
    function Drawtail() {
        ctx.beginPath();
        ctx.fillStyle = '#996633';
        ctx.moveTo(600,250);
        ctx.lineTo(600,245);
        ctx.lineTo(645,235);
        ctx.lineTo(640,250);
        ctx.lineTo(645,265);
        ctx.lineTo(600,255);
        ctx.closePath();
        ctx.fill();
    }

    function DrawCircle(X, Y, R, W, color) {
        var X = X;
        var Y = Y;
        var R = R;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = W;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    function DrawW(color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(0,0);
        ctx.lineTo(10,60);
        ctx.lineTo(20,40);
        ctx.lineTo(0,0);
        ctx.fill();
    }

    function DrawTrac() {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#b30000';
        ctx.moveTo(20,440);
        ctx.lineTo(20,410);
        ctx.lineTo(35,410);
        ctx.lineTo(50,440);
        ctx.moveTo(70,470);
        ctx.lineTo(130,470);
        ctx.lineTo(130,435);
        ctx.moveTo(70,460);
        ctx.lineTo(130,460);
        ctx.moveTo(140,470);
        ctx.lineTo(140,435);
        ctx.lineTo(75,435);
        ctx.lineTo(70,445);
        ctx.lineTo(70,470);
        ctx.moveTo(140,435);
        ctx.lineTo(137,420);
        ctx.lineTo(75,420);
        ctx.lineTo(75,435);
        ctx.moveTo(130,470);
        ctx.lineTo(140,470);
        ctx.moveTo(120,445);
        ctx.lineTo(120,405);
        ctx.lineTo(124,405);
        ctx.lineTo(124,445);
        ctx.moveTo(75,420);
        ctx.lineTo(70,410);
        ctx.lineTo(75,405);
        ctx.lineTo(63,415);
        ctx.lineTo(70,410);
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    function DrawTire(X, Y, R, W, color, t) {
        var X = X;
        var Y = Y;
        var R = R;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = W;
        ctx.fillStyle = color;
        ctx.fill();
        //tire treds
        if (t == 0){
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 33);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -33);
            ctx.moveTo(0, 0);
            ctx.lineTo(33, 0);
            ctx.moveTo(0, 0);
            ctx.lineTo(-33, 0);
            ctx.moveTo(0, 0);
            ctx.lineTo(23, 23);
            ctx.moveTo(0, 0);
            ctx.lineTo(-23, -23);
            ctx.moveTo(0, 0);
            ctx.lineTo(-23, 23);
            ctx.moveTo(0, 0);
            ctx.lineTo(23, -23);
        }
        ctx.stroke();

    }

    function DrawCloud(){
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.fillStyle = '#d9d9d9';
	ctx.strokeStyle = '#808080';
	ctx.moveTo(170, 80);
	ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
	ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
	ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
	ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
	ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
	ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
    }

    DrawFrame();
    Drawtail();
    DrawCircle(500, 250, 50, 3, 'grey');
    DrawCircle(500, 250, 18, 4, 'grey');
    //ground
    ctx.fillStyle='#006600';
    ctx.fillRect(0,490,canvas.width,10);
    ctx.save();
    //tractor
    ctx.save();
    ctx.translate(dx,0);
    ctx.save();
    DrawTrac();
    ctx.save();
    ctx.translate(42, 460)
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    DrawTire(0, 0, 24, 13, 'black', 0);
    ctx.restore();
    ctx.translate(135, 473)
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    DrawTire(0, 0, 18, 7, 'black', 1);
    ctx.restore();
    ctx.restore();
    //clouds
    ctx.translate(dx2,0);
    DrawCloud();
    ctx.scale(.75,.75);
    ctx.translate(-300,-20);
    DrawCloud();
    ctx.scale(.5,.5)
    ctx.translate(1500,250);
    DrawCloud();
    ctx.translate(600,-150);
    ctx.scale(1.25,1.25);
    DrawCloud();
    ctx.restore();
    //windmill
    ctx.translate(500,250);
    ctx.save();
    ctx.scale(1.5,1.5);
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.rotate(45 * Math.PI / 180);
    DrawW("grey");
    ctx.restore();
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
