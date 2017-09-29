/*
* @Author: user
* @Date:   2017-09-26 10:24:58
* @Last Modified by:   user
* @Last Modified time: 2017-09-26 10:35:52
*/
HTMLElement.prototype.prependChild=function(element){
				let first=this.firstElementChild;
				if(first){
					this.insertBefore(element,first);
				}else{
					this.appendChild(element);
				}				
			}//prependChild方法,在父元素的最前面插入一个子元素