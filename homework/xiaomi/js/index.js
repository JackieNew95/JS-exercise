/*
* @Author: user
* @Date:   2017-09-21 08:28:27
* @Last Modified by:   user
* @Last Modified time: 2017-09-26 11:03:49
*/
window.onload = function() {
    let point = $('.btn-list')[0];
    let points = $('li', point);
    let imgBox = $('.lunbo')[0];
    let imgs = $('li', imgBox);
    let t;
    let pageUp = $('.banner-left')[0];
    let pageDown = $('.banner-right')[0];
    let num = 0;
    let now = 0;
    let next = 0;
    let imgW = parseInt(getComputedStyle(imgBox, null).width);
    let flag = true;


/////////////////////////////////
///
///banner
///


    t = setInterval(move, 1000);

    /*imgBox.onmouseover=function(){
        clearInterval(t);
    }
    imgBox.onmouseout=function(){
        t=setInterval(move,3000);
    }
    pageUp.onmouseover=function(){
        clearInterval(t);
    }
    pageUp.onmouseout=function(){
        t=setInterval(moveL,3000);
    }
    pageDown.onmouseover=function(){
        clearInterval(t);
    }
    pageDown.onmouseout=function(){
        t=setInterval(move,3000);
    }*/

//鼠标放在图片、翻页按钮上停止轮播，移出继续


    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = `${imgW}px`;
        console.log(next)
        points[now].style.background = 'rgba(22, 22, 27,0.5)';
        points[next].style.background = 'rgba(124, 124, 129,0.5)';

        animate(imgs[now], {left: -imgW});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        now = next;
    }

//自动轮播
    /*

    function moveL(){
        next--;
        if(next<0){
            next=imgs.length-1;
        }

        imgs[next].style.left=`${-imgW}px`;

        points[now].style.background='rgba(22, 22, 27,0.5)';
        points[next].style.background='rgba(124, 124, 129,0.5)';
        animate(imgs[now],{left:imgW});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }

    pageUp.onclick=function(){
        if(!flag){
            return;
        }
        moveL();
        flag=false;
    }
    pageDown.onclick=function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    }

    //翻页按钮与点和图的联系


    for(let i=0;i<points.length;i++){
        points[i].onclick=function(){
            if(now==i){return;}
            for(let j=0;j<points.length;j++){
                points[j].style.background='rgba(22, 22, 27,0.5)';
            }
            points[i].style.background='rgba(124, 124, 129,0.5)';
            imgs[i].style.left=`${imgW}px`;
            animate(imgs[next],{left:-imgW});
            animate(imgs[i],{left:0});
            now=next=i;
        }
    }//点与图的联系

    */

    /*
        单品\推荐
     */

return ;
    let danz = document.querySelectorAll('.danz');
    let danpin = document.querySelectorAll('.danpin');
    let w1 = (danpin[0].offsetWidth + parseInt(getComputedStyle(danpin[0], null).marginRight)) * 5;
    let w2 = 1250;
    let Dtitlera = document.querySelectorAll('.Dtitlera');
    let Dtitlerb = document.querySelectorAll('.Dtitlerb');
    let danzi = [0, 0];
    danz[0].innerHTML += danz[0].innerHTML;
    danz[1].innerHTML += danz[1].innerHTML;

    Dtitlera[0].onclick = function () {
        if (danzi[0] == 3) {
            return;
        }
        danzi[0]++;
        danz[0].style.transform = `translateX(-${w1 * danzi[0]}px)`;
    }
    Dtitlerb[0].onclick = function () {
        if (danzi[0] == 0) {
            return;
        }
        danzi[0]--;
        danz[0].style.transform = `translateX(-${w1 * danzi[0]}px)`;
    }
    Dtitlera[1].onclick = function () {
        if (danzi[1] == 3) {
            return;
        }
        danzi[1]++;
        danz[1].style.transform = `translateX(-${w2 * danzi[1]}px)`;
    }
    Dtitlerb[1].onclick = function () {
        if (danzi[1] == 0) {
            return;
        }
        danzi[1]--;
        danz[1].style.transform = `translateX(-${w2 * danzi[1]}px)`;
    }


// 侧导航

}