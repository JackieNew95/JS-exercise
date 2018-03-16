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
            if(this.id=='styleS'||this.id=='styleF'){
                let a=this.id;
                pal.a();
                console.log(pal.a)
                return;
            }
            if(this.id=='poly'||this.id=='polyJ'){
                num=prompt('请输入多边（角）形边（角）数：',5);
            }
            pal.draw(this.id,num);
        }
        tools[0].onclick();//首先触发画线函数
    })
};