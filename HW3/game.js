window.onload=world;
function world() {
    var canvas = document.getElementById("myCanvas");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var dx = 0;
    var dy = 0;
    var dx2 = 0;
    var dir = 0;
    var tod = 0;
    var ice = 0;
    var scene = 7;
    var hasKey = 0;
    var hasLantern = 0;
    var doorLock = 0;
    var labDoor = 0;
    var keyPad = 0;
    var snow = [];
    var numberSnow = 2000;
    //portal lock
    var head1 = 0;
    var head2 = 1;
    var head3 = 1;
    var head4 = 0;
    var head5 = 0;
    //code
    var l1 = 0;
    var l2 = 0;
    var l3 = 0;
    var l4 = 0;
    var l5 = 0;
    var l6 = 0;
    var l7 = 0;
    var l8 = 0;
    var l9 = 0;
    var l0 = 0;
    var moved = 0;
    var zeroG = 0;
    var map = 0;
    var menu = 0;
    var sky = "#cceeff";
    var rArrow = "#ff0000";
    var lArrow = "#0099ff";
    var uArrow = "#ffff00";
    var dArrow = "#33cc33";
    var context = canvas.getContext("2d");
    var stack;

    for(var i=0;i<numberSnow;i++){
        snow.push({
                y:Math.floor(Math.random() * (600 - (-300))) - 300, dx:0,dy:0,
                x:Math.floor(Math.random() * (1000 - (-500) )) - 500});
    }
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
                if(dx == 450 && dy == -250){
                    if(tod != 2){
                        tod = tod + 1;
                    }
                    else{
                        tod = 0;
                    }
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
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
                if(dx == 530){
                    scene = 6;
                    dx = -480
                }
                rArrow = "#800000";
                dir = 1;
                if(dx <= 520){
                    dx = dx + 10;
                }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                if(dx > 140 && dx < 240){
                    if(doorLock == 1){
                        dx = 440;
                        dy = -230;
                        scene = 4;
                    }
                    if(doorLock == 0 && hasKey == 1){
                        doorLock = 1;
                        hasKey = 0;
                    }
                }
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
       if(scene == 2){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(ice == 0){
                    if(dx >= -40){
                        if(dy == 0){
                            dx = dx - 10;
                        }
                    }
                }
                else{
                    if(dx == -480){
                        dx = 510
                        dy = 40;
                        scene = 8;
                    }
                    if(dx >= -40 && dy == 0){
                        dx = dx - 10;
                    }
                    if(dx >= -470 && dy == 60){
                        dx = dx - 10;
                    }
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(ice == 0){
                    if(dx <= 520){
                        if(dx == 520){
                            dx = -500;
                            scene = 0;
                        }
                        if(dy == 0){
                            dx = dx + 10;
                        }
                    }
                }
                else{
                    if(dx <= 520 && dy == 0){
                        if(dx == 520){
                            dx = -500;
                            scene = 0;
                        }
                        dx = dx + 10;
                    }
                    if(dx < 0 && dy == 60){
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
                if(ice == 0){
                    if(dx == 0){
                        dy = dy + 10;
                        if(dy == 180){
                            dy = -500;
                            scene = 3;
                        }
                    }
                }
                else{
                    if(dx == 0 && dy < 60){
                        dy = dy + 10;
                    }
                }
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
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
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                    if(dy > -2 && dx< -350 && dx> -430){
                        hasKey = 1;
                    }
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
       if(scene == 4){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(dx == -390 && head1 == 0 && head2 == 1 && head3 == 0 && head4 == 0 && head5 == 1){
                    dx = 450;
                    dy = -150;
                    scene = 5;
                }
                if(dx > -450 && dx <= 210){
                    dx = dx - 10;
                }
                if(dx > 210){
                    dx = dx - 10;
                    dy = dy + 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx < 440 && dx >= 210){
                    dy = dy - 10;
                    dx = dx + 10;
                }
                if(dx < 210){
                    dx = dx + 10;
                }
                if(dx >= 400 && dx <= 450 && dy == -230){
                    dx = 200;
                    dy = 0;
                    scene = 1;
                }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
       if(scene == 5){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                zeroG = 1;
                if(dx > -450){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                zeroG = 2;
                if(dx < 490){
                    dx = dx + 10;
                }
                break;
                case 38://up
                uArrow = "#808000";
                zeroG = 3;
                if(dy > -450){
                    dy = dy - 10;
                }
                break;
                case 40://down
                dArrow = "#196619";
                zeroG = 4;
                if(dy < 50){
                    dy = dy + 10;
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
         if(scene == 6){
            switch (event.keyCode) {
                case 37: //left arrow key
                if(dx == -480){
                    scene = 1;
                    dx = 530;
                }
                lArrow = "#004d80";
                dir = 0;
                if(dx > -500){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx < 490){
                    dx = dx + 10;
                }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                if(dx >= -390 && dx <= -350){
                    if(head1 == 0){
                        head1 = 1;
                    }
                    else{
                        head1 = 0;
                    }
                }
                if(dx >= -190 && dx <= -150){
                    if(head2 == 0){
                        head2 = 1;
                    }
                    else{
                        head2 = 0;
                    }
                }
                if(dx >= 10 && dx <= 50){
                    if(head3 == 0){
                        head3 = 1;
                    }
                    else{
                        head3 = 0;
                    }
                }
                if(dx >= 210 && dx <= 250){
                    if(head4 == 0){
                        head4 = 1;
                    }
                    else{
                        head4 = 0;
                    }
                }
                if(dx >= 410 && dx <= 450){
                    if(head5 == 0){
                        head5 = 1;
                    }
                    else{
                        head5 = 0;
                    }
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
        if(scene == 8){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 0;
                if(dx > -450){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 1;
                if(dx == 540){
                    scene = 2;
                    dy = 60;
                    dx = -490;
                }
                if(dx < 540){
                    dx = dx + 10;
                }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                if(dx == -290){
                    if(hasLantern == 0){
                        hasLantern = 1;
                    }
                    else{
                        hasLantern = 0;
                    }
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
        if(scene == 9){
            switch (event.keyCode) {
                case 37: //left arrow key
                    lArrow = "#004d80";
                    keyPad = 0;
                    dir = 2;
                    if(dx == -490){
                        scene = 10;
                        dx = 500;
                        dy = 0;
                    }
                    if(dy > -50){
                        if(dx > -490){
                            dx = dx - 10;
                        }
                    }
                    if(dx > -300 && dy < -50){
                        dx = dx - 10;
                    }
                break;
                case 39: //right arrow key
                    rArrow = "#800000";
                    keyPad = 0;
                    dir = 3;
                    if(dx == 510){
                        scene = 7;
                        dx = -500;
                    }
                    if(dx < 510){
                        dx = dx + 10;
                    }
                break;
                case 38://up
                uArrow = "#808000";
                keyPad = 0;
                    if(dy <= -490){
                        scene = 3;
                        dx = 340;
                        dy = 40;
                    }
                    if(dx < -300){
                        if(dy > -50){
                            dy = dy - 10;
                        }
                    }
                    if(dy > -510 && dx >= -300){
                        dy = dy - 10;
                    }
                break;
                case 40://down
                dArrow = "#196619";
                keyPad = 0;
                    if(dy < 0){
                        dy = dy + 10;
                    }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                if(dx == 250 && keyPad == 0){
                    keyPad = 1;
                }
                else{
                    if(dx == 250){
                        keyPad = 0;
                    }
                }
                if(dx > 370 && dx < 450 && labDoor == 1){
                    scene = 7;
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
                case 49:
                if(l1 == 0){l1 = 1}
                else{l1 = 0}
                break;
                case 50:
                if(l2 == 0){l2 = 1}
                else{l2 = 0}
                break;
                case 51:
                if(l3 == 0){l3 = 1}
                else{l3 = 0}
                break;
                case 52:
                if(l4 == 0){l4 = 1}
                else{l4 = 0}
                break;
                case 53:
                if(l5 == 0){l5 = 1}
                else{l5 = 0}
                break;
                case 54:
                if(l6 == 0){l6 = 1}
                else{l6 = 0}
                break;
                case 55:
                if(l7 == 0){l7 = 1}
                else{l7 = 0}
                break;
                case 56:
                if(l8 == 0){l8 = 1}
                else{l8 = 0}
                break;
                case 57:
                if(l9 == 0){l9 = 1}
                else{l9 = 0}
                break;
                case 58:
                if(l0 == 0){l0 = 1}
                else{l0 = 0}
                break;
            }
        }
        if(scene == 7){
            switch (event.keyCode) {
                case 37: //left arrow key
                    lArrow = "#004d80";
                    dir = 0;
                    dx = dx - 10;
                    if(dx == - 490){
                        scene = 9;
                        dx = 500;
                    }
                break;
                case 39: //right arrow key
                    rArrow = "#800000";
                    dir = 1;
                    if(dx < 490){
                        dx = dx + 10;
                    }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                if(dx> -10 && dx < 100){
                    moved = 0;
                    scene = 11;
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
        if(scene == 10){
            switch (event.keyCode) {
                case 37: //left arrow key
                lArrow = "#004d80";
                dir = 2;
                if(dx > -450){
                    dx = dx - 10;
                }
                break;
                case 39: //right arrow key
                rArrow = "#800000";
                dir = 3;
                if(dx == 530){
                    scene = 9;
                    dx = -500;
                    dy = 0;
                }
                if(dx < 530){
                    if(dy > -50){
                        dx = dx + 10;
                    }
                    if(dy > -450 && dx <= 330){
                        dx = dx + 10;
                    }
                }
                break;
                case 38://up
                    if(dx > 350){
                        if(dy > -50){
                            dy = dy - 10;
                        }
                    }
                    if(dy > -450 && dx <= 350){
                        dy = dy - 10;
                    }
                uArrow = "#808000";
                break;
                case 40://down
                if(dy < 0){
                    dy = dy + 10;
                }
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
        if(scene == 11){
            switch (event.keyCode) {
                case 37: //left arrow key
                    lArrow = "#004d80";
                    dir = 0;
                    moved = 1;
                    if(dx > -450){
                        dx = dx - 10;
                    }
                break;
                case 39: //right arrow key
                    rArrow = "#800000";
                    dir = 1;
                    moved = 1;
                    if(dx < 490){
                        dx = dx + 10;
                    }
                break;
                case 38://up
                uArrow = "#808000";
                break;
                case 40://down
                dArrow = "#196619";
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 32://space bar
                SpaceBar = "#1a1a1a";
                if(dx> -10 && dx < 100 && moved == 1){
                    scene = 7;
                }
                break;
                case 82://r
                location.href='intro.html'
                break;
                case 27://esc
                if(menu == 0){
                    menu = 1;
                }
                else{
                    menu = 0;
                }
                break;
                case 77://Map
                if(map == 0){
                    map = 1;
                }
                else{
                    map = 0;
                }
                break;
            }
        }
    }
    function ChangeColor() {
        switch (event.keyCode) {
        case 37: //left arrow key
            if(scene == 3 || scene == 9 || scene == 10){
                dir = 0;
            }
            lArrow = "#0099ff";
            break;
        case 39: //right arrow key
            if(scene == 3 || scene == 9 || scene == 10){
                dir = 1;
            }
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

    function drawRect(x,y,w,h,C){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = C;
        context.fillRect(x,y,w,h);
    }
    function tile(x,y,w,h,Color,lw){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.strokeStyle = Color;
        context.lineWidth = lw;
        context.rect(x,y,w,h);
        context.stroke();
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Handle Movements
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function draw(){
        //ice on docs
        if(head1 == 1 && head2 == 1 && head3 == 0 && head4 == 1 && head5 == 0){
            ice = 1;
        }
        else{
            ice = 0;
        }
        //under water
        if(scene == 3 || scene == 9 || scene == 10){
            if(dy > 50){
               scene = 9;
               dy = -500;
               dx = 0;
            }
            if(dy <0){
                dy = dy + .2;
            }
            else{
                if(dx >= 320 && dx <= 370 && scene == 3){
                    dy = dy + .2;
                }
            }
        }
        //gravity
        if (scene == 5){
            if (zeroG == 1 && dx > -450){//left
                dx = dx - .5;
            }
            if (zeroG == 2 && dx < 490){//right
                dx = dx + .5;
            }
            if (zeroG == 3 && dy > -450){//up
                dy = dy - .5;
            }
            if (zeroG == 4 && dy < 50){//down
                dy = dy + .5;
            }
        }
        if(dx == -450){
            sky = "#cceeff";
        }
        function drawSnow(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            for(var i=0;i<numberSnow;i++){
                var snowAt = snow[i];
                if(snowAt.dx > 1000 || snowAt.dy > 600){
                    snowAt.dx = 0;
                    snowAt.dy = 0;
                }
                else{
                    snowAt.dx = snowAt.dx + 1;
                    snowAt.dy = snowAt.dy + 3;
                }
                context.beginPath();
                context.arc(snowAt.x + snowAt.dx, snowAt.y + snowAt.dy, 1, 0, 2 * Math.PI);
                context.lineWidth = 1;
                context.strokeStyle = "white";
                context.stroke();
            }
        }
        if(l1 == 1 && l2 == 0 && l3 == 1 && l4 == 1 && l5 == 0 && l6 == 0 && l7 == 0 && l8 == 1 && l9 == 0 && l0 == 0){
            labDoor = 1;
            keyPad = 0;
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// DRAW
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                    drawRect(450,450,60,80, "#4d4d4d");//body
                    drawRect(450,525,25,25, "#cc8800");//left leg
                    drawRect(450,545,25,5, "#000000");//left foot
                    drawRect(485,525,25,25, "#cc8800");//right leg
                    drawRect(485,545,25,5, "#000000");//right foot
                    drawRect(450,510,60,20, "#cc8800");//waist
                    drawRect(450,510,60,5, "#000000");//belt
                    drawRect(510,475,25,45, "#cc4400");//backpack
                    if(hasLantern == 1){
                        drawLantern(455+(dx/1000000),500+(dy/1000000));
                    }
                    drawKey();
                    drawRect(475,485,20,30, "#333333");//arm
                    marker()
                }
                if(dir == 1){
                    drawRect(450,450,60,80, "#4d4d4d");
                    drawRect(450,525,25,25, "#cc8800");
                    drawRect(450,545,25,5, "#000000");
                    drawRect(485,525,25,25, "#cc8800");
                    drawRect(485,545,25,5, "#000000");
                    drawRect(450,510,60,20, "#cc8800");
                    drawRect(450,510,60,5, "#000000");
                    drawRect(425,475,25,45, "#cc4400");
                    if(hasLantern == 1){
                        drawLantern(450+(dx/1000000),500+(dy/1000000));
                    }
                    drawKey();
                    drawRect(465,485,20,30, "#333333");
                    marker()
                }
                if(dir == 2){//swim left
                    drawRect(450,450,80,60, "#4d4d4d");//body
                    drawRect(525,450,25,25, "#cc8800");//left leg
                    drawRect(545,450,5,25, "#000000");//left foot
                    drawRect(525,485,25,25, "#cc8800");//right leg
                    drawRect(545,485,5,25, "#000000");//right foot
                    drawRect(510,450,20,60, "#cc8800");//waist
                    drawRect(510,450,5,60, "#000000");//belt
                    drawRect(475,425,45,25, "#cc4400");//backpack
                    drawKey();
                    if(hasLantern == 1){
                        drawLantern(480+(dx/1000000),475+(dy/1000000));
                    }
                    drawRect(485,465,30,20, "#333333");//arm
                    marker()
                }
                if(dir == 3){//swim right
                    drawRect(450,450,80,60, "#4d4d4d");//body
                    drawRect(425,450,25,25, "#cc8800");//left leg
                    drawRect(425,450,5,25, "#000000");//left foot
                    drawRect(425,485,25,25, "#cc8800");//right leg
                    drawRect(425,485,5,25, "#000000");//right foot
                    drawRect(450,450,20,60, "#cc8800");//waist
                    drawRect(465,450,5,60, "#000000");//belt
                    drawRect(465,425,45,25, "#cc4400");//backpack
                    if(hasLantern == 1){
                        drawLantern(445+(dx/1000000),475+(dy/1000000));
                    }
                    drawKey();
                    drawRect(465,465,30,20, "#333333");//arm
                    marker()
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
        function DrawESCP() {
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
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
            image.src = 'photos/rock.png';
            context.drawImage(image, 880, 211, 100, 100);
        }
        function tree(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            tree = new Image();
            tree.src = 'photos/tree.png';
            context.drawImage(tree, -50, 206, 450, 500);
        }
        function oldtree(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            oldtree = new Image();
            oldtree.src = 'photos/oldTree.png';
            context.drawImage(oldtree, 30, 330, 260, 260);
        }
        function chest(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            chest = new Image();
            chest.src = 'photos/chest.png';
            context.drawImage(chest, 50, 970, 260, 260);
        }
        function UWbackground(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            OWM = new Image();
            OWM.src = 'photos/OWM.png';
            context.drawImage(OWM, 0, 350, myCanvas.width, 200);
        }
        function drawPortal(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            portal = new Image();
            portal.src = 'photos/portal.png';
            context.drawImage(portal, 0, 120, 180, 420);
        }
        function drawSpacePortal(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            spacePortal = new Image();
            spacePortal.src = 'photos/spacePortal.png';
            context.drawImage(spacePortal, 820, 120, 180, 420);
        }
        function drawMenu(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            book = new Image();
            book.src = 'photos/book.png';
            context.drawImage(book, 0, 0, 1000, 500);
        }
        function drawPlanet(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            planet = new Image();
            planet.src = 'photos/planet.png';
            context.drawImage(planet, 190, 60, 200, 200);
        }
        function drawPedestal(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            ped = new Image();
            ped.src = 'photos/ped.png';
            context.drawImage(ped, -10, 400, 200, 200);
        }
        function drawJung(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            jungle = new Image();
            jungle.src = 'photos/jungle.png';
            context.drawImage(jungle, 0, 0, 1000, 600);
        }
        function drawHead(x,y){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            head = new Image();
            head.src = 'photos/head.png';
            context.drawImage(head, x, y, 120, 240);
        }
        function drawBoat(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            boat = new Image();
            boat.src = 'photos/boat.png';
            context.drawImage(boat, 80, 380, 200, 200);
        }
        function drawTorch(x,y){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            torch = new Image();
            torch.src = 'photos/torch.png';
            context.drawImage(torch, x, y, 100, 100);
        }
        function drawLantern(x,y){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            lantern = new Image();
            lantern.src = 'photos/lantern.png';
            context.drawImage(lantern, x, y, 60, 60);
        }
        function drawPine(x,y){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            pine = new Image();
            pine.src = 'photos/pine.png';
            context.drawImage(pine, x, y, 200, 400);
        }
        function drawWinterSky(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            wintersky = new Image();
            wintersky.src = 'photos/wintersky.png';
            context.drawImage(wintersky, 0, 0, 1000, 600);
        }
        function drawDarkCave(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            darkCave = new Image();
            darkCave.src = 'photos/darkCave.png';
            context.drawImage(darkCave, 0, 0, 1000, 600);
        }
        function drawCrystalCave(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            crystalCave = new Image();
            crystalCave.src = 'photos/crystalCave.png';
            context.drawImage(crystalCave, 0, 0, 1000, 600);
        }
        function drawCode(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            code = new Image();
            code.src = 'photos/code.png';
            context.drawImage(code, 20, 500, 100, 100);
        }
        function drawDoorC(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            door = new Image();
            door.src = 'photos/door.png';
            context.drawImage(door, 740, 380, 300, 200);
        }
        function drawDoorO(){
            context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
            doorOpen = new Image();
            doorOpen.src = 'photos/doorOpen.png';
            context.drawImage(doorOpen, 793, 386, 200, 186);
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
        function drawDarkness(){
            movex = dx/100000;
            movey = dy/100000;
            context.fillStyle = "black";
            context.beginPath();
            context.arc(movex - 20 + 500,movey + 500,100,Math.PI,0);
            context.lineTo(movex + 2000 + 500,movey + 500);//right
            context.lineTo(movex + 2000 + 500,movey - 1000 + 500);//top right
            context.lineTo(movex - 2000 + 500,movey - 1000 + 500);//top left
            context.lineTo(movex - 2000 + 500,movey + 500);//left
            context.lineTo(movex - 20 + 500,movey + 500);//end
            context.fill();
            context.beginPath();
            context.arc(movex - 20 + 500,movey + 500,100,0,Math.PI);
            context.lineTo(movex - 2000 + 500,movey + 500);//left
            context.lineTo(movex - 2000 + 500,movey + 1000 + 500);//top left
            context.lineTo(movex + 2000 + 500,movey + 1000 + 500);//top right
            context.lineTo(movex + 2000 + 500,movey + 500);//right
            context.lineTo(movex - 20 + 500,movey + 500);//end
            context.fill();
        }
        function drawElevator(){
            context.fillStyle = "#2a333c";
            context.beginPath();
            //up
            context.moveTo(610,430);
            context.lineTo(620,430);
            context.lineTo(615,420);
            context.lineTo(610,430);
            context.fill();
            //down
            context.moveTo(610,435);
            context.lineTo(620,435);
            context.lineTo(615,445);
            context.lineTo(610,435);
            context.fill();
        }
        function drawKey(){
            if(hasKey == 1){
                if(dir == 0){
                    arc(500,508,5,0,2 * Math.PI,"yellow", 3);
                    drawRect(465,505,10,3, "yellow");
                    drawRect(465,505,3,6, "yellow");
                    drawRect(472,505,3,8, "yellow");
                    arc(0,0,0,0,2 * Math.PI,"yellow", 3);
                }
                if(dir == 1){
                    arc(460,508,5,0,2 * Math.PI,"yellow", 3);
                    drawRect(485,505,10,3, "yellow");
                    drawRect(492,505,3,6, "yellow");
                    drawRect(485,505,3,8, "yellow");
                    arc(0,0,0,0,2 * Math.PI,"yellow", 3);
                }
                if(dir == 2){
                    arc(507,460,5,0,2 * Math.PI,"yellow", 3);
                    drawRect(503,485,3,10, "yellow");
                    drawRect(506,492,6,3, "yellow");
                    drawRect(506,485,8,3, "yellow");
                    arc(0,0,0,0,2 * Math.PI,"yellow", 3);
                }
                if(dir == 3){
                    arc(473,460,5,0,2 * Math.PI,"yellow", 3);
                    drawRect(473,485,3,10, "yellow");
                    drawRect(468,492,6,3, "yellow");
                    drawRect(466,485,8,3, "yellow");
                    arc(0,0,0,0,2 * Math.PI,"yellow", 3);
                }
            }
        }
        function drawMap(color){
            if(scene == 0){
                drawRect(415,200,180,108, "grey");
            }
            if(scene == 1){
                drawRect(610,200,180,108, "grey");
            }
            if(scene == 2){
                drawRect(220,200,180,108, "grey");
            }
            if(scene == 3){
                drawRect(220,330,180,108, "grey");
            }
            if(scene == 4){
                drawRect(610,330,180,108, "grey");
            }
            if(scene == 5){
                drawRect(415,330,180,108, "grey");
            }
            if(scene == 6){
                drawRect(805,200,180,108, "grey");
            }
            if(scene == 7){
                drawRect(415,460,180,108, "grey");
            }
            if(scene == 8){
                drawRect(25,200,180,108, "grey");
            }
            if(scene == 9){
                drawRect(220,460,180,108, "grey");
            }
            if(scene == 10){
                drawRect(25,460,180,108, "grey");
            }
            if(scene == 11){
                drawRect(415,70,180,108, "grey");
            }
            tile(220,200,180,108,color,3);//2
            tile(415,200,180,108,color,3);//0
            tile(610,200,180,108,color,3);//1
            tile(220,330,180,108,color,3);//3
            tile(610,330,180,108,color,3);//4
            tile(415,330,180,108,color,3);//5
            tile(805,200,180,108,color,3);//6
            tile(415,460,180,108,color,3);//7
            tile(25,200,180,108,color,3);//8
            tile(220,460,180,108,color,3);//9
            tile(25,460,180,108,color,3);//10
            tile(415,70,180,108,color,3);//11

            drawRect(0,0,0,0,"#6b532e");
        }
        function marker(){
            context.fillStyle = "red";
            context.strokeStyle = "black";
            context.lineWidth = 1;
            var Location = 0;
            if(scene == 0){
                if(dx == 450 && dy == -250){
                    Location = 1;
                }
            }
            if(scene == 1){
                if(dx > 140 && dx < 240){
                    Location = 1;
                }
            }
            if(scene == 3){
                if(dy> -2 && dx < -350 && dx > -430){
                    Location = 1;
                }
            }
            if(scene == 6){
                if(dx >= -390 && dx <= -350){
                    Location = 1;
                }
                if(dx >= -190 && dx <= -150){
                    Location = 1;
                }
                if(dx >= 10 && dx <= 50){
                    Location = 1;
                }
                if(dx >= 210 && dx <= 250){
                    Location = 1;
                }
                if(dx >= 410 && dx <= 450){
                    Location = 1;
                }
            }
            if(scene == 8){
                if(dx == -290){
                    Location = 1;
                }
            }
            if(scene == 9){
                if(dx == 250){
                    Location = 1;
                }
                if(dx > 370 && dx < 450){
                    Location = 1;
                }
            }
            if(scene == 7){
                if(dx > -10 && dx < 100){
                    Location = 1;
                }
            }
            if(scene == 11){
                if(dx > -10 && dx < 100){
                    Location = 1;
                }
            }
            if(Location == 1){
                if(dir == 0){
                    context.moveTo(465,420);
                    context.lineTo(495,420);
                    context.lineTo(480,435);
                    context.lineTo(465,420);
                    context.fill();
                    context.stroke();
                }
                if(dir == 1){
                    context.moveTo(465,420);
                    context.lineTo(495,420);
                    context.lineTo(480,435);
                    context.lineTo(465,420);
                    context.fill();
                    context.stroke();
                }
                if(dir == 2){
                    context.moveTo(465,420);
                    context.lineTo(495,420);
                    context.lineTo(480,435);
                    context.lineTo(465,420);
                    context.fill();
                    context.stroke();
                }
                if(dir == 3){
                    context.moveTo(465,420);
                    context.lineTo(495,420);
                    context.lineTo(480,435);
                    context.lineTo(465,420);
                    context.fill();
                    context.stroke();
                }
            }
        }
        function clear(){
            context.strokeStyle = "black";
            context.beginPath();
            context.lineWidth = 3;
            context.moveTo(0,0);
            context.lineTo(0,0);
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Over World
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 0){
            if(tod == 0){//day
                sky = "#cceeff";
                drawRect(0,0,canvas.width,canvas.height, sky);
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
                drawRect(0,0,canvas.width,canvas.height, sky);
                stars();
                stack.unshift(mat3.clone(stack[0]));//context.save();
                mat3.translate(stack[0],stack[0],[700,-50]);
                sunMoon();
                stack.shift();//context.restore();
            }
            //ground
            drawRect(0,550,canvas.width,50,"#86592d");
            drawRect(700,300,300,300,"#86592d");
            drawRect(700,300,300,10,"#339933");
            drawRect(810, 450, 100, 100, "black");//door
            circ(860,450,50,0,2 * Math.PI, "black");//door
            drawRect(0,550,910,10,"#339933");
            drawRect(920,280,20,20,"#e68a00");
            rock();
            if(tod == 2){
                oldtree();
            }
            drawRect(0,560,canvas.width,40,"#86592d");
            //ladder
            drawRect(710,295,5,250,"#663300");
            drawRect(750,295,5,250,"#663300");
            drawRect(708,315,50,5,"#663300");
            drawRect(708,335,50,5,"#663300");
            drawRect(708,355,50,5,"#663300");
            drawRect(708,375,50,5,"#663300");
            drawRect(708,395,50,5,"#663300");
            drawRect(708,415,50,5,"#663300");
            drawRect(708,435,50,5,"#663300");
            drawRect(708,455,50,5,"#663300");
            drawRect(708,475,50,5,"#663300");
            drawRect(708,495,50,5,"#663300");
            drawRect(708,515,50,5,"#663300");
            drawRect(708,535,50,5,"#663300");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            drawRect(910,430,90,200,"#86592d");
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Cave
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 1){
            //background
            drawRect(0,0,canvas.width,canvas.height,"#7c6450");
            //portal code
            drawRect(200,200,5,40,"#6d5746");
            drawRect(210,200,5,40,"#6d5746");
            drawRect(220,215,20,5,"#6d5746");
            drawRect(245,200,5,40,"#6d5746");
            drawRect(255,200,5,40,"#6d5746");
            drawRect(265,200,5,40,"#6d5746");
            drawRect(275,200,5,40,"#6d5746");
            drawRect(285,200,5,40,"#6d5746");
            //ice code
            drawRect(815,400,5,40,"#6d5746");
            drawRect(825,415,20,5,"#6d5746");
            drawRect(850,400,5,40,"#6d5746");
            drawRect(860,400,5,40,"#6d5746");
            drawRect(870,415,20,5,"#6d5746");
            drawRect(895,400,5,40,"#6d5746");
            drawRect(905,400,5,40,"#6d5746");
            drawRect(915,400,5,40,"#6d5746");
            drawRect(925,400,5,40,"#6d5746");
            //top
            drawRect(0,0,canvas.width,100,"#4a3c30");
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
            drawRect(0,550,canvas.width,50,"#4a3c30");//bottom
            //door
            drawRect(600, 400, 150, 150, "#666666");
            circ(675,395,75,0,2 * Math.PI, "#666666");
            drawRect(610, 410, 130, 140, "black");
            circ(675,403,65,0,2 * Math.PI, "black");
            if(doorLock == 0){
                drawRect(610, 410, 130, 140, "#604020");
                circ(675,403,65,0,2 * Math.PI, "#604020");
                drawRect(626,358,5,192,"#261a0d");
                drawRect(650,341,5,210,"#261a0d");
                drawRect(672,337,5,213,"#261a0d");
                drawRect(695,341,5,210,"#261a0d");
                drawRect(720,358,5,192,"#261a0d");
                //bars
                drawRect(610,425,130,20,"#666666");
                drawRect(610,485,130,20,"#666666");
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
            drawTorch(100,300);
            drawTorch(400,300);
            drawTorch(800,300);
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Docs
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 2){
        var ladderC = "#663300";
        var pillar = "#995c00";
            if(ice != 1){
                if(tod == 0){//day
                    sky = "#cceeff";
                    drawRect(0,0,canvas.width,canvas.height, sky);
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
                    drawRect(0,0,canvas.width,canvas.height, sky);
                    stars();
                    stack.unshift(mat3.clone(stack[0]));//context.save();
                    mat3.translate(stack[0],stack[0],[700,-50]);
                    sunMoon();
                    stack.shift();//context.restore();
                }
            //water
            drawRect(0,560,canvas.width,40,"#266691");
            }
            else{
                //winter sky
                drawWinterSky();
                //ice
                drawRect(0,560,canvas.width,40,"#cceeff");
                //pillars
                ladderC = "#47331f";
                pillar = "#6b532e";
            }
            drawBoat();
            //Doc
            drawRect(400,520,600,20,pillar);
            //ladder
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[-250,190]);
            drawRect(710,295,5,250,ladderC);
            drawRect(750,295,5,250,ladderC);
            drawRect(708,315,50,5,ladderC);
            drawRect(708,335,50,5,ladderC);
            drawRect(708,355,50,5,ladderC);
            drawRect(708,375,50,5,ladderC);
            drawRect(708,395,50,5,ladderC);
            stack.shift();//context.restore();
            drawRect(0,0,0,0,"#663300");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            drawRect(410,500,30,150,pillar);
            drawRect(570,500,30,150,pillar);
            drawRect(730,500,30,150,pillar);
            drawRect(890,500,30,150,pillar);
            if(ice == 1){
                drawSnow();
            }
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene UnderWater
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 3){
            underWater();
            //floor
            drawRect(0,550,canvas.width,50,"#332200");
            drawRect(770,550,110,70,"#0a1d29");
            //ladder
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[-250,-450]);
            drawRect(710,295,5,250,"#663300");
            drawRect(750,295,5,250,"#663300");
            drawRect(708,315,50,5,"#663300");
            drawRect(708,335,50,5,"#663300");
            drawRect(708,355,50,5,"#663300");
            drawRect(708,375,50,5,"#663300");
            drawRect(708,395,50,5,"#663300");
            drawRect(708,415,50,5,"#663300");
            drawRect(708,435,50,5,"#663300");
            drawRect(708,455,50,5,"#663300");
            drawRect(708,475,50,5,"#663300");
            drawRect(708,495,50,5,"#663300");
            drawRect(708,515,50,5,"#663300");
            drawRect(708,535,50,5,"#663300");
            stack.shift();//context.restore();
            UWbackground();
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.45,.45]);
            chest();
            stack.shift();//context.restore();
            drawRect(410,0,30,560,"#705b3f");
            drawRect(570,0,30,560,"#705b3f");
            drawRect(730,0,30,560,"#705b3f");
            drawRect(890,0,30,560,"#705b3f");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Portal Room
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 4){
            drawRect(0,0,canvas.width,canvas.height,"#433860");
            //bricks lat
            drawRect(0,50,canvas.width,4,"#2f213b");
            drawRect(0,110,canvas.width,4,"#2f213b");
            drawRect(0,170,canvas.width,4,"#2f213b");
            drawRect(0,230,canvas.width,4,"#2f213b");
            drawRect(0,290,canvas.width,4,"#2f213b");
            drawRect(0,350,canvas.width,4,"#2f213b");
            drawRect(0,410,canvas.width,4,"#2f213b");
            drawRect(0,470,canvas.width,4,"#2f213b");
            drawRect(0,530,canvas.width,4,"#2f213b");
            //bricks vert
            var j = -10;
            while(j < 550){
                var i = -500 + j;
                while(i < 1000){
                    drawRect(i,j,4,60,"#2f213b");
                    i = i + 100;
                }
                j = j + 60;
            }
            drawRect(0,550,canvas.width,50,"#170e19");
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[230,-230]);
            drawRect(600, 400, 150, 150, "#65738c");
            circ(675,395,75,0,2 * Math.PI, "#65738c");
            drawRect(610, 410, 130, 140, "black");
            circ(675,403,65,0,2 * Math.PI, "black");
            stack.shift();//context.restore();
            //staris
            drawRect(800,300,500,50,"#170e19");
            drawRect(805,305,500,40,"#2f213b");
            drawRect(740,350,500,50,"#170e19");
            drawRect(745,355,500,40,"#2f213b");
            drawRect(680,400,500,50,"#170e19");
            drawRect(685,405,500,40,"#2f213b");
            drawRect(620,450,500,50,"#170e19");
            drawRect(625,455,500,40,"#2f213b");
            drawRect(560,500,500,50,"#170e19");
            drawRect(565,505,500,40,"#2f213b");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
            drawPedestal();
            if(head1 == 0 && head2 == 1 && head3 == 0 && head4 == 0 && head5 == 1){
                drawPortal();
            }
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
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Outer Space
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 5){
            if(dx > 440 && dx <460 && dy > -300 && dy < 0 && dir == 1){
                scene = 4;
                dx = -380;
                dy = 0;
            }
            sky = "#0d0d0d";
            drawRect(0,0,canvas.width,canvas.height, sky);
            stars();
            drawSpacePortal();
            drawPlanet();
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            drawCode();
            if(map == 1){
                drawMap("#ba1e68");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Jungle
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 6){
            drawJung();
            drawHead(50,320);
            drawHead(250,320);
            drawHead(450,320);
            drawHead(650,320);
            drawHead(850,320);
            //eyes
            if(head1 == 1){
                drawRect(77,369,15,8, "#54962c");
                drawRect(127,369,16,8, "#54962c");
            }
            if(head2 == 1){
                drawRect(277,369,15,8, "#54962c");
                drawRect(327,369,16,8, "#54962c");
            }
            if(head3 == 1){
                drawRect(477,369,15,8, "#54962c");
                drawRect(527,369,16,8, "#54962c");
            }
            if(head4 == 1){
                drawRect(677,369,15,8, "#54962c");
                drawRect(727,369,16,8, "#54962c");
            }
            if(head5 == 1){
                drawRect(877,369,15,8, "#54962c");
                drawRect(927,369,16,8, "#54962c");
            }
            drawRect(0,0,0,0, "#1b0909");
            drawRect(0,550,canvas.width,50, "#1b0909");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Ice
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 8){
            drawWinterSky();
            //ice
            drawRect(0,560,canvas.width,40,"#cceeff");
            drawRect(0,560,400,40,"#80664d");
            drawPine(-50,200);
            drawPine(220,200);
            if(hasLantern == 0){
                drawLantern(160,450);
            }
            drawRect(153,420,10,150,"#6b532e");
            drawRect(153,420,40,10,"#6b532e");
            drawRect(183,420,10,30,"#6b532e");
            //drawRect(0,560,400,10,"white");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            drawSnow();
             drawRect(0,0,0,0,"#6b532e");
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Dark
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 9){
            drawDarkCave();
            drawRect(0,550,canvas.width,50,"#1b1b09");
            drawRect(750,0,300,600,"#1b1b09");
            drawRect(0,0,150,400,"#1b1b09");
            drawRect(765,450,20,30,"#556677");
            drawRect(768,453,14,24,"#8899aa");
            if(labDoor == 0){
                circ(778,457,2,0,2 * Math.PI, "#ff3300");
                drawDoorC();
            }
            else{
                circ(778,457,2,0,2 * Math.PI, "#66ff66");
                drawDoorO();
            }
            //main character
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
            if(hasLantern == 1){
                //drawDarkness();
            }
            else{
                drawRect(0,0,canvas.width,canvas.height,"black");
            }
            drawRect(0,0,0,0,"#6b532e");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            if(keyPad == 1){
                drawRect(350,75,300,450,"#556677");
                drawRect(360,85,280,430,"#8899aa");
                drawRect(370,125,80,80,"#556677");//1
                drawRect(460,125,80,80,"#556677");//2
                drawRect(550,125,80,80,"#556677");//3
                drawRect(370,215,80,80,"#556677");//4
                drawRect(460,215,80,80,"#556677");//5
                drawRect(550,215,80,80,"#556677");//6
                drawRect(370,305,80,80,"#556677");//7
                drawRect(460,305,80,80,"#556677");//8
                drawRect(550,305,80,80,"#556677");//9
                drawRect(460,395,80,80,"#556677");//8
                if(l1==1){drawRect(370,125,80,80,"#ff3300")};//1
                if(l2==1){drawRect(460,125,80,80,"#ff3300")};//2
                if(l3==1){drawRect(550,125,80,80,"#ff3300")};//3
                if(l4==1){drawRect(370,215,80,80,"#ff3300")};//4
                if(l5==1){drawRect(460,215,80,80,"#ff3300")};//5
                if(l6==1){drawRect(550,215,80,80,"#ff3300")};//6
                if(l7==1){drawRect(370,305,80,80,"#ff3300")};//7
                if(l8==1){drawRect(460,305,80,80,"#ff3300")};//8
                if(l9==1){drawRect(550,305,80,80,"#ff3300")};//9
                if(l0==1){drawRect(460,395,80,80,"#ff3300")};//0
                if(labDoor == 0){
                    circ(610,105,10,0,2 * Math.PI, "#ff3300");
                }
                else{
                    circ(610,105,10,0,2 * Math.PI, "#66ff66");
                }
            }
            if(map == 1 && keyPad == 0){
                drawMap("#ba1e68");
            }
            if(menu == 1 && keyPad != 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Code Room/ELV
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 7){
            drawRect(0,0,canvas.width,canvas.height,"#8899aa");//background
            drawRect(0,550,canvas.width,50,"#556677");//floor
            drawRect(425,300,200,250,"#3f4d5a");//outline
            drawRect(445,320,160,230,"#8899aa");//doors
            drawRect(525,320,5,230,"#2a333c");//line
            drawRect(475,270,100,30,"#3f4d5a");//top
            drawRect(490,280,20,20,"#2a333c");//floors
            drawRect(515,280,20,20,"#2a333c");//floors
            drawRect(540,280,20,20,"#2a333c");//floors
            drawElevator();
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            if(map == 1){
                drawMap("#ba1e68");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Crystal Cave
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 10){
            drawCrystalCave();
            drawRect(850,0,150,400,"#0c1a27");
            drawRect(0,550,canvas.width,50,"#0c1a27");
            //main character
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.translate(stack[0],stack[0],[dx,dy]);
            Guy();
            stack.shift();//context.restore();
            if(hasLantern == 1){
                //drawDarkness();
            }
            else{
                drawRect(0,0,canvas.width,canvas.height,"black");
            }
            drawRect(0,0,0,0,"#6b532e");
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
            //index key guy
            stack.unshift(mat3.clone(stack[0]));//context.save();
            mat3.scale(stack[0],stack[0],[0.3,.3]);
            mat3.translate(stack[0],stack[0],[-281,-303]);
            Guy();
            stack.shift();//context.restore();
            if(map == 1){
                drawMap("#ba1e68");
            }
            if(menu == 1){
                drawMenu();
            }
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Scene Desert
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(scene == 11){
            //arrows
            DrawLArrow(lArrow);
            DrawRArrow(rArrow);
            DrawUArrow(uArrow);
            DrawDArrow(dArrow);
            DrawESCP();
            clear();
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
            if(map == 1){
                drawMap("black");
            }
            if(menu == 1){
                drawMenu();
            }
        }
    }
    draw();
    window.addEventListener('keydown',getKeyAndMove);
    window.addEventListener('keyup',ChangeColor);
}
