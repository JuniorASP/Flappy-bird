document.addEventListener('DOMContentLoaded', () =>{

    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 430

    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft +'px'


    }

    function control(e){
        if(e.keycode === 32){
            jump();
        }
    }
    let timerID = setInterval(startGame, 20)

    function jump(){
        if (birdBottom<499) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom);


    }


    document.addEventListener('keyup', jump)

    function generateObstacle(){
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const top0bstacle = document.createElement('div')

        if(!isGameOver){ obstacle.classList.add('obstacle')
        top0bstacle.classList.add('top0bstacle')
    }

        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(top0bstacle)

        top0bstacle.style.left = obstacleLeft +'px'
        top0bstacle.style.bottom = obstacleBottom  + gap+ 'px'

        obstacle.style.left= obstacleLeft + 'px'
        obstacle.style.bottom= obstacleBottom + 'px'

        function moveObstacle(){
            obstacleLeft -=2
            top0bstacle.style.left = obstacleLeft + 'px'
            obstacle.style.left = obstacleLeft + 'px'
            

            if(obstacleLeft === -60){
                clearInterval(timerID)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(top0bstacle)
            }

            if(
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200)||
                birdBottom === 0 
                ) {
            
                gameOver();

            }
        }
        let timerID= setInterval(moveObstacle, 20)
        if(!isGameOver)setTimeout(generateObstacle, 3000)
    }


generateObstacle();

function gameOver(){
    clearInterval(timerID)
    isGameOver = true
    document.removeEventListener('keyup', control)
    console.log('game over brooo !!!!')
    
   
}

    
})