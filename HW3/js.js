function start(){
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var ctx = canvas.getContext("2d");
    var stack;

    function rect(x,y,w,h,C){
        ctx.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        ctx.fillStyle = C;
        ctx.fillRect(x,y,w,h);
    }
	function circ(x,y,r,s,e, c){
	    ctx.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
		ctx.fillStyle = c;
		ctx.beginPath();
		ctx.arc(x,y,r,s,e);
		ctx.fill();
	}
	function Guy(){
            var tx = mat3.create();
            mat3.fromTranslation(tx,[500,450]);
            mat3.translate(tx,tx,[-500,-450]);
            mat3.multiply(stack[0],stack[0],tx);
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


    function draw(){
    window.requestAnimationFrame(draw);
    stack =[mat3.create()];
    canvas.width=canvas.width;
	rect(0,0,canvas.width,canvas.height, "#cceeff");
	//ground
	rect(0,550,canvas.width,50,"#86592d");
	rect(700,300,300,300,"#86592d");
	rect(700,300,300,10,"#339933");
	rect(810, 450, 100, 100, "black");
	circ(860,450,50,0,2 * Math.PI, "black");
	rect(0,550,910,10,"#339933");
	//ladder
	rect(710,295,5,250,"#663300");
	rect(750,295,5,250,"#663300");
	rect(708,315,50,5,"#663300");
	rect(708,335,50,5,"#663300");
	rect(708,355,50,5,"#663300");
	rect(708,375,50,5,"#663300");
	rect(708,395,50,5,"#663300");
	rect(708,415,50,5,"#663300");
	rect(708,435,50,5,"#663300");
	rect(708,455,50,5,"#663300");
	rect(708,475,50,5,"#663300");
	rect(708,495,50,5,"#663300");
	rect(708,515,50,5,"#663300");
	rect(708,535,50,5,"#663300");
	Guy();
	rect(200,50,170,200, "#cc4400");
	rect(400,50,200,200, "#cc4400");
	rect(630,50,170,200, "#cc4400");
	rect(280,80,50,50, "#cceeff");
	rect(280,170,50,50, "#cceeff");
	rect(450,100,100,100, "#cceeff");
	rect(710,80,50,50, "#cceeff");
	rect(710,170,50,50, "#cceeff");
    }
    draw();
}
window.onload=start;

function game() {
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var dx = 0;
    var dy = 0;
    var dx2 = 0;
    var dir = 0;
    var sky = "#cceeff";
    var tod = 0;
    var rArrow = "#ff0000";
    var lArrow = "#0099ff";
    var uArrow = "#ffff00";
    var dArrow = "#33cc33";
    var theta = Math.PI/36*0;

    var context = canvas.getContext("2d");
    var stack;

    function getKeyAndMove() {
        switch (event.keyCode) {
        case 37: //left arrow key
            if(dx > -450){
		if(dx <= 250 && dy != 250 && dy == 0){
			dx = dx - 10;
                	dir = 0;
			lArrow = "#004d80";
		}
		else{
		    if(dx>250 && dy == -250){
			dx = dx - 10;
			dir = 0;
			lArrow = "#004d80";
		    }
		lArrow = "#004d80";
		}
            }
            break;
        case 39: //right arrow key
            if(dx <= 480){
		if(dx < 250 && dy != -250){
			dx = dx + 10;
                	dir = 1;
			rArrow = "#800000";
		}
		else{
		    if(dy == -250){
			dx = dx + 10;
			dir = 1;
			rArrow = "#800000";
		    }
		dir = 1;
		rArrow = "#800000";
		}
            }
            break;
	case 38://up
	uArrow = "#808000";
	if(dx == 250 && dy >= -240){
	    dy = dy - 10;
	    dir = 1;
	}
	break;
	case 40://down
	dArrow = "#196619";
	if(dx == 250 && dy < 0){
	    dy = dy + 10;
	    dir = 1;
	}
	break;
    case 32://space bar
    if(dx == 450){
        if(tod == 1){
            tod = 0;
        }
        else{
            tod = 1;
        }
    }
    break;
        }
    }
    function ChangeColor() {
        switch (event.keyCode) {
        case 37: //left arrow key
            lArrow = "#0099ff";
            break;
        case 39: //right arrow key
            rArrow = "#ff0000";
            break;
	case 38://up
	    uArrow = "#ffff00";
	    break;
	case 40://down
	    dArrow = "#33cc33";
	    break;
        }
    }

    function rect(x,y,w,h,C){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = C;
        context.fillRect(x,y,w,h);
    }

	function circ(x,y,r,s,e, c){
	    context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
		context.fillStyle = c;
		context.beginPath();
		context.arc(x,y,r,s,e);
		context.fill();
	}
	
    function draw(){
	if(dx == -450){
	    sky = "#cceeff";
	    tod = 0;
	}
        window.requestAnimationFrame(draw);
        stack =[mat3.create()];
        canvas.width=canvas.width;
	dx2 = moveClouds(dx2);

	function Guy(){
            var tx = mat3.create();
            mat3.fromTranslation(tx,[500,450]);
            mat3.translate(tx,tx,[-500,-450]);
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

	function DrawLArrow(color) {
            context.beginPath();
            context.fillStyle = color;
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.moveTo(10,60);
            context.lineTo(20,80);
            context.lineTo(20,70);
            context.lineTo(40,70);
            context.lineTo(40,50);
            context.lineTo(20,50);
            context.lineTo(20,40);
            context.closePath();
            context.stroke();
            context.fill();
        }
	function DrawRArrow(color) {
            context.beginPath();
            context.fillStyle = color;
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.moveTo(110,60);
            context.lineTo(100,40);
            context.lineTo(100,50);
            context.lineTo(80,50);
            context.lineTo(80,70);
            context.lineTo(100,70);
            context.lineTo(100,80);
            context.closePath();
            context.stroke();
            context.fill();
        }
	function DrawDArrow(color) {
            context.beginPath();
            context.fillStyle = color;
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.moveTo(60,110);
            context.lineTo(80,100);
            context.lineTo(70,100);
            context.lineTo(70,80);
            context.lineTo(50,80);
            context.lineTo(50,100);
            context.lineTo(40,100);
            context.closePath();
            context.stroke();
            context.fill();
        }
	function DrawUArrow(color) {
            context.beginPath();
            context.fillStyle = color;
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.moveTo(60,10);
            context.lineTo(40,20);
            context.lineTo(50,20);
            context.lineTo(50,40);
            context.lineTo(70,40);
            context.lineTo(70,20);
            context.lineTo(80,20);
            context.closePath();
            context.stroke();
            context.fill();
        }

	function sunMoon(){
	    context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
	    if(tod == 0){
		context.fillStyle = "#ffea00";
		context.beginPath();
		context.arc(150,150,60,0,2 * Math.PI);
		context.fill();
	    }
	    else{
		context.beginPath();
		context.arc(150,150,60,(Math.PI/180)*40,(Math.PI/180)*320);
		context.bezierCurveTo(80, 50, 88, 250, 197, 188);
		context.fillStyle = "#ffff99";
		context.fill();
	    }
	}

	function stars(){
    		for(var i=0;i<50;i++){
		context.beginPath();
      		context.arc(Math.random()*1000,Math.random()*600, 1+Math.random(), 0, Math.PI*2, true);
		context.fillStyle = "#ffff99";
		context.fill();
		}
	}

	function clouds(){
	    context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
	    	context.beginPath();
		context.lineWidth = 3;
		context.fillStyle = '#d9d9d9';
		context.strokeStyle = '#808080';
		context.moveTo(170, 80);
		context.bezierCurveTo(130, 100, 130, 150, 230, 150);
		context.bezierCurveTo(250, 180, 320, 180, 340, 150);
		context.bezierCurveTo(420, 150, 420, 120, 390, 100);
		context.bezierCurveTo(430, 40, 370, 30, 340, 50);
		context.bezierCurveTo(320, 5, 250, 20, 250, 50);
		context.bezierCurveTo(200, 5, 150, 20, 170, 80);
		context.closePath();
		context.fill();
		context.stroke();
	}
    function moveClouds(dx2){
            if (dx2>1100) {
                dx2 = -750;
            } else {
                dx2 = dx2 + 1.5;
            }
        return dx2
    }
	if(tod == 1){
	    sky = "#002233";
	    rect(0,0,canvas.width,canvas.height, sky);
	    stars();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[700,-50]);
        sunMoon();
        stack.shift();//context.restore();
	}
	if(tod == 0){
    	sky = "#cceeff";
    	rect(0,0,canvas.width,canvas.height, sky);
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[700,-50]);
        sunMoon();
        stack.shift();//context.restore();
        stack.unshift(mat3.clone(stack[0]));//context.save();
        mat3.translate(stack[0],stack[0],[dx2,0]);
        clouds();
        mat3.translate(stack[0],stack[0],[500,100]);
        mat3.scale(stack[0],stack[0],[0.5,.5]);
        clouds();
        mat3.translate(stack[0],stack[0],[-1200,-50]);
        clouds();
        stack.shift();//context.restore();
	}
	//ground
	rect(0,550,canvas.width,50,"#86592d");
	rect(700,300,300,300,"#86592d");
	rect(700,300,300,10,"#339933");
	rect(810, 450, 100, 100, "black");
	circ(860,450,50,0,2 * Math.PI, "black");
	rect(0,550,910,10,"#339933");
	//ladder
	rect(710,295,5,250,"#663300");
	rect(750,295,5,250,"#663300");
	rect(708,315,50,5,"#663300");
	rect(708,335,50,5,"#663300");
	rect(708,355,50,5,"#663300");
	rect(708,375,50,5,"#663300");
	rect(708,395,50,5,"#663300");
	rect(708,415,50,5,"#663300");
	rect(708,435,50,5,"#663300");
	rect(708,455,50,5,"#663300");
	rect(708,475,50,5,"#663300");
	rect(708,495,50,5,"#663300");
	rect(708,515,50,5,"#663300");
	rect(708,535,50,5,"#663300");
	//arrows
	DrawLArrow(lArrow);
	DrawRArrow(rArrow);
	DrawUArrow(uArrow);
	DrawDArrow(dArrow);
	//index key guy
    stack.unshift(mat3.clone(stack[0]));//context.save();
	mat3.scale(stack[0],stack[0],[0.3,.3]);
	mat3.translate(stack[0],stack[0],[-281,-303]);
	Guy();
    stack.shift();//context.restore();
	//main guy
	mat3.translate(stack[0],stack[0],[dx,dy]);
    Guy();

    }
    draw();
    window.addEventListener('keydown',getKeyAndMove);
    window.addEventListener('keyup',ChangeColor);
}
