window.onload=function () {
    let game=new Game();
    game.start();

    let life=document.querySelector('.life');
    setInterval(()=>{life.innerText=`生命值：${game.life}`},200);


    let score=document.querySelector('.score');
    window.onkeydown=function () {
        score.innerText=`得分：${game.score}`;
    }
}