/*
* 属性;
*   线宽、颜色、端点、填充、描边、样式(虚线)、边数、
* 方法：
*   画线、矩形、多边形、多角形、圆、铅笔、文字
*   橡皮
*   撤销、裁切、新建、保存*/

class Palette{
    constructor(canvas,ctx,opacity){
        this.canvas=canvas;
        this.opacity=opacity;
        this.ctx=ctx;
        this.cw=this.canvas.parentNode.offsetWidth;
        this.ch=this.canvas.parentNode.offsetHeight;

        // 样式
        this.lineWidth=1;
        this.lineCap='butt';

        // 描边、填充
        this.style='fill';

        // 颜色
        this.fillStyle='#000';
        this.strokeStyle='#000';

        // 历史记录
        this.history=[];

        // 裁切
        this.temp=null;
    }
    init(){
        this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.fillStyle=this.fillStyle;
    }
    line(cx,cy,ox,oy){
        this.ctx.beginPath();
        this.ctx.moveTo(cx,cy);
        this.ctx.lineTo(ox,oy);
        this.ctx.stroke();
    }
    dash(cx,cy,ox,oy){
        this.ctx.beginPath();
        this.ctx.moveTo(cx,cy);
        this.ctx.lineTo(ox,oy);
        this.ctx.setLineDash([10,5]);
        this.ctx.stroke();
    }
    poly(cx,cy,ox,oy,num){
        let rad=Math.PI*2/num;
        let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r,cy);
        for(let i=0;i<num;i++){
            let x=cx+r*Math.cos(rad*i);
            let y=cy+r*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
        this.ctx[this.style]();
    }
    polyJ(cx,cy,ox,oy,num) {
        let rad=Math.PI/num;
        let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r,cy);
        for(let i=0;i<2*num;i++){
            let r1;
            r1=i%2==0?r:r/2;
            let x=cx+r1*Math.cos(rad*i);
            let y=cy+r1*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
        this.ctx[this.style]();

    }
    pencil(){
        this.opacity.onmousedown=function (e) {
            let cx=e.offsetX;
            let cy=e.offsetY;
            this.ctx.beginPath();
            this.ctx.moveTo(cx,cy);
            this.opacity.onmousemove=function (e) {
                let ox=e.offsetX;
                let oy=e.offsetY;
                this.ctx.lineTo(ox,oy);
                this.ctx.stroke();
            }.bind(this);
            this.opacity.onmouseup=function () {
                this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.opacity.onmousemove=null;
                this.opacity.onmouseup=null;
            }.bind(this)
        }.bind(this);
    }
    circle(cx,cy,ox,oy){
        let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r,cy);
        this.ctx.arc(cx,cy,r,0,Math.PI*2);
        this.ctx[this.style]();
    }
    square(cx,cy,ox,oy){
        this.ctx.beginPath();
        let w=ox-cx;
        let h=oy-cy;
        this.ctx.strokeRect(cx,cy,w,h);
    }
    styleS(){
        this.style='stroke';
    }
    styleF(){
        this.style='fill';
    }
    styleSC(sc){
    	let that=this;
        sc.onblur=function () {
            that.strokeStyle=sc.value;
        }
    }
    styleFC(fc){
    	let that=this;
        fc.onblur=function () {
        	that.fillStyle=fc.value;
        }
    }
    eraser(eraserw,eraserme){
        let that=this;
        this.opacity.onmousedown=function (e) {
            let cx=e.offsetX;
            let cy=e.offsetY;
            eraserme.style.display='block';
            eraserme.style.width=eraserw+'px';
            eraserme.style.height=eraserw+'px';
            that.opacity.onmousemove=function (e) {
                let ox=e.offsetX-eraserw/2;
                let oy=e.offsetY-eraserw/2;
                eraserme.style.left=ox+'px';
                eraserme.style.top=oy+'px';
                that.ctx.clearRect(ox,oy,eraserw,eraserw);
            };
            that.opacity.onmouseup=function () {
                eraserme.style.display='none';
                let data=that.ctx.getImageData(0,0,that.cw,that.ch);
                that.history.push(data);
                that.opacity.onmousemove=null;
                that.opacity.onmouseup=null;
            }
        };
    }
    texts(){
    	this.init();
        let that = this;
        let lefts=0,tops=0;
        this.opacity.onmousedown=function (e) {
            that.opacity.onmousedown=null;
            let cx=e.offsetX,cy=e.offsetY;
            let divs=document.createElement('div');
            divs.contentEditable=true;
            divs.style.cssText=`
            width:100px;height:30px;border:1px dashed #ccc;position:absolute;left:${cx}px;top:${cy-15}px;cursor:move;
        `;
        
            this.appendChild(divs);

            divs.onmousedown=function (e) {
                let cx=e.clientX,cy=e.clientY;
                let left=divs.offsetLeft,top=divs.offsetTop;
                lefts=left;
                tops=top;
                that.opacity.onmousemove=function (e) {
                    let ox=e.clientX,oy=e.clientY;
                    lefts=left+ox-cx;
                    tops=top+oy-cy;
                    if (lefts<=0){
                        lefts=0;
                    }
                    if(lefts>=that.cw-100){
                        lefts=that.cw-100;
                    }
                    if(tops<=0){
                        tops=0;
                    }
                    if(tops>=that.ch-30){
                        tops=that.ch-30;
                    }
                    divs.style.left=lefts+'px';
                    divs.style.top=tops+'px';
                };
                divs.onblur=function () {
                    let value=this.innerText;
                    that.opacity.removeChild(divs);
                    that.ctx.font='bold 20px sans-serif';
                    if(that.style=='stroke'){
                    	that.ctx.strokeText(value,lefts,tops);
                    }else{
                    	that.ctx.fillText(value,lefts,tops);
                    }
                    that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));              
                };
                divs.onmouseup=function () {
                    that.opacity.onmousemove=null;
                    this.onmouseup=null;
                };
            };
        }
    }
    clip(cutme){
        let that=this;
        this.opacity.onmousedown=function (e) {
            let minX,minY,w,h;
            let cx=e.offsetX,cy=e.offsetY;
            cutme.style.width=0;
            cutme.style.height=0;
            cutme.style.display='block';
            that.opacity.onmousemove=function (e) {
                let ox=e.offsetX,oy=e.offsetY;
                minX=ox>cx?cx:ox;
                minY=oy>cy?cy:oy;
                w=Math.abs(ox-cx);
                h=Math.abs(oy-cy);
                cutme.style.width=`${w}px`;
                cutme.style.height=`${h}px`;
                cutme.style.left=`${minX}px`;
                cutme.style.top=`${minY}px`;
            };
            that.opacity.onmouseup=function () {
                // cutme.style.display='none';
                that.temp=that.ctx.getImageData(minX,minY,w,h);
                that.ctx.clearRect(minX,minY,w,h);
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.ctx.putImageData(that.temp,minX,minY);
                that.opacity.onmousemove=null;
                that.opacity.onmouseup=null;
                that.drag(minX,minY,cutme);
            }
        }
    }
    drag(x,y,cutme){
        let that=this;
        this.opacity.onmousedown=function (e) {
            let cx=e.offsetX,cy=e.offsetY;
            e.preventDefault();
            that.opacity.onmousemove=function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                let lefts=x+ox-cx,
                    tops=y+oy-cy;
                cutme.style.left=`${lefts}px`;
                cutme.style.top=`${tops}px`;
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.putImageData(that.temp,lefts,tops);
            };
            that.opacity.onmouseup=function () {
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.temp=null;
                cutme.style.display='none';
                that.opacity.onmousemove=null;
                that.opacity.onmouseup=null;
            }
        }
    }
    cancel(){
    	this.ctx.clearRect(0,0,this.cw,this.ch);
    	if(this.history.length){
    		this.ctx.putImageData(this.history[this.history.length-1],0,0);
    		this.history.length--;
    	}
    }
    clearAll(){
    	this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
    	this.ctx.clearRect(0,0,this.cw,this.ch);
    }
    reverse(){
    	let imgdata=this.ctx.getImageData(0,0,this.cw,this.ch);
		for(let i=0;i<imgdata.data.length;i+=4){
			for(let j=0;j<3;j++){
				imgdata.data[i+j]=255-imgdata.data[i+j];
			}
		}
		this.ctx.clearRect(0,0,this.cw,this.ch);
    	this.ctx.putImageData(imgdata,0,0);
    }
    save(ele){
    	let data=this.canvas.toDataURL('image/png');
		ele.childNodes[1].href=data;
		ele.childNodes[1].download='tu.png';
    }
    draw(type,num){
        this.init();
        this.opacity.onmousedown=function (e) {
            let cx=e.offsetX,
                cy=e.offsetY;
            this.opacity.onmousemove=function (e) {
                let ox=e.offsetX,
                    oy=e.offsetY;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.history.length){//如果存在历史记录的话
                    this.ctx.putImageData(this.history[this.history.length-1],0,0);
                }

                this[type](cx,cy,ox,oy,num);

            }.bind(this);
            this.opacity.onmouseup=function (e) {
                this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.ctx.setLineDash([10,0]);
                this.opacity.onmousemove=null;
                this.opacity.onmouseup=null;
            }.bind(this)
        }.bind(this)
    }
}