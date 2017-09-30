/*
* @Author: user
* @Date:   2017-09-18 19:36:15
* @Last Modified by:   user
* @Last Modified time: 2017-09-25 02:41:04
*/

window.onload=function(){



// banner
let bannerimg=document.getElementsByClassName('bannerimg')[0];
let imgs=bannerimg.getElementsByTagName('li');
let points=document.getElementsByClassName('point');
let num=0;

for(let i=0;i<points.length;i++){
	points[i].onmouseover=function(){
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity='0';
			points[j].className='point';
		}
		imgs[i].style.opacity='1';		
		points[i].className='point point-now';
		num=i;
	}
}//方法一：先隐藏所有图片，只显示当前图片

/*let now=0;
for(let i=0;i<points.length;i++){
	points[i].onmouseover=function(){
		imgs[now].style.opacity='0';
		imgs[i].style.opacity='1';
		points[now].className='point';
		points[i].className='point point-now';
		now=i;		
	}
}//方法二：先隐藏所有图片，只显示当前图片*/

//自动轮播效果
let t=setInterval(move,3000);

bannerimg.onmouseover=function(){
	clearInterval(t);
}
bannerimg.onmouseout=function(){
	t=setInterval(move,3000);
}

function move(){
	num++;
	if(num==imgs.length){
		num=0;
	}
	for(let i=0;i<imgs.length;i++){
		imgs[i].style.opacity='0';
		points[i].className='point';
	}
	imgs[num].style.opacity='1';
	points[num].className='point point-now';
}

////////////////////////////////////////////////////////////////////////////////////////////
// 按需加载
	let floor=document.querySelectorAll('.meilirensheng');
	let floorArr=[];
    floor.forEach((ele,index)=>{
		floorArr.push(ele.offsetTop);
    })

    let asideLefts=document.querySelectorAll('.leftfloorbtn');
    let flag=true;

    window.addEventListener('scroll',function(){
		let scrollTop=document.body.scrollTop;
		floorArr.forEach((ele,index)=>{
			if(scrollTop+innerHeight>=ele+200){
				let floorimg=floor[index].getElementsByTagName('img');
				for(let i=0;i<floorimg.length;i++){
					floorimg[i].src=floorimg[i].getAttribute('imgPath');					
				}
			}
		});
	    ////////////////////////////////////////////////////////////////////////////////////////////////
        let backtotopr=document.querySelector('.icon-right-backtotop');
        if(scrollTop>=200){
            backtotopr.style.opacity='1';
        }else if(scrollTop<200){
            backtotopr.style.opacity='0';
        }//右侧的返回顶部




	    ////////////////////////////////////////////////////////////////////////////////////////////
	    // 移动楼层背景色变换
        if(flag){
			asideLefts.forEach((ele,index)=>{
				if(scrollTop>=floorArr[index]){
					for(let i=0;i<color.length;i++){
						asideLefts[i].style.background='none';
					}
					asideLefts[index].style.background=color[index];				
				}else if(scrollTop<=floorArr[0]){
                    for(let i=0;i<color.length;i++){
                        asideLefts[i].style.background='none';
                    }
                }
			})
		}
});

// 点击跳转楼层

    let color=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#000000'];

    for(let i=0;i<asideLefts.length;i++){
        asideLefts[i].onclick=function () {
            flag=false;
            animate(document.body,{scrollTop:floorArr[i]},()=>{flag=true});
            for(let j=0;j<color.length;j++){
                asideLefts[j].style.background='none';
            }
            asideLefts[i].style.background=color[i];
        }
    }

// 侧边栏
    let items=document.getElementsByClassName('item');
    let aside=document.getElementsByTagName('aside')[0];
    let lis=document.getElementsByClassName('asideli');
    for(let i=0;i<items.length;i++){
        lis[i].onmouseover=function(){
            items[i].style.display='block';
        };
        lis[i].onmouseout=function(){
            items[i].style.display='none';
        }
    }
    let asideRight=document.querySelectorAll('.aside-right .tipsdiv');
	let rightTips=document.querySelectorAll('.right-tips');
    let tipsarr=['会员权益','我的资产','我关注的品牌','我的收藏','我看过的','我要充值','用户反馈'];

    for(let i=0;i<rightTips.length;i++){
        rightTips[i].innerText = tipsarr[i];
        asideRight[i].onmouseover=function (e) {
            rightTips[i].style.display = 'block'
        }
        asideRight[i].onmouseout=function () {
            rightTips[i].style.display='none';
        }
    }

    let topsearch=document.querySelector('.topsearch');
    let asideleft=document.querySelector('.aside-left');
    window.addEventListener('scroll',function () {
        let scrollTop=document.body.scrollTop;
        if(scrollTop>=500){
            topsearch.style.top='0';
            asideleft.style.left='0';
        }else {
            topsearch.style.top='-50px';
            asideleft.style.left='-36px';
        }
    })



};