window.onload=world;
function world() {
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var dx = 0;
    var dy = 0;
    var dx2 = 0;
    var dir = 0;
    var tod = 0;
    var scene = 0;
    var hasKey = 0;
    var doorLock = 0;
    var sky = "#cceeff";
    var rArrow = "#ff0000";
    var lArrow = "#0099ff";
    var uArrow = "#ffff00";
    var dArrow = "#33cc33";
    var SpaceBar = "#404040";
    var theta = Math.PI/36*0;

    var context = canvas.getContext("2d");
    var stack;

    function getKeyAndMove() {
        if(scene == 0){
            switch (event.keyCode) {
                case 37: //left arrow key
                if(dx >= -490){
                    if(dx == -490){
                        scene = 2;
                        dx = 510;
                    }
                    if(dx<= 490 && dy == 0){
                        dx = dx - 10;
                        dir = 0;
                        lArrow = "#004d80";
                    }
                    if(dx <= 250 && dy != 250 && dy == 0){
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
                if(dx == 490 && dy == 0){
                    scene = 1;
                    dx = -490;
                    dy = 0;
                }
                if(dx <= 490){
                    if(dx < 490 && dy == 0){
                        dx = dx + 10;
                                dir = 1;
                        rArrow = "#800000";
                    }
                    else{
                        if(dy == -250 && dx <=480){
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
                SpaceBar = "#1a1a1a";
                if(dx == 450){
                    if(tod != 2){
                        tod = tod + 1;
                    }
                    else{
                        tod = 0;
                    }
                }
                break;
                case 27://esc
                location.href='intro.html'
                break;
            }
        }
       if(scene == 1){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(dx == -490){
                    scene = 0;
                    dx = 490;
                }
                dx = dx - 10;
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx <= 480){
                    dx = dx + 10;
                }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 27://esc
                location.href='intro.html'
                break;
                case 32://space bar
                if(dx > 140 && dx < 240){
                    if(doorLock == 1){
                        scene = 4;
                    }
                    if(doorLock == 0 && hasKey == 1){
                        doorLock = 1;
                        hasKey = 0;
                    }
                }
                SpaceBar = "#1a1a1a";
                break;
                case 27://esc
                location.href='intro.html'
                break;
            }
        }
       if(scene == 2){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(dx >= -40){
                    if(dy == 0){
                        dx = dx - 10;
                    }
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx <= 520){
                    if(dx == 520){
                        dx = -500
                        scene = 0;
                    }
                    if(dy == 0){
                        dx = dx + 10;
                    }
                }
                break;
                case 38://up
                if(dx == 0 && dy > 0){
                    dy = dy - 10;
                }
                uArrow = "#808000";
                break;
                case 40://down
                if(dx == 0){
                    dy = dy + 10;
                    if(dy == 180){
                        dy = -500;
                        scene = 3;
                    }
                }
                dArrow = "#196619";
                break;
                case 27://esc
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 27://esc
                location.href='intro.html'
                break;
            }
        }
       if(scene == 3){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 2;
                if(dx > -450 && dy >= -450){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 3;
                if(dx < 490  && dy >= -450){
                    dx = dx + 10;
                }
                break;
                case 38://up
                if(dy > -450 && dx != 0){
                    dy = dy - 10;
                }
                if(dx == 0){
                    dy = dy - 10;
                    if(dy <= -500){
                        dy = 160;
                        scene = 2;
                    }
                }
                uArrow = "#808000";
                break;
                case 40://down
                if(dy < 0){
                    dy = dy + 10;
                }
                dArrow = "#196619";
                break;
                case 27://esc
                location.href='intro.html'
                break;
                case 32://space bar
                    if(dy > -2 && dx< -350 && dx> -430){
                        hasKey = 1;
                    }
                SpaceBar = "#1a1a1a";
                break;
                case 27://esc
                location.href='intro.html'
                break;
            }
        }
       if(scene == 4){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(dx > -450 && dy >= -450){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx < 490  && dy >= -450){
                    dx = dx + 10;
                }
                break;
                case 38://up
                if(dy > -450 && dx != 0){
                    dy = dy - 10;
                }
                if(dx == 0){
                    dy = dy - 10;
                    if(dy <= -500){
                        dy = 160;
                        scene = 2;
                    }
                }
                uArrow = "#808000";
                break;
                case 40://down
                if(dy < 0){
                    dy = dy + 10;
                }
                dArrow = "#196619";
                break;
                case 27://esc
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 27://esc
                location.href='intro.html'
                break;
            }
        }
    }
    function ChangeColor() {
        switch (event.keyCode) {
        case 37: //left arrow key
            dir = 0;
            lArrow = "#0099ff";
            break;
        case 39: //right arrow key
            dir = 1;
            rArrow = "#ff0000";
            break;
        case 38://up
            uArrow = "#ffff00";
            break;
        case 40://down
            dArrow = "#33cc33";
            break;
        case 32://space bar
           SpaceBar = "#404040";
        break;
            }
    }

    function rect(x,y,w,h,C){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = C;
        context.fillRect(x,y,w,h);
    }
    function diamond(x,y,C){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = C;
        context.moveTo(x,y);
        context.lineTo(x+50,y+100);
        context.lineTo(x+100,y+0);
        context.closePath();
        context.fill();
    }

	function circ(x,y,r,s,e,c){
	    context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
		context.fillStyle = c;
		context.beginPath();
		context.arc(x,y,r,s,e);
		context.fill();
	}
    function arc(x,y,r,s,e,c,lw){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.strokeStyle = c;
        context.lineWidth = lw;
        context.beginPath();
        context.arc(x,y,r,s,e);
        context.stroke();
    }

    function draw(){
        if(scene == 3 && dy <0){
            dy = dy + .2;
        }
        if(dx == -450){
            sky = "#cceeff";
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
                    rect(450,450,60,80, "#4d4d4d");//body
                    rect(450,525,25,25, "#cc8800");//left leg
                    rect(450,545,25,5, "#000000");//left foot
                    rect(485,525,25,25, "#cc8800");//right leg
                    rect(485,545,25,5, "#000000");//right foot
                    rect(450,510,60,20, "#cc8800");//waist
                    rect(450,510,60,5, "#000000");//belt
                    rect(510,475,25,45, "#cc4400");//backpack
                    drawKey();
                    rect(475,485,20,30, "#333333");//arm
                }
                if(dir == 1){
                    rect(450,450,60,80, "#4d4d4d");
                    rect(450,525,25,25, "#cc8800");
                    rect(450,545,25,5, "#000000");
                    rect(485,525,25,25, "#cc8800");
                    rect(485,545,25,5, "#000000");
                    rect(450,510,60,20, "#cc8800");
                    rect(450,510,60,5, "#000000");
                    rect(425,475,25,45, "#cc4400");
                    drawKey();
                    rect(465,485,20,30, "#333333");
                }
                if(dir == 2){//swim left
                    rect(450,450,80,60, "#4d4d4d");//body
                    rect(525,450,25,25, "#cc8800");//left leg
                    rect(545,450,5,25, "#000000");//left foot
                    rect(525,485,25,25, "#cc8800");//right leg
                    rect(545,485,5,25, "#000000");//right foot
                    rect(510,450,20,60, "#cc8800");//waist
                    rect(510,450,5,60, "#000000");//belt
                    rect(475,425,45,25, "#cc4400");//backpack
                    drawKey();
                    rect(485,465,30,20, "#333333");//arm
                }
                if(dir == 3){//swim right
                    rect(450,450,80,60, "#4d4d4d");//body
                    rect(425,450,25,25, "#cc8800");//left leg
                    rect(425,450,5,25, "#000000");//left foot
                    rect(425,485,25,25, "#cc8800");//right leg
                    rect(425,485,5,25, "#000000");//right foot
                    rect(450,450,20,60, "#cc8800");//waist
                    rect(465,450,5,60, "#000000");//belt
                    rect(465,425,45,25, "#cc4400");//backpack
                    drawKey();
                    rect(465,465,30,20, "#333333");//arm
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
        function DrawSpace(){
            context.fillStyle = SpaceBar;
            context.fillRect(10,570,100,20);
        }
        function DrawESCP() {
            context.beginPath();
            context.strokeStyle = "#ff0000";
            context.lineWidth = 3;
            //E
            context.moveTo(955,10);
            context.lineTo(945,10);
            context.lineTo(945,19);
            context.lineTo(955,19);
            context.lineTo(945,19);
            context.lineTo(945,28);
            context.lineTo(955,28);
            context.stroke();
            //S
            context.moveTo(970,10);
            context.lineTo(960,10);
            context.lineTo(960,19);
            context.lineTo(968,19);
            context.lineTo(968,28);
            context.lineTo(958,28);
            context.stroke();
            //C
            context.lineWidth = 4;
            context.moveTo(985,10);
            context.lineTo(975,10);
            context.lineTo(975,28);
            context.lineTo(985,28);
            context.stroke();
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
        function rock(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            image = new Image();
            image.src = 'rock.png';
            context.drawImage(image, 880, 211, 100, 100);
        }
        function tree(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            tree = new Image();
            tree.src = 'tree.png';
            context.drawImage(tree, -50, 206, 450, 500);
        }
        function oldtree(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            oldtree = new Image();
            oldtree.src = 'oldTree.png';
            context.drawImage(oldtree, 30, 330, 260, 260);
        }
        function chest(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            chest = new Image();
            chest.src = 'chest.png';
            context.drawImage(chest, 50, 970, 260, 260);
        }
        function UWbackground(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            OWM = new Image();
            OWM.src = 'OWM.png';
            context.drawImage(OWM, 0, 350, myCanvas.width, 200);
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
        function sunset(){
            var grd = context.createLinearGradient(0, 0, 0, 500);
            grd.addColorStop(0, " #cceeff");
            grd.addColorStop(1, "#ffa64d");
            context.fillStyle = grd;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#ffc94f";
            context.beginPath();
            context.arc(485,540,60,0,2 * Math.PI);
            context.fill();
        }
        function underWater(){
            var grd = context.createLinearGradient(0, 0, 0, 500);
            grd.addColorStop(0, " #266691");
            grd.addColorStop(1, "#102a3c");
            context.fillStyle = grd;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#ffc94f";
        }
        function drawKey(){
            if(hasKey == 1){
                if(dir == 0){
                    arc(500,508,5,0,2 * Math.PI,"yellow", 3);
                    rect(465,505,10,3, "yellow");
                    rect(465,505,3,6, "yellow");
                    rect(472,505,3,8, "yellow");
                }
                if(dir == 1){
                    arc(460,508,5,0,2 * Math.PI,"yellow", 3);
                    rect(485,505,10,3, "yellow");
                    rect(492,505,3,6, "yellow");
                    rect(485,505,3,8, "yellow");
                }
                if(dir == 2){
                    arc(507,460,5,0,2 * Math.PI,"yellow", 3);
                    rect(503,485,3,10, "yellow");
                    rect(506,492,6,3, "yellow");
                    rect(506,485,8,3, "yellow");
                }
                if(dir == 3){
                    arc(473,460,5,0,2 * Math.PI,"yellow", 3);
                    rect(473,485,3,10, "yellow");
                    rect(468,492,6,3, "yellow");
                    rect(466,485,8,3, "yellow");
                }
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Over World
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 0){
            if(tod == 0){//day
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
                tree();
            }
            if(tod == 1){//sunset
               sunset();
               tree();
            }
            if(tod == 2){//night
                sky = "#002233";
                rect(0,0,canvas.width,canvas.height, sky);
                stars();
                stack.unshift(mat3.clone(stack[0]));//context.save();
                mat3.translate(stack[0],stack[0],[700,-50]);
                sunMoon();
                stack.shift();//context.restore();
            }
            //ground
            rect(0,550,canvas.width,50,"#86592d");
            rect(700,300,300,300,"#86592d");
            rect(700,300,300,10,"#339933");
            rect(810, 450, 100, 100, "black");//door
            circ(860,450,50,0,2 * Math.PI, "black");//door
            rect(0,550,910,10,"#339933");
            rect(920,280,20,20,"#e68a00");
            rock();
            if(tod == 2){
                oldtree();
            }
            rect(0,560,canvas.width,40,"#86592d");
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
            DrawESCP();
            DrawSpace();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            //main guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
            rect(910,430,90,120,"#86592d");
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Cave
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 1){
            rect(0,0,canvas.width,canvas.height,"#7c6450");//background
            rect(0,0,canvas.width,100,"#4a3c30");//top
            diamond(-10,100,"#4a3c30");
            diamond(80,70,"#4a3c30");
            diamond(120,90,"#4a3c30");
            diamond(200,40,"#4a3c30");
            diamond(300,100,"#4a3c30");
            diamond(450,50,"#4a3c30");
            diamond(500,90,"#4a3c30");
            diamond(700,50,"#4a3c30");
            diamond(800,80,"#4a3c30");
            diamond(850,70,"#4a3c30");
            diamond(900,100,"#4a3c30");
            //groundS
            rect(0,550,canvas.width,50,"#4a3c30");//bottom
            //door
            rect(600, 400, 150, 150, "#666666");
            circ(675,395,75,0,2 * Math.PI, "#666666");
            rect(610, 410, 130, 140, "black");
            circ(675,403,65,0,2 * Math.PI, "black");
            if(doorLock == 0){
                rect(610, 410, 130, 140, "#604020");
                circ(675,403,65,0,2 * Math.PI, "#604020");
                rect(626,358,5,192,"#261a0d");
                rect(650,341,5,215,"#261a0d");
                rect(672,337,5,215,"#261a0d");
                rect(695,341,5,215,"#261a0d");
                rect(720,358,5,192,"#261a0d");
                //bars
                rect(610,425,130,20,"#666666");
                rect(610,485,130,20,"#666666");
                //upper bar
                circ(620,435,3,0,2 * Math.PI, "#999999");
                circ(642,435,3,0,2 * Math.PI, "#999999");
                circ(664,435,3,0,2 * Math.PI, "#999999");
                circ(686,435,3,0,2 * Math.PI, "#999999");
                circ(708,435,3,0,2 * Math.PI, "#999999");
                circ(730,435,3,0,2 * Math.PI, "#999999");
                //lower bar
                circ(620,495,3,0,2 * Math.PI, "#999999");
                circ(642,495,3,0,2 * Math.PI, "#999999");
                circ(664,495,3,0,2 * Math.PI, "#999999");
                circ(686,495,3,0,2 * Math.PI, "#999999");
                circ(708,495,3,0,2 * Math.PI, "#999999");
                circ(730,495,3,0,2 * Math.PI, "#999999");
                //key handle
                circ(728,460,6,0,2 * Math.PI, "#ffcc00");
            }
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            DrawSpace();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            //main character
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Docs
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 2){
            if(tod == 0){//day
                sky = "#cceeff";
                rect(0,0,canvas.width,canvas.height, sky);
                stack.unshift(mat3.clone(stack[0]));//context.save();
                mat3.translate(stack[0],stack[0],[700,-50]);
                sunMoon();
                stack.shift();//context.restore();
            }
            if(tod == 1){//sunset
               sunset();
            }
            if(tod == 2){//night
                sky = "#002233";
                rect(0,0,canvas.width,canvas.height, sky);
                stars();
                stack.unshift(mat3.clone(stack[0]));//context.save();
                mat3.translate(stack[0],stack[0],[700,-50]);
                sunMoon();
                stack.shift();//context.restore();
            }
            //water
            rect(0,560,canvas.width,40,"#266691");
            //Doc
            rect(400,520,600,20,"#995c00");
            //ladder
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[-250,190]);
            rect(710,295,5,250,"#663300");
            rect(750,295,5,250,"#663300");
            rect(708,315,50,5,"#663300");
            rect(708,335,50,5,"#663300");
            rect(708,355,50,5,"#663300");
            rect(708,375,50,5,"#663300");
            rect(708,395,50,5,"#663300");
            stack.shift();//context.restore();
            rect(0,0,0,0,"#663300");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            DrawSpace();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            //main guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[0,-20]);
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
            //Doc Pillars
            rect(410,500,30,150,"#995c00");
            rect(570,500,30,150,"#995c00");
            rect(730,500,30,150,"#995c00");
            rect(890,500,30,150,"#995c00");
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene UnderWater
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 3){
            underWater();
            //floor
            rect(0,550,canvas.width,50,"#332200");
            //ladder
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[-250,-450]);
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
            stack.shift();//context.restore();
            UWbackground();
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.45,.45]);
            chest();
            stack.shift();//context.restore();
            rect(410,0,30,560,"#705b3f");
            rect(570,0,30,560,"#705b3f");
            rect(730,0,30,560,"#705b3f");
            rect(890,0,30,560,"#705b3f");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            DrawSpace();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            //main character
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene TBD
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 4){
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            DrawSpace();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            //main character
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
        }
    }
    draw();
    window.addEventListener('keydown',getKeyAndMove);
    window.addEventListener('keyup',ChangeColor);
}
