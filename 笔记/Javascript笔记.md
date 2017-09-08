# Javascript

## JS历史

## JS能干什么

1、数据验证

2、操作页面中的元素（DOM）

​	DOM元素的内容、样式、属性

3、动态的创建、删除元素

4、动画

5、cookies、本地存储

6、ajax

​	动态获取数据

........

## JS组成

### ECMAScript

​	基础语法：变量、数据类型、运算符、执行流程、函数、对象

> ECMA是“European Computer Manufactures Association”的缩写，中文称欧洲计算机制造联合会。是1961年成立的旨在建立统一的电脑操作格式标准--包括程序语言和输入输出的组织。

### BOM(browser object model)

> 浏览器对象模型

​	地址、历史记录、DOM、屏幕、

### DOM(Document object model)

​	节点

> HTML DOM 是：
>
> - HTML 的标准对象模型
> - HTML 的标准编程接口
> - W3C 标准
>
> HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。
>
> *换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。*



> HTML DOM 树
>
> ![ct_htmltree](E:\优逸客培训\5JavaScript\笔记\ct_htmltree.gif)

## JS的引入方式

### 	1、标签对

```html
<script>
  	//JS code
</script>
```

### 	2、外部引入

```html
<script src="js/index.js"></script><!-- 这是外部引入 -->
```

注意事项：

> 1、允许引入多个JS文件。JS文件是一个整体，相互联系相互影响相互作用
>
> 2、外部JS文件中，不允许再写script标签对
>
> 3、引入外部的JS文件，script标签对中不允许出现JS代码

## JS的调试工具

### 控制台、弹窗检错

```javascript
<script>
	// JS code  
	/*上面是单行注释，这样是块级注释*/ 
	
	alert(1);
	alert('弹窗显示，数字直接写，汉字字符字符串单双引号都行');
	alert("我是双引号，上一个单引号");//弹框
	
	console.log(1);
	console.log('控制台显示，数字直接写，汉字字符字符串单双引号都行');//控制台
	
	document.write(1);
	document.write('页面显示，数字直接写，汉字字符字符串单双引号都行')；
	document.write('<h1>写在页面当中，可以识别标签对作用</h1>');//文档写入
</script>
```
### source

​	检查，source，点击旁边可以加断点，点击右边箭头逐步执行

## JS语法特点

> 基于对象和事件驱动的松散型（弱类型）解释性语言。

### 基于对象

​	一切皆对象

​	每个对象都有它的属性和功能

### 事件驱动

​	点击、移入等事件发生

### 松散型

​	变量声明，不用考虑类型和范围，直接写

​		var a=10;

​		var b='abkn';

​	分号可加可不加

​	可在声明前调用

## 变量

> 可看做存储数据的一个容器，

优点：1、节省内存

​	    2、改的时候方便

### 声明变量

```javascript
var 变量名 = 1;
var 变量名 = 'adasd';
```

> 变量名:
>
> ​	可以由数字、字母、下划线、$符组成
>
> ​	变量对大小写敏感
>
> ​	数字不可单独作为名字，数字不能开头
>
> ​	JS中的关键字、保留字不可作为变量名
>
> ​	尽量有意义、可识别、按照一定规则

#### 特殊字符

> 下面的表格列出了其余的特殊字符，这些特殊字符都可以使用反斜杠来添加到文本字符串中：

| 代码           | 输出                 |
| ------------ | ------------------ |
| \'           | 单引号                |
| \"           | 双引号                |
| \&           | 和号                 |
| \\           | 反斜杠                |
| \n           | 换行符                |
| \r           | 回车符                |
| \t           | 制表符                |
| \b           | 退格符                |
| \f           | 换页符                |
| ``（ESC下面的反点） | 模版字符串，可以按编辑的格式原样输出 |

> **模版字符串**
>
> 可以按编辑的格式原样输出，其中的运算不需+链接，只要用${}括住即可。
>
> ```javascript
> <script>
> 	var a = 43;
> 	var b = 40;
> 	var str=`
> 	我们班有两个班，一个是505班，有${a}人，
> 	另一个是507班，有${b}人，总共有${a+b}人。`;
>
> 	console.log(str);
> </script>
> ```

> 字符串间的嵌套，可以用单引号里嵌套双引号，双引号中间嵌套单引号

### 常用命名方法

**匈牙利命名法**

​	开头字母用变量类型的缩写，其余部分用变量的英文或英文的缩写，要求单词第一个字母大写。譬如: int iMyAge; “i”是int类型的缩写； char cMyName[10]; “c”是char类型的缩写； float fManHeight; “f”是float类型的缩写；

**小驼峰法**

​	变量一般用小驼峰法标识。驼峰法的意思是：除第一个单词之外，其他单词首字母大写。譬如int myStudentCount;

​	变量myStudentCount第一个单词是全部小写，后面的单词首字母大写。

**大驼峰法**

​	相比小驼峰法，大驼峰法（即帕斯卡命名法）把第一个单词的首字母也大写了。常用于[类名](https://baike.baidu.com/item/%E7%B1%BB%E5%90%8D)，命名空间等。譬如public class DataBaseUser;

### 赋值

先声明后赋值

```javascript
var a;
a=10;
```

声明的同时进行赋值

```javascript
var a = 10;
```

一次性声明多个变量，然后赋值

```javascript
var a ,b;
a =1,b = 10;
```

一次性声明多个变量，同时进行赋值

```javascript
var a =1,b = 10;
```

> 变量值可修改
>

> 变量允许重复声明同一个变量
>

> 如果不给新变量值，则依然为原先值
>
> 若给新值，则会覆盖原先值

> 声明变量需要var去修饰。
>

> 若不用var修饰，也不赋值，则会报错
>
> 若不用var修饰，并且赋值，则该变量会变为全局变量（不推荐）
>
> 若用var声明但不赋值，或者在声明前调用，则会使用默认值undefined

## 数组

> 是一个对象（object），存储一系列相同、相关数据的容器

### 优点

方便管理数据

逻辑结构清晰，代码方便管理维护

### 一维数组

#### 声明

```javascript
var arr = [a,b,c];
或者
new arr = new Array();
```

> 下标从0开始

#### 赋值方法

声明时赋值；

```
var arr=[1,2,3,4,5]
```

声明之后赋值；

```
var arr=[];
arr[0]=1;
arr[1]=2;
arr[2]=3;
```

#### 如何访问

> 通过下标访问，注意，下标从0开始
>
> 数组长度：arr.length
>
> 下标范围：0~arr.length-1

```javascript
var zhangsan = [90,95,100];
zhangsan[0];
console.log(zhangsan[0]);//访问zhangsan的第一个数值，值为90
console.log(zhangsan.length);//数组zhangsan的长度，值为3
console.log(zhangsan[zhangsan.length-1]);//访问zhangsan的最后一个值
zhangsan[1]=100;//修改zhangsan的第二个值95为100
zhangsan[4]=96;//添加zhangsan的第五个值为96，中间空开的第四个zhangsan[3]会默认值为undefined
```

##### 遍历数组

> 结合循环即可

```javascript
var arr=[1,2,3,4,5,6,7,8,9];
for (var i=0;i<arr.length;i++){
  console.log(arr[i]);
}
```

##### 找最值

```javascript
	var arr=[1,23,59,4,65,6,79,8,9];
	var max=arr[0];
	for (var i=0;i<arr.length;i++){
		if(max<arr[i]){
	      max=arr[i];
		}
	}
	console.log(max);
	//最大值
	var min =arr[0];
	for (var i=0;i<arr.length;i++){
		if(min>arr[i]){
	      min=arr[i];
		}
	}
	console.log(min);
	//最小值
```

##### 排序

```javascript
	var arr=[1,23,59,4,65,6,79,8,9];
	for(var i=0;i<=arr.length-1;i++){		
		for(var j=i+1;j<=arr.length-1;j++){
			if (arr[i]<arr[j]) {
				var temp =arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);//降序排列
/*	原理：
	第一轮：第一个数跟其后所有数比较，遇到比自己大的跟自己换，继续用第一个位置上的数跟之后的数比较，直到结束，此时，最大的数就会被放在第一个位置上
	第二轮：第二个数跟跟其后所有数比较，遇到比自己大的跟自己换，继续用第二个位置上的数跟之后的数比较，直到结束，此时，最大的数就会被放在第二个位置上
	以此类推
	*/
	var arr=[1,23,59,4,65,6,79,8,9];
	for(var i=0;i<=arr.length-1;i++){		
		for(var j=i+1;j<=arr.length-1;j++){
			if (arr[i]>arr[j]) {
				var temp =arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);//升序排列
	/*	原理：
	第一轮：第一个数跟其后所有数比较，遇到比自己小的跟自己换，继续用第一个位置上的数跟之后的数比较，直到结束，此时，最小的数就会被放在第一个位置上
	第二轮：第二个数跟跟其后所有数比较，遇到比自己小的跟自己换，继续用第二个位置上的数跟之后的数比较，直到结束，此时，最小的数就会被放在第二个位置上
	以此类推
	*/
```

##### 一维数组去空

```javascript
	var arr=[1,2,3,,5,,7,8,9,];
	var newarr=[];
	for(var i = 0;i<arr.length;i++){
		if(arr[i]!=undefined){
			newarr[newarr.length]=arr[i];
		}
	}
	console.log(newarr);//方法一

	var arr=[1,2,3,,5,,7,8,9,];
	var newarr=[];
	for(var i = 0;i<arr.length;i++){
		if((typeof arr[i])!='undefined'){
			newarr[newarr.length]=arr[i];
		}
	}
	console.log(newarr);//方法二

	/*思路：
		若在原数组上改；会让原值下标改变，不太好，所以存入一个新数组
		数组.length长度可变，且每次都会添加在数组的最一位
	*/

```

#### 注意

1、数组元素默认undefined

2、数组长度可变

3、数组元素可以为任意数据类型

### 二维数组

#### 声明

```javascript
var arr=[
		[97,88,89],
		[98,67,98],
		[56,69,85]
	]
```

#### 如何访问

```javascript
	var zhangsan = [90,95,100];
	var lisi = [43,65,88];
	var wangwu = [75,94,76];
	var classes = [zhangsan,lisi,wangwu];
	console.log(classes[1][2]);//访问的是lisi的第三个值，为88
	console.log(classes[2][0]);//访问的是wangwu的第一个值，为75
	// 二维数组访问
```

##### 二维数组的遍历

```javascript
	var classes1=[
		[97,88,89],
		[98,67,98],
		[56,69,85]
	]
	for(var i = 0;i<classes1.length;i++){
		for(var j =0;j<classes1.length;j++){
			console.log(classes1[i][j]);
		}
	}//二维数组的遍历
```

##### 找最值

```javascript
	var classes1=[
		[97,88,89],
		[98,67,98],
		[56,69,85]
	]
	var max =classes1[0][0];
	for(var i=0;i<classes1.length;i++){
		for(var j=0;j<classes1[i].length;j++){
			if(max<classes1[i][j]){
				max=classes1[i][j];
			}
		}
	}
	console.log(max);//最大值
	
	var min =classes1[0][0];
	for(var i=0;i<classes1.length;i++){
		for(var j=0;j<classes1[i].length;j++){
			if(min>classes1[i][j]){
				min=classes1[i][j];
			}
		}
	}
	console.log(min);//最小值
```

## 数据类型

### 类型划分

根据在内存中存储的位置，划分为

#### 初始数据类型

> 储存在栈区，数据小，比较简单，读取快

undefined

number

string

boolean

null

........

#### 复合数据类型

> 储存在堆区，数据大，信息量大，读取慢

object（对象）

### 检查数据类型

typeof(variable);或者typeof variable ;

> 例如：typeof(a);或typeof a;

| 数据类型      | 值                      | typeof    |
| :-------- | :--------------------- | :-------- |
| undefined | undefined              | undefined |
| boolean   | true，false             | boolean   |
| null      | null                   | object    |
| number    | 数字（所有类型、所有进制、特殊值，不做区分） | number    |
| string    | 通过单双引号包裹起来的字符串         | string    |
| object    | 属性和方法的无序集合             | object    |

> 二进制：（数字前加）0b
>
> 八进制：（数字前加）0o
>
> 十六进制：（数字前加）0x

## 运算符

### 算数运算符

加+

> 加法运算,求和
>
> 字符串的拼接，字符串可以和任意类型拼接起来，并成为字符串类型

减-

> 减法运算

乘*

> 乘法运算

除/

> 除法运算

取余%

> 一般用来得到某一范围的数

括号()

> 使用括号可以提升优先级

```html
<script>
	var a = 43;
	var b = 40;
	var str='我们班有两个班，一个是505班，有'+a+'人，另一个是507班，有'+b+'人，总共有'+ (a+b) +'人。';

	console.log(str);
</script>
```

自增运算++

> var++先参与运算，后自增

```javascript
	var c = 10;
	console.log(c++);//10
	console.log(c);//11
```

> ++var先自增，后参与运算

```javascript
	var c = 10;
	console.log(++c);//11
	console.log(c);//11
```

> 小练习

```javascript
	console.log(d++);//NaN
	console.log(1++);//错误
	var d = 10;
	console.log(++d);//表达式11  d=11
	console.log(++d+2);//表达式14  d=12
	console.log(d++);//表达式12  d=13
	console.log(d);//表达式13  d=13


	var e = 20;
	console.log(--e);//表达式19  e=19
	console.log(e++);//表达式19  e=20
	console.log(e+5);//表达式25  e=20
	console.log(e);//表达式20  e=20

	console.log(20++);//错误
	var num = 20;
	console.log(true+num++);//表达式21  num=21
	console.log(--num);//表达式20  num=20
	console.log(num+5);//表达式25  num=20
	console.log(num--);//表达式20  num=19
	num = num + 5;	//24 
	console.log(num);//表达式24  num=24
```

自减运算

> var--先参与运算，后自增

```javascript
	var c = 10;
	console.log(c--);//10
	console.log(c);//9
```

> --var先自增，后参与运算

```javascript
	var c = 10;
	console.log(--c);//9
	console.log(c);//9
```

### 赋值运算符

=

+=

```
a+=10;
相当于
a=a+10;
```

-=

*=

/=

%=

### 关系运算符（比较运算符）

大于\>

小于<

等于==

大于等于\>=

小于等于<=

全等===

不等!=

完全不等!==

#### 普适法则

> 结果是一个布尔值；

1.两个数字进行比较，按正常比较规则；

2.两个字符串比较，比较字符串首字母的ASCLL码值，ASCLL码值大的所在字符串就大。若第一个字符相同，以此类推比较第二个，第三个......

3.两数字型字符串，同2

4.数字和字符串进行比较。尝试着将字符串转化为数字，按照1的规则进行比较。若转化不成功返回NaN，整个表达式返回false

5.数字和布尔值，true>=1,false>=0

6.undefined==null

> 示例
>
> ```javascript
> 	var num = 10;
> 	var num1 = 20;
> 	alert(num>num1);//false
> 	alert(num<num1);//true
> 	alert(num<=10);//true
> 	alert(num==10);//true
> 	alert(num=='10');//true,跟字符串比较时，数值相等即为true
> 	alert(10=='10');//true,数字跟字符串比较时，字符串会转换成数字，数值相等即为true
> 	alert(1==true);//true
> 	alert(1===true);//false,全等时，不仅比较数值大小，还要比较数据类型
> 	alert(num!=num1);//true
>
> 	var str1 = "a";
> 	var str2 = "b";
> 	var str3 = "aa"
> 	alert(str1<str2);//true
> 	alert(str3<str2);//true
> 	alert(str1<str2);//true
> 	//字符串比较时是按照首字母的大小开始的；若相同，则逐个向后相同位比对，比较大小
> 	var a = '10';
> 	var b = '2';
> 	var c = '2px';
> 	var d = 10;
> 	alert(a>b);//false,数字型的字符串也要按照字符串规则比较
>
> 	alert(d<c);//false
> 	alert(d>c);//false,数字跟字符串比较时，字符串会转换成数字，但无法转换时均为false
>
> 	alert(undefined==null);//true
> 	alert(undefined===null);//false，特殊，记住即可
>
> 	alert(1=true);//true
> 	alert(1='true');//true
> 	alert(true='true');//false
> ```

#### ASCLL码表

![ASCLL码表](E:\优逸客培训\5JavaScript\笔记\ASCLL码表.jpg)

### 逻辑运算符

#### 普适法则

**与&&(and)**

全真为真，运算值为最后一个为真的值

**或||(or)**

有一个真即为真，运算值为第一个为真的值，后面的会略过计算

**非!(not)**

真变假，假变真，先于与或运算

> 注意：false	 0	 null	 undefined	 “”（空字符串）	 NaN	 均为假值

### 其它符号

 

new 创建一个对象

delete删除对象的属性或方法

+（正号）

-（负号）

()改变运算优先级，调用函数

,声明变量时进行分隔

...

#### 三元运算符

? :

```javascript
	var e = 11;
	var flag;
	flag=e%2==0 ? true : false;
	alert(flag);
```

## 执行流程

按从上到下的顺序执行

条件是一个范围优先选用if，条件是定值，情况可数，优先考虑switch

### 分支结构（选择结构）

> 条件最好不要有重复范围，否则可能出现逻辑问题

#### 单路分支

​	if (条件){

​		条件成立执行的代码

​	}

```javascript
var num = 10;
	if(num>0){
		alert(1);
	}
```

#### 双路分支

​	if (条件){

​		条件成立执行的代码

​	}else{

​		条件不成立时执行的代码

​	}

```javascript
	var num = 10;
	if(num>0){
		alert(true);
	}else{
		alert(false);
	}
```

#### 多路分支

​	if (条件1){

​		条件1成立执行的代码

​	}else if (条件2){

​		条件2成立时执行的代码

​	}else if (条件n){

​		条件n成立时执行的代码

​	}else{

​		以上条件都不成立时执行的代码（可省略）

​	}

```javascript
	var score = prompt("请输入您的成绩",0);
	if(score>=90&&score<=100) {
		alert('优秀');
	} else if (score<90&&score>=80){
		alert('良好');
	} else if(score<80&&score>=70){
		alert('中等');
	}else if (score<70&&score>=60){
		alert('及格');
	} else if (score<60&&score>=0){
		alert('不及格');
	} else {
		alert('您输入的成绩不合法');
	}
```

#### 嵌套分支

```javascript
	var score = prompt("请输入您的成绩",0);
	if(score>=90&&score<=100) {
		alert('优秀');
	} else if (score<90&&score>=80){
		alert('良好');
	} else if(score<80&&score>=70){
		alert('中等');
	}else if (score<70&&score>=60){
		alert('及格');
	} else if (score<60&&score>=0){
		if(score>=50) {
			alert('努力一点！');
		} else if (score<50&&score>=30){
			alert('多努力一点！');
		} else {
			alert('需要别人帮助，更多努力一点！');
		}
	} else {
		alert('您输入的成绩不合法');
	}
```

#### Switch 语句

> 条件不要重复

```javascript
	var team = prompt('请输入星期',1)*1;//prompt输入进来的是字符串类型，*1是要将输入值变为数字类型，此外-0，/1均可，不要用+0，会链接起来
	switch (team) {
		case 1:
			alert('一组');
			break;//来阻止代码自动地向下一个 case 运行
		case 2:
			alert('二组');
			break;
		case 3:
			alert('三组');
			break;
		case 4:
			alert('四组');
			break;
		case 5:
			alert('五组');
			break;
		case 6:
			alert('六组');
			break;
		case 7:
			alert('七组');
			break;
		default:
			alert('输入错误');
			break;
	}
```

### 循环结构

> 在满足某个条件的情况下，重复执行某段代码

> 知道循环次数，优先选择for循环；知道循环条件，考虑while、do_while循环

> **while循环、do_whlie循环区别**
>
> while先判断才执行，不符合一次也不会执行；do_whlie会先无条件执行一次，然后才判断，不管是否符合条件。

#### for循环

​	for(条件初始化;终止条件;变化量){

​		循环体

​	}

十以内自然数求和（在此基础上可改为任意范围内求和）

```javascript
	var sum=0;
	for(var i=1;i<=10;i++){
		sum+=i;
		console.log(sum);
	}//十以内自然数求和
```

页面输出4行10列的*号

```javascript
	for(var i=0;i<4;i++){
		for(var j=1;j<11;j++){
			document.write('*');
		}
		document.write('<br />')
	}
```

#### while循环

​	while(循环条件){

​		循环体

​		变化量

​	}

​	

```javascript
	var i = 1;
	while(i<=10){
		console.log(i);
		i++;//量一定要变，不然死循环
	}//while循环
```

#### do_whlie循环

​	do{

​		循环体

​		变化量

​	}while(循环条件)

```javascript
	var sum=0;
	var i = 1;
	do{
		sum+=i;
		i++;//量一定要变，不然死循环
	}while(i<=10)
	console.log(sum);//10以内自然数的和
```

#### 循环跳转

​	1、continue:跳过本次循环，进入下一个循环

```javascript
	for(var i = 1;i<=10;i++){
		if (i%2==0) {
			continue;
		}
		console.log(i);
	}
	//输出1 3 5 7 9
```

​	2、break:跳出（终止）整个循环

```javascript
	for(var i = 1;i<=10;i++){
		if (i%2==0) {
			break;
		}
		console.log(i);
	}
	//输出1
```

## 函数

> 将实现某个特定功能的代码段打包封装，使其能够重复调用,是一个对象（object）

> 优点：
>
> ​	能够重复调用
>
> ​	逻辑结构清晰
>
> ​	便于维护开发

### 声明

封装后不会直接生效，调用之后才可以用

```javascript
	function 函数名(){
		功能代码段
	}//封装后不会直接生效，调用之后才可以用，基本语法命名

	var 自变量 = function (){
		功能代码段
	}//封装后不会直接生效，调用之后才可以用，变量命名
    
    /*等号左边叫自变量，等号右边叫字面量*/
    
	var 变量名=new function('形参1'，'形参2'，'alert(1)'){
        代码
    }//函数构造法，参数必须加引号

```

### 调用

1、基本语法调用

```
	函数名();//基本语法命名
```

2、字面量方式调用

```
	变量名();//字面量方式命名
```

3、写在事件后调用

```

```

4、自调用函数（立即执行函数）

> 把自己用小括号括起来，后面再加小括号，一般用于页面一刷新就执行和只执行一次的函数

```javascript
   (function name(){
        代码段
    })()
```

### 参数（形参、实参）

> 动态改变函数体内部的变量，能让函数变得更加强大、灵活
>
> 起因：要求实现任意情况下的该功能

### 注意

​	参数传递时是按顺序传的，参数不需要声明，不需要写var

#### 定义

1、形参：函数定义时，写在小括号里的值。没有实际值，用来接受实参的值。

2、实参：函数调用时，写在小括号里的值。实参给实参传递值。

```javascript
function name(形参1，形参2，形参n){//形参，看着是个参数，实际的值自己都不知道，等着别人告诉
	功能代码段
    [return]//[]的意思是可写可不写，不是要加[]
}//封装后不会直接生效，调用之后才可以用

name(实参1，实参2，实参n);//调用，实参，真正决定性、实实在在的参数
```

#### 形参实参数目不对等时

1、当实参比形参少，则没有对应实参的形参则为undefined

```javascript
	fn(1,2);//实参比形参少
	function fn(x,y,z){
		console.log(x,y,z);//1 2 undefined
	}
```

2、当实参比形参多

##### 	arguments的用法

- 函数内部自动生成的对象，只能在函数内部调用
- 所有实参会保存在函数自己声明的arguments对象中
- arguments用法跟数组差不多，但不是数组，是object，只能在函数内部调用

```javascript
	fn(1,2,3,4,5,6,7,8,9);//实参比形参多
	function fn(arr){
		console.log(arguments);//会输出所有实参1,2,3,4,5,6,7,8,9
	}
```

> 小例子：实现任意情况下将任意多的数一次放在已知数组后面

```javascript
	// 实现任意情况下将任意多的数一次放在已知数组后面
	var arr=[12,45,2,74,2,9];
	push(arr,1,2,3,4,5,6,7,8,9);
	function push(arr){
		for(var i=1;i<arguments.length;i++){
			arr[arr.length]=arguments[i];
		}
		console.log(arr);//[12, 45, 2, 74, 2, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	}
```

##### 	rest剩余参数

- 用来接受剩下的（没有形参对应的实参）参数，并把它打包成一个数组
- 如果没有剩余参数，rest将是一个空数组
- 必须写在最后



##### 	声明方式

```javascript
	function push(形参1，形参2，形参n,...剩余参数名){
		函数代码段
	}
```

##### 	调用方式

```javascript
	function push(形参1，形参2，形参n,...剩余参数名){
		//函数代码段
		剩余参数名[下标]//意思是直接写名字即可，不需要写前面的三个点
	}
```

> 小例子： 实现任意情况下将任意多的数一次放在已知数组后面

```javascript
	// 实现任意情况下将任意多的数一次放在已知数组后面
	var arr=[12,45,2,74,2,9];
	push(arr,'haha',2,3,'a',5,6,7,8,9);
	function push(arr,...value){
		for(var i=0;i<value.length;i++){
			arr[arr.length]=value[i];
		}
		console.log(arr);
	}
```

#### 默认值的设置

- 带有默认值的参数一般写在最后（不是不能往前写，时写在前面不灵活）
- 默认值只在该参数缺省时生效
- 如果实参的值为undefined，那么默认值会生效

**默认值设置的方法**

- 分支
- 三元表达式
- 逻辑运算符||
- ES6新方法

> 实例：函数间调用，实现一维数组排序，并设置默认值

```javascript
	//	排序sort(),函数间调用
	arr=[12,45,2,74,2,9];
	
	sort(arr,'<');//升序
	sort(arr,'>');//降序
	sort(arr);

	function sort(arr,type){

/*		if(type==undefined){
			type='<';
		}//默认值设为升序方法一*/

/*		type= type==undefined?'<':type;//默认值设为升序方法二*/
      
/*		function sort(arr,type='<'){//默认值设为升序方法四，ECMAScript6新特性，可以直接写默认值，注意兼容性*/

		type=type||'<';//默认值设为升序方法三

		if(type=='<'){
			sortUp(arr);//升序
		}else if (type=='>'){
			sortDown(arr);//降序
		}
	}

	function sortUp(arr){
		for(var i=0;i<=arr.length-1;i++){		
			for(var j=i+1;j<=arr.length-1;j++){
				if (arr[i]>arr[j]) {
					var temp =arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		console.log(arr);//升序排列
	}
	function sortDown(arr){
		for(var i=0;i<=arr.length-1;i++){		
			for(var j=i+1;j<=arr.length-1;j++){
				if (arr[i]<arr[j]) {
					var temp =arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		console.log(arr);//降序排列
	}
```



> 小例子：打印任意长宽的表格

```javascript
function table(rows,cols){//形参，看着是个参数,实际的值自己都不知道，等着别人（实参）告诉
	// 输出任意行任意列的表格
	document.write('<table border=1 cellspacing=0 cellpadding=10px width=700px height=500px align=center>');
	document.write('<caption>以输出的方法打印表格</caption>');
	for(var i=1;i<=rows;i++){
		document.write('<tr align=center>');
		for(var j=1;j<=cols;j++){
			document.write('<td>'+i+'-'+j+'</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}
table(5,6);//实参，真正决定性、实实在在的参数
```

#### 返回值return

- return会向调用该函数的地方返回一个值，注意是那个变量的值，而不是那个变量
- 函数返回值可以是任意数据类型
- 函数允许写多个返回值（一般配合分支结构写），但只可能有一个返回值（因为之后的就不执行了）
- return会终止函数运行，return之后的语句将不会执行
- return可写可不写，写了不给值会默认undefined

> 小例子：返回函数中的一个变量

```javascript
	function fn(){
		var num = 6;
		return num;
	}
	var result=fn();
	alert(result);//6
```

> 小例子：判断数组存在某个特定值,并判断arr是否为数组，参数是否为两个，存在返回true，否则false

```javascript
	//	判断数组存在某个特定值,并判断arr是否为数组，参数是否为两个，存在返回true，否则false
	var arr=[1,2,4,5,65,67,55,869];//特定的数组
	value=0;//要找的值
	var result1=exist(arr,value);
	alert(result1);

	function exist(arr,value){
		if(!(typeof arr == 'object' && arguments.length>=2)){
			return "输入错误";//不是数组或者参数不够两个时
		}
		for(var i=0;i<arr.length;i++){
			if(arr[i]==value){
				return true;//找到特定数时
			}
		}
		return false;//未找到特定数时
	}
```

> 小例子：将一个数组转换成字符串

```javascript
//将一个数组转换成字符串
	var arr = [3,2,4,8,9,9,8,7,6,5];
	var result=join(arr,'+');
	alert(result);//3+2+4+8+9+9+8+7+6+5

	function join(arr,str){//arr特定数组，str连接符
		var result='';//必须写空字符串，不然结果会有默认值undefined在前面
		str= str==undefined? '-':str;//连接符的默认值方法一
		//str= str||'-'//连接符的默认值方法二
		for(var i=0;i<arr.length;i++){
			if (i<arr.length-1) {
				result += arr[i]+str;//最后一个之前都加-
			}else{
				result+=arr[i];//最后一个不加-
			}			
		}
		return result;
	}
```

> 小例子：将一个数组的偶数放入一个新数组

```javascript
	//将一个数组的偶数放入一个新数组
	//filter（过滤器、筛选）
	var arr = [3,2,4,8,9,9,8,7,6,5];
	var newarr=filter(arr);
	alert(newarr);//2,4,8,8,6

	function filter(arr){//arr特定数组
		var newarr=[];
		for(var i=0;i<arr.length;i++){
			if(arr[i]%2==0){
				newarr[newarr.length]=arr[i];
			}			
		}
		return newarr;
	}
```

#### 注意

1、函数多次声明会覆盖；

2、以基本语法声明时，可在声明前后均可调用；若以字面量声明的函数，只能在声明之后调用，之前调用变量还未声明，默认值为undefined，undefined加()无法识别，会报错；

3、当使用多个函数文件，调用时要注意文件的先后顺序，否则在声明前调用可能报错

## 作用域

### 作用范围

全局作用域

> 变量没有用var修饰，或定义在函数的最外层。可作用在任意范围

局部作用域

> 定义在函数内部，只能在某一函数中作用

### 环境

#### 宿主

#### 执行

#### 预编译

- 按照script标签对，从上到下进行编译
- 只会预编译var声明的变量名，function的函数名，预先放置在内存里，还能够记录声明的环境
- 再执行

> 小例子：四则运算函数math，需要两次返回值

```javascript
	function aa(num1,num2){
		return num1+num2;
	}
	function bb(num1,num2){
		return num1-num2;
	}
	function cc(num1,num2){
		return num1*num2;
	}
	function dd(num1,num2){
		return num1/num2;
	}

	function math(num1,num2,fn){
		return fn(num1,num2);
	}//没有return最后的结果会是undefined，因为调用的都只会返回到上一层，所以aa bb cc dd只是返回到了math函数里，并没有返回到最外层，所以要两次return

	console.log(math(1,2,aa));//3
	console.log(math(1,2,bb));//-1
	console.log(math(1,2,cc));//2
	console.log(math(1,2,dd));//0.5
```

























