/*
* @Author: user
* @Date:   2017-09-25 16:19:30
* @Last Modified by:   user
* @Last Modified time: 2017-09-25 19:45:25
*/
$(function(){//使用function$.js写法的window.load
	let small=$('.small')[0];
	let big=$('.big')[0];
	let bImg=$('img',big)[0];
	// let bili=bImg.offsetWidth/parseInt(getComputedStyle(small,null).width);
	let mask=$('.mask')[0];
	let opacity=$('.opacity')[0];

	let sw=small.offsetWidth,
		sh=small.offsetHeight,
		bw=big.offsetWidth,
		bh=big.offsetHeight,
		mw=mask.offsetWidth,
		mh=mask.offsetHeight,
		bImgw=bImg.offsetWidth,
		bImgh=bImg.offsetHeight;
	
	let bili1=sw/mw;//遮罩与又窗口显示一样大的比例
	bImg.style.width=`${bili1*bw}px`;
	bImg.style.height=`${bili1*bh}px`;//设置图片的大小以适合遮罩范围
	opacity.addEventListener('mousemove', function(e){

		let mx=e.offsetX-mw/2;
		let my=e.offsetY-mh/2;	

		// 遮罩跟随
		
		if(mx>=sw-mw){
			mx=sw-mw;
		}
		if(mx<=0){
			mx=0;
		}
		if(my>=sh-mh){
			my=sh-mh;
		}
		if(my<=0){
			my=0;
		}
		mask.style.left=`${mx}px`;
		mask.style.top=`${my}px`;

		//遮罩和图片显示区域一样大
		let lefts=`${-mx*bili1}px`;
		let tops=`${-my*bili1}px`;


		bImg.style.left=lefts;
		bImg.style.top=tops;
	},false)

})