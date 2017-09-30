/*
    属性
        蛇 arr
    方法
        画线
        画蛇
* */
function Snake() {
    this.snake=["0-0","0-1","0-2"];//蛇的本体
    this.flag={"0-0":true,"0-1":true,"0-2":true};//用来判断蛇吃食物和咬自己
    this.sence=document.querySelector('.sence');//场景
    this.direction=39;//方向

}
Snake.prototype={
    start:function () {
        this.drawLine();
        this.drawSnake();
        this.move();
        this.key();
        this.dropFood();
    },
    drawLine:function () {
        for(let i=0;i<20;i++){
            for(let j=0;j<20;j++){
                this.sence.innerHTML+=`<div class="block" id="${i}-${j}"></div>`;
            }
        }
    },//画场景
    drawSnake:function () {
        this.snake.forEach(element=>{
            document.getElementById(element).classList.add('snake');
            document.getElementById(element).classList.remove('snakehead');
        });
        document.getElementById(this.snake[this.snake.length-1]).classList.add('snakehead');
    },//画蛇
    move:function () {
        //数据上： 加头 去尾 重新画
        this.t=setInterval(function () {
            let oldhead=this.snake[this.snake.length-1];
            let oldheadarr=oldhead.split('-');
            let newhead='';
            if(this.direction==37){
                newhead=`${oldheadarr[0]*1}-${oldheadarr[1]*1-1}`;
            }
            if(this.direction==38){
                newhead=`${oldheadarr[0]*1-1}-${oldheadarr[1]*1}`;
            }
            if(this.direction==39){
                newhead=`${oldheadarr[0]*1}-${oldheadarr[1]*1+1}`;
            }
            if(this.direction==40){
                newhead=`${oldheadarr[0]*1+1}-${oldheadarr[1]*1}`;
            }
            let newheadarr=newhead.split('-');
            if(newheadarr[0]>19 || newheadarr[0]==''){
                alert('游戏结束！');
                clearInterval(this.t);
                return ;
            }
            if(newheadarr[1]>19|| newheadarr[1]==''){
                alert('游戏结束！');
                clearInterval(this.t);
                return ;
            }
            let oldtail=this.snake.shift();
            delete this.flag[oldtail];
            document.getElementById(oldtail).classList.remove('snake');
            this.snake.push(newhead);
            this.flag[newhead]=true;
            this.drawSnake();
        }.bind(this),500);
    },//蛇的移动
    key:function () {
        document.body.onkeydown=function (e) {
            let key=e.keyCode;
            if(Math.abs(key-this.direction)==2){
                return ;
            }
            this.direction=key;
        }.bind(this)
    },//前进方向
    dropFood:function () {
        do {
            var x=Math.floor(Math.random()*20);
            var y=Math.floor(Math.random()*20);
        }while (this.flag[`${x}-${y}`]);
        document.getElementById(`${x}-${y}`).classList.add('food');
    }//投放食物

};