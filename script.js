function setup() {
    var canvas = document.getElementById('myCanvas');
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px dotted";
    var slider1 = document.getElementById('slider1');
    slider1.value = 200;
    var slider2 = document.getElementById('slider2');
    slider2.value = 3090;

    function draw() {
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = slider1.value;
        var hexcolor = parseInt((slider2.value), 10).toString(16);
	
        function DrawBigW(color) {
            context.beginPath();
            context.fillStyle = color;
            context.moveTo(150,220);
            context.lineTo(175,220);
            context.lineTo(230,350);
            context.lineTo(285,240);
            context.lineTo(310,240);
            context.lineTo(365,350);
            context.lineTo(420,220);
            context.lineTo(445,220);
            context.lineTo(377,380);
            context.lineTo(352,380);
            context.lineTo(298,265);
            context.lineTo(241,380);
            context.lineTo(216,380);
            context.closePath();
            context.fill();
        }

        function DrawRedC(color) {
            context.strokeStyle = color;
            context.fillStyle = color;
            context.beginPath();
            context.arc(X, Y, R, 0, 2 * Math.PI, false);
            context.lineWidth = 25;
            context.stroke();
        }

        function DrawW(color) {
            context.beginPath();
            context.strokeStyle = color;
            context.moveTo(50,55);
            context.lineTo(52,68);
            context.lineTo(60,58);
            context.lineTo(68,68);
            context.lineTo(70,55);
            context.lineWidth = 2;
            context.stroke();
        }

        function DrawALeft(color) {
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

        function DrawADown(color) {
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

        function DrawARight(color) {
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

        function DrawAUp(color) {
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

        function DrawInt(color) {
            context.beginPath();
            context.strokeStyle = color;

            //draw M
            context.moveTo(564,598);
            context.lineTo(564,588);
            context.lineTo(569,593);
            context.lineTo(574,588);
            context.lineTo(574,598);

            //draw R
            context.moveTo(578,598);
            context.lineTo(578,590);
            context.lineTo(583,590);

            //draw H
            context.moveTo(586,598);
            context.lineTo(586,586);
            context.lineTo(586,593);
            context.lineTo(590,593);
            context.lineTo(590,586);
            context.lineTo(590,598);
            context.lineWidth = 2;
            context.stroke();
        }

        //grabbed from stackoverflow
        function pad(n){
            return (n.length<2) ? "0"+n : n;
        }

        function getKeyAndMove(e) {
            var key_code = e.which || e.keyCode;
            switch (key_code) {
                case 37: //left arrow key
                    moveLeft();
                    break;
                case 38: //Up arrow key
                    moveUp();
                    break;
                case 39: //right arrow key
                    moveRight();
                    break;
                case 40: //down arrow key
                    moveDown();
                    break;
            }
        }

        function moveLeft() {
            obj.style.left = parseInt(obj.style.left) - 5 + "px";
        }

        function moveUp() {
            obj.style.top = parseInt(obj.style.top) - 5 + "px";
        }

        function moveRight() {
            obj.style.left = parseInt(obj.style.left) + 5 + "px";
        }

        function moveDown() {
            obj.style.top = parseInt(obj.style.top) + 5 + "px";
        }

        DrawBigW("#" + pad(hexcolor));
        obj = document.getElementById("this.context");
        DrawRedC("#" + pad(hexcolor));
        DrawW("#000000");
        DrawALeft("#0099ff");
        DrawARight("#ff0000");
        DrawAUp("#ffff00");
        DrawADown("#33cc33");
        DrawInt("#990000");
    }
    slider1.addEventListener("input",draw);
    slider2.addEventListener("input",draw);
    draw();
}
window.onload = setup;
