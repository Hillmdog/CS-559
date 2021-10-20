function setup() {
    var canvas = document.getElementById("myCanvas");
    var range = document.getElementById("slider");
    var t = 0;

    var context = canvas.getContext("2d");
    var stack;


    //draw a trunk of a bamboo
    function trunk(){
        context.setTransform(stack[0][0],stack[0][1],stack[0][3],stack[0][4],stack[0][6],stack[0][7]);
        context.fillStyle = "#95b391";
        context.fillRect(460,380,80,100);
    }

    function draw(){
        window.requestAnimationFrame(draw);
        stack =[mat3.create()];
        canvas.width=canvas.width;


        //prepare the context for drawing a trunk
        function trunkTrans(){
            var tx = mat3.create();
            var theta = Math.PI/36*t;
            mat3.fromTranslation(tx,[500,480-110]);//context.translate(500,480-110);
            mat3.rotate(tx,tx,theta);//context.rotate(Math.PI/36*t);
            mat3.translate(tx,tx,[-500,-480]);//context.translate(-500,-480);
            mat3.multiply(stack[0],stack[0],tx);
        }


        //draw a bamboo
        function bamboo(){
            //draw bottom trunk
            var tx = mat3.create();
            var theta = Math.PI/36*t;
            mat3.fromTranslation(tx,[500,480]);//context.translate(500,480);
            mat3.rotate(tx,tx,theta);//context.rotate(Math.PI/36*t);
            mat3.translate(tx,tx,[-500,-480]);//context.translate(-500,-480);
            mat3.multiply(stack[0],stack[0],tx);
            trunk();

            //draw mid-bottom trunk
            trunkTrans();
            trunk();

            //draw mid-top trunk
            trunkTrans();
            trunk();


            //draw top trunk
            trunkTrans();
            trunk();

        }

        //draw three bamboos
        stack.unshift(mat3.clone(stack[0]));//context.save();
        bamboo();
        stack.shift();//context.restore();

    }
    draw();
    range.addEventListener("input", clearUpdate);
}

window.onload=setup;