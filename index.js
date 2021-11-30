
cross = true;
audio = new Audio('game music.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(()=> {
audio.play();
},1000)
score = 0;
document.onkeydown =function(e){
    console.log("Key code is:",e.keyCode)
    if(e.keyCode==38){
        dyno = document.querySelector(".dyno");
        dyno.classList.add('animateDyno');
        setTimeout(()=> {
            dyno.classList.remove('animateDyno')
        }, 700);
    }
    if(e.keyCode==39){
        dyno = document.querySelector(".dyno");
        dynoX = parseInt(window.getComputedStyle(dyno,null).getPropertyValue('left'));
        dyno.style.left = (dynoX + 112) + "px";
     
    }
    
   
    if(e.keyCode==37){
        dyno = document.querySelector(".dyno");
        dynoX = parseInt(window.getComputedStyle(dyno,null).getPropertyValue('left'));
        dyno.style.left = (dynoX - 112) + "px";
     
    }
    
}
setInterval(()=> {
    dyno = document.querySelector('.dyno');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx =parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
    dy =parseInt(window.getComputedStyle(dyno, null).getPropertyValue('top'));
    ox =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.innerHTML ="Game Over -Reload to start Over"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
    }
    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=> {
            cross = true;
        },1000);
        setTimeout(()=> {    aniDur = parseFloat(window.getComputedStyle(dyno, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration:', newDur)
    },500);
       
    }


},10);
function updateScore(score){
    scoreCont.innerHTML = "Your Score:" + score

}