window.onload=function () {
    let canvas=document.querySelector('canvas');
    let opacity=document.querySelector('.opacity');
        canvas.width=canvas.parentNode.offsetWidth;
        canvas.height=canvas.parentNode.offsetHeight;
        opacity.style.width=canvas.width+'px';
        opacity.style.height=canvas.height+'px';
    let eraserme=document.querySelector('.eraserme');
    let ctx=canvas.getContext('2d');
    let pal=new Palette(canvas,ctx,opacity);
    let tools=document.querySelectorAll('.left>ul>li');
    let cutme=document.querySelector('.cutme');
    let sc=document.querySelector('#styleSC>input');
    let fc=document.querySelector('#styleFC>input');

    tools.forEach((element)=>{
        element.onclick=function () {
            let num=0;
            document.querySelector('li[active=true]').setAttribute('active',false);
            this.setAttribute('active',true);
            let eraserw=0;

            if(this.id=='pencil'){
                pal.pencil();
                return;
            }
            if(this.id=='eraser'){
                eraserw=prompt('请输入橡皮大小：',50);
                pal.eraser(eraserw,eraserme);
                return;
            }
            if(this.id=='word'){
                pal.texts();
                return;
            }
            if(this.id=='cut'){
                pal.clip(cutme);
                return;
            }
            if(this.id=='styleS'){
                pal.styleS();
                return;
            }
            if(this.id=='styleF'){
                pal.styleF();
                return;
            }
            if(this.id=='styleSC'){
                pal.styleSC(sc);
                return;
            }
            if(this.id=='styleFC'){
                pal.styleFC(fc);
                return;
            }
            if(this.id=='save'){
            	pal.save(element);
            }
            if(this.id=='clearAll'){
            	pal.clearAll();
            }
            if(this.id=='cancel'){
            	pal.cancel();
            }
            if(this.id=='reverse'){
            	pal.reverse();
            }
            if(this.id=='poly'||this.id=='polyJ'){
                num=prompt('请输入多边（角）形边（角）数：',5);
            }
            pal.draw(this.id,num);
        }
        tools[0].onclick();//首先触发画线函数
    })
};