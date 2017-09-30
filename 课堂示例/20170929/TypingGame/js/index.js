window.onload=function () {
    let game=new Game();
    game.start();

    let life=document.querySelector('.life');
    let guanqia=document.querySelector('.guanqia');
    let score=document.querySelector('.score');

    setInterval(()=>{
        life.innerText=`生命值：${game.life}`;
        guanqia.innerText=`第${game.gkshu}关`;
        score.innerText=`得分：${game.score}`;
    },200);


}