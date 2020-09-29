
const radius = 10;
const ball = {x:20, y:20, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

const gravity = 1.2;
let eneregy = 3;



function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;


    // handle ball is hitting the bounds --> reverse direction
    if(ball.y + ball.dy + radius > 400 || ball.y + ball.dy - radius < 0){
        ball.dy *= -1;
    }

    if(ball.x + ball.dx + radius > 400 || ball.x + ball.dx - radius < 0){
        ball.dx *= -1;
    }

    //   lose some energy relative to the current inertia (only velocity varies)
    //TODO:
    // calculate new position
    if(old.y < ball.y){
        energy += gravity * energy; 
    }
    ball.x += ball.dx;
    ball.y += ball.dy * eneregy;
    // calculate any changes in velocity due to gravitational pull or medium resistance
    
}


function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}

