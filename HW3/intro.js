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