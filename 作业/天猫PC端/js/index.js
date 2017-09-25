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


// 按需加载
	let floor=document.querySelectorAll('.meilirensheng');
	let floorArr=[];
	floor.forEach((ele,index)=>{
		floorArr.push(ele.offsetTop);
	})
	window.onscroll=function(){
		let scrollTop=document.body.scrollTop;
		floorArr.forEach((ele,index)=>{
			if(scrollTop+innerHeight>=ele+200){
				let floorimg=floor[index].getElementsByTagName('img');
				for(let i=0;i<floorimg.length;i++){
					floorimg[i].src=floorimg[i].getAttribute('imgPath');					
				}
			}
		})

// 移动楼层背景色变换
		if(flag){
			asideLefts.forEach((ele,index)=>{
				if(scrollTop+innerHeight>=floorArr[index]){
					for(let i=1;i<color.length-1;i++){
						asideLefts[i].style.background='none';
					}
					asideLefts[index].style.background=color[index];				
				}
			})
		}
}


// 侧边栏
let items=document.getElementsByClassName('item');
let aside=document.getElementsByTagName('aside')[0];
let lis=document.getElementsByClassName('asideli');
for(let i=0;i<items.length;i++){
	lis[i].onmouseover=function(){
		items[i].style.display='block';
	}
	lis[i].onmouseout=function(){
		items[i].style.display='none';
	}
}


// 点击跳转楼层

let asideLeft=document.querySelector('.aside-left');
let asideLefts=document.querySelectorAll('.aside-left>ul>li');
let color=['#FF0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#000000','#ABABAB'];

asideLefts.forEach((ele,index)=>{
	let index1=index+1;
	ele.onclick=(index1)=>{
		flag=false;
		animate(document.body,{scrollTop:floorArr[index-1]},()=>{flag=true})
		for(let i=1;i<color.length-1;i++){
			asideLefts[i].style.background='none';
		}
		ele.style.background=color[index];
	}
})


	

	







}