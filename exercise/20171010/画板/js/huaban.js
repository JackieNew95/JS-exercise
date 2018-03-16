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
        this.style='stroke';

        // 颜色
        this.fillStyle='#000';
        this.strokeStyle='#000';

        // 历史记录
        this.history=[];
    }
    init(){

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
                this.ctx[this.style]();
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
/*    styleS(){
        this.ctx.style='stroke';
    }
    styleF(){
        this.ctx.style='fill';
    }*/
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
    draw(type,num){
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