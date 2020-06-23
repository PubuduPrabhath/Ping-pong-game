const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

cvs.width =

const box = 30

const ball = {
    x : 500,
    y: 100,
    dx: 5,
    dy: 4,
    bw: box
}
const pad = {
    x : 250,
    y : 580,
    dx : 100,
    dw : 100,
    dh : 5
}

let food = [
    {x:100, y: 100},
    {x:200, y: 100},
    {x:300, y: 100},
    {x:400, y: 100},
    {x:100, y: 200},
    {x:200, y: 200},
    {x:300, y: 200},
    {x:400, y: 200}
]

let situ = 'RIGHT';
let sity = 'DOWN';

function draw(){

    if (ball.x+ball.bw == cvs.width){situ = 'LEFT';}
    if (ball.x == 0){situ = 'RIGHT';}
    if (ball.y < 0){sity = 'DOWN'}
    if (ball.y+ball.bw > cvs.height){
        sity = 'UP';
    }

    

    if (situ == "RIGHT"){ball.x += ball.dx;}
    if (situ == "LEFT"){ball.x -= ball.dx;}

    if (sity == "DOWN"){ball.y += ball.dy;}
    if (sity == "UP"){ball.y -= ball.dy;}

    
   

    ctx.clearRect(0,0,cvs.width, cvs.height)
    ctx.strokeRect(0,0, cvs.width, cvs.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(ball.x, ball.y, box, box);

    ctx.fillStyle = 'red';
    ctx.fillRect(pad.x, pad.y, pad.dw, pad.dh);

    ctx.fillStyle = 'teal';
    for (let i = 0; i<food.length; i++){
        ctx.fillRect(food[i].x, food[i].y, 50, 5)
    }

    if (((ball.x >= pad.x) && (ball.x <= pad.x+pad.dw)) && (ball.y+box >= 580 && ball.y+box <= 585)){
        sity = "UP";
    }

    for (let j = 0; j<food.length; j++){
        if (((ball.x >= food[j].x) && (ball.x <= food[j].x+100)) && ball.y == food[j].y){
            sity == "UP"? sity = "DOWN": sity = "UP";
            food.splice(j,1);
        }
        
    }
    


    requestAnimationFrame(draw);
}

draw();

document.addEventListener('keydown', function(e){
    let key = e.keyCode;
    if (key == 39){
        if (pad.x + pad.dw < cvs.width){
            pad.x += pad.dx;
        }
    }

    if (key == 37){
        if (pad.x > 0){
            pad.x -= pad.dx;
        }  
    }

});
