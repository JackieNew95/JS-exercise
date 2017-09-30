/*
* 属性
*   哪些字母、个数、速度、位置、生命、分数
* 方法
*   产生字符、下落、消除、重新开始、下一关、重叠、重复
* */

function Game() {
    this.charArr=[
        ["A","img/A.png"],
        ["B","img/B.png"],
        ["C","img/C.png"],
        ["D","img/D.png"],
        ["E","img/E.png"],
        ["F","img/F.png"],
        ["G","img/G.png"],
        ["H","img/H.png"],
        ["I","img/I.png"],
        ["J","img/J.png"],
        ["K","img/K.png"],
        ["L","img/L.png"],
        ["M","img/M.png"],
        ["N","img/N.png"],
        ["O","img/O.png"],
        ["P","img/P.png"],
        ["Q","img/Q.png"],
        ["R","img/R.png"],
        ["S","img/S.png"],
        ["T","img/T.png"],
        ["U","img/U.png"],
        ["V","img/V.png"],
        ["W","img/W.png"],
        ["X","img/X.png"],
        ["Y","img/Y.png"],
        ["Z","img/Z.png"]
    ];
    this.current=[];//存储页面当前存在的元素
    this.number=5;//产生的个数
    this.speed=10;//掉落速度
    this.position=[];//生成元素的位置
    this.numarr=[];//存储当前页面中的字母
    this.gk=10;//关卡
    this.gkshu=1;//关卡数
    this.score=0;//分数
    this.life=10;//生命值
}
Game.prototype={
    start:function () {
      this.getChars();
      this.drop();
      this.key();
    },//游戏启动
    getChars:function () {
        for(let i=0;i<this.number;i++){
            this.getChar();
        }
    },//获得字母
    getChar:function () {
        let num =Math.floor(Math.random()*this.charArr.length);
        while(this.checkNum(num)){
            num =Math.floor(Math.random()*this.charArr.length);
        }
        this.numarr.push(num);//存储已有字母的对应下标
        let divs=document.createElement('div');
        divs.className='letter';
        let lefts=(innerWidth-400)*Math.random()+200;
        while(this.checkPosition(lefts)){
            lefts=(innerWidth-400)*Math.random()+200;
        }
        let tops=Math.random()*100;
        divs.style.left=`${lefts}px`;
        divs.style.top=`${tops}px`;
        divs.innerText=this.charArr[num][0];
        divs.style.backgroundImage=`
            url('${this.charArr[num][1]}')  
        `;

        document.body.appendChild(divs);//向页面插入元素
        this.current.push(divs);//存储当前的元素
        this.position.push(lefts);//存储生成元素的位置
    },//生成一个字母
    checkPosition:function (lefts) {
        let flag=this.position.some(function(value){
            return Math.abs(lefts-value)<80;
        });
        return flag;
    },//检查是否位置重叠
    checkNum:function (num) {
        let flag=this.numarr.some(function(value){
            return value==num;
        });
        return flag;
    },//检查字母是否重复
    drop:function () {
        let that=this;
        this.t=setInterval(function () {
            that.current.forEach(function (element,index) {
                let tops=`${element.offsetTop+that.speed}px`;
                element.style.top=tops;
                if(element.offsetTop>=450){
                    document.body.removeChild(element);
                    that.current.splice(index,1);
                    that.position.splice(index,1);
                    that.numarr.splice(index,1);
                    that.life--;
                    that.getChar();
                }
            });
            if(that.life<=0){
                let flag=confirm(`
                游戏结束!
                
                是否重新开始？
                `);
                if(flag){
                    that.restart();
                }else {
                    close();
                }
            }
        },300);
    },//字母下落
    key:function () {
        let that=this;
        document.body.addEventListener('keydown',function (e) {
            that.current.forEach((element,index)=>{
                if(String.fromCharCode(e.keyCode)==element.innerText.toUpperCase()){
                    document.body.removeChild(element);
                    that.current.splice(index,1);
                    that.position.splice(index,1);
                    that.numarr.splice(index,1);
                    that.score++;
                    // document.querySelector('.score').innerText=that.score;
                    that.getChar();
                }
            });
            if(that.score>=that.gk){
                that.next();
            }
        })
    },//摁下键盘后
    next:function () {
        clearTimeout(this.t);
        for(let i=0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.numarr.length=0;
        this.gk+=10;
        this.gkshu++;
        if(this.gkshu<=4){
            this.number++;
        }else {
            this.speed++;
        }
        this.start();
    },//下一关
    restart:function () {
        clearTimeout(this.t);
        for(let i=0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.numarr.length=0;
        this.speed=10;
        this.gk=10;
        this.gkshu=0;
        this.number=5;
        this.score=0;
        this.life=10;
        this.start();
    }//重新开始
}