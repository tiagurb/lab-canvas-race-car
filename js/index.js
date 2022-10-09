const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let interval;
const obstacles = [];
const gameArea = {
  frames: 0,
  start: () => {
    interval = setInterval(updateGameArea, 20);
  },

  stop: () => {
    clearInterval(interval);
  },

  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },

  /*player.newPosition();
  player.draw();
  //console.log("the game is runnig")
  drawOfobstacles();
  checkGameOver();
  gameArea.score();*/

  /*score: () => {
    const points = Math.floor(gameArea.frames / 10);
    context.font = "10px Arial";
    context.sillStyle = "black";
    context.fillText(`Socre: ${points}`, 200, 50)*/
};

function updateGameArea() {
  gameArea.clear();
  car.draw();
  //console.log("the game is runnig")
  drawOfobstacles();
  checkGameOver();
  //gameArea.score();
}

//creating collision

function checkGameOver() {
  const crashed = obstacles.some((obstacle) => {
    if (player.collisionWith(obstacle)) {
      return true;
    } else {
      return false;
    }
  });

  if (crashed) {
    gameArea.stop();
  }
}

//creating the car + colision with car

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const image = new Image();
    image.src = "cat.png";
    image.onload = () => {
      this.image = image;
      this.draw();
    };
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, 50, 90);
  }

  moveUp() {
    this.y -= 10;
  }
  moveDown() {
    this.y += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

const car = new Car(225, 610);

//start to show the game

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    document.getElementById("game-board").style.display = "flex";
  }
};

//adding car movement

document.addEventListener("keydown", (event) => {
  console.log("I'm clicking", event.key);
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case "W":
      car.moveUp();
      break;
    case "a":
    case "ArrowLeft":
    case "A":
      car.moveLeft();
      break;
    case "s":
    case "ArrowDown":
    case "S":
      car.moveDown();
      break;
    case "d":
    case "ArrowRight":
    case "D":
      car.moveRight();
      break;
  }

  //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  car.draw();
});

//creating obstacles

function drawOfobstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.y += 1;
    obstacle.draw();
  });

  gameArea.frames += 1;

  if (gameArea.frames % 160 === 0) {
    // creating  obstacle
    const minWidth = 40;
    const maxWidth = 360;
    const randomWidth = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    const randomX = Math.floor(Math.random() * (500 - 1 + 1) + 1)

    const obstacle = new Component(
      randomWidth,
      30,
      "black",
      randomX,
      0
    );

    obstacles.push(obstacle);
  }
}

gameArea.start();
