#  Javascript

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

> HTML DOM 是：
>
> - HTML 的标准对象模型
> - HTML 的标准编程接口
> - W3C 标准
>
> HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。
>
> *换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。*

#### 节点

> DOM的最小组成单位叫做节点（node）。由节点组成一个文档树模型。由元素节点、属性节点、文本节点组成，节点之间相联系，相互影响，称之为模型

##### 节点的类型

节点的类型有七种。这七种节点都属于浏览器原生提供的节点对象的派生对象，具有一些共同的属性和方法。

> `Document`：整个文档树的顶层节点
>
> `DocumentType`：`doctype`标签（比如`<!DOCTYPE html>`）
>
> `Element`：网页的各种HTML标签（比如`<body>`、`<a>`等）
>
> `Attribute`：网页元素的属性（比如`class="right"`）
>
> `Text`：标签之间或标签包含的文本
>
> `Comment`：注释
>
> `DocumentFragment`：文档的片段

##### HTML DOM 树

![ct_htmltree](E:\优逸客培训\5JavaScript\JS-in-UEK\笔记\ct_htmltree.gif)

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

	console.dir();//在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。
	
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

> 可看做存储数据的一个容器；
>
> 还是提倡先声明后调用

优点：1、节省内存

​	    2、改的时候方便

### 声明变量

> 值可以改变的量

#### var

- 变量允许重复声明同一个变量，如果不给新变量值，则依然为原先值，若给新值，则会覆盖原先值


- 声明变量需要var去修饰。若不用var修饰，也不赋值，则会报错；若不用var修饰，但赋值，则该变量会变为全局变量（不推荐）


- 若用var声明但不赋值，或者在声明前调用（变量的提升），则会使用默认值undefined

```javascript
var 变量名 = 1;
var 变量名 = 'adasd';

var 变量名;
变量名=1;
```

#### let

- 基本用法、声明和var一样；
- let不可以在同一作用域重复声明变量，let会绑定到当前作用域里
- let不仅可以识别函数的作用域，而且识别`{}`括起来的作用域（块级作用域），var不识别块级作用域

> let声明

```javascript
let 变量名 = 1;
let 变量名 = 'adasd';

let 变量名;
变量名=1;
```

> let识别块级作用域

```javascript
	var num = 10;
	function fn(){
		console.log(num);//undefined，说明var是能识别函数带来的作用域
		if(true){
			var num='a';
		}
	}
	fn();

	

	{
		let num=10;
		console.log(num);//10
	}
	console.log(num);//会报错：num is not defined，说明let声明的变量可以识别块级作用域
```

##### 	Tip:块级作用域

> `{}`括起来的都叫块级作用域

###### 		块级作用域的嵌套

```javascript
	let num='abcd';
	{
		let num=10;
		{
			let num=20;
			console.log(num);//20
		}
		console.log(num);//10
	}
	console.log(num);//abcd
//let的作用域在各自的每个{}里
```

###### 独立作用域

```js
	for(let i=0;i<arr,length;i++){//le在for循环里比较特别，小括号称作他的独立作用域
		//let i=0;//在此再声明一个也可以，虽然没必要
		console.log(arr[i]);
	}
```

#### let与var的区别

- var可以在声明前调用（变量的提升），值为undefined；let只能在声明之后用，之前的语句会成为一个暂时性的死区，不存在变量的提升


- var可以重复声明同一个变量，let不可以在同一作用域重复声明变量，let会绑定到当前作用域里


- let不仅可以识别函数的作用域，而且识别{}括起来的作用域（块级作用域），var不识别块级作用域

#### var缺点及解决

1、var for循环之后会释放一个全局变量（或者叫内存的泄露）

```javascript
	for(var i=0;i<10;i++){
		console.log(i);//1~9
	}
	console.log(i);//10，所以var在for循环后会放出一个全局变量

	for(let i=0;i<10;i++){
		console.log(i);//1~9
	}
	console.log(i);// 会报错：i is not defined，所以let声明可以解决上述胡乱放出全局变量的问题
```

2、var的局部变量会覆盖全局变量???

```javascript
	var num='abcd';
	{
		var num=10;
		console.log(num);//10
	}
	console.log(num);//abcd

	let num='abcd';
	{
		let num=10;
		console.log(num);//10
	}
	console.log(num);//abcd
```

#### 变量名命名的注意事项

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

## 常量

### 声明

> 用const声明

### 注意!

- 不允许修改
- 不允许重复命名
- 不允许先声明后赋值
- 识别块级作用域
- 存在暂时性死区
- 没有变量提升（不能在声明前调用）

### 一般写法

- 常量一般声明到JS最前面，便于协作、维护
- 常量一般大写

```javascript
	const PI=3.1415926;
	PI=0;//报错
	const PI=0；//报错*/
	
	
{
	const PI=3.1415926;
	alert(PI);//3.1415926
}
	alert(PI);//报错
```

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

##### 一般赋值法

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

##### 构造函数赋值法

```javascript
var arr = new Array('a','b','c','d');//数组的构造函数声明方法
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

#### 注意！

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

### 检查数据类型typeof

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

![ASCLL码表](E:\优逸客培训\5JavaScript\JS-in-UEK\笔记\ASCLL码表.jpg)

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

​	}​

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
>
> 注意：参数传递时是按顺序传的，参数不需要声明，不需要写var

#### 定义

1、形参：函数定义时，写在小括号里的值。没有实际值，用来接受实参的值。

2、实参：函数调用时，写在小括号里的值。实参给形参传递值。

```javascript
function name(形参1，形参2，形参n){//形参，看着是个参数，实际的值自己都不知道，等着别人告诉
	功能代码段
    [return]//[]的意思是可写可不写，不是要加[]
}//封装后不会直接生效，调用之后才可以用

name(实参1，实参2，实参n);//调用，实参，真正决定性、实实在在的参数
```

#### 形参实参数目不对等时

##### 当实参比形参少

则没有对应实参的形参则为undefined

```javascript
	fn(1,2);//实参比形参少
	function fn(x,y,z){
		console.log(x,y,z);//1 2 undefined
	}
```

##### 当实参比形参多

###### 	arguments的用法

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

###### 	rest剩余参数

- 用来接受剩下的（没有形参对应的实参）参数，并把它打包成一个数组
- 如果没有剩余参数，rest将是一个空数组
- 必须写在最后


  **声明方式**

```javascript
	function push(形参1，形参2，形参n,...剩余参数名){
		函数代码段
	}
```

​	**调用方式**

```javascript
	function push(形参1，形参2，形参n,...剩余参数名){
		//函数代码段
		剩余参数名[下标]//意思是直接写名字即可，不需要写前面的三个点
	}
```

​	**注意**

`...rest`在参数处写的时候，会将剩余参数打包成一个数组；

`...rest`不在参数处写的时候，会打包成的数组拆分成一个个的元素；

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

> 小例子：实现两个数组的连接

```js
	let arr=[1,2,3,4,5,6]
	let arr1=['a','b','c','d'];
/*	for(let i=0;i<arr1.length;i++){
		arr.push(arr1[i]);
	}*/
	arr.push(...arr1);//实现两个数组的连接，等于被注释的部分
	console.log(arr);
```

#### 参数默认值的设置

- 带有默认值的参数一般写在最后（不是不能往前写，时写在前面不灵活）
- 默认值只在该参数缺省时生效
- 如果实参的值为undefined，那么默认值会生效

**默认值设置的方法**

- 分支
- 三元表达式
- 逻辑运算符||
- ES6新方法

> 实例：函数间调用，实现一维数组排序，并设置默认值
>
> Tip：如果传递的值为undefined，该参数还是会用设置好的默认值

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

#### 注意!

1、函数多次声明会覆盖；

2、以基本语法声明时，可在声明前后均可调用；若以字面量声明的函数，只能在声明之后调用，之前调用变量还未声明，默认值为undefined，undefined加()无法识别，会报错；

3、当使用多个函数文件，调用时要注意文件的先后顺序，否则在声明前调用可能报错

### 返回值return

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

### 回调函数

> 把一个函数作为参数来传递，调用该参数时就是在调用该函数，所以将该函数称作回调函数。

```javascript
/*
	判断数组中是否全为某元素
 */

	var arr=[2,2,2,2,2,2];
	var result1=every(arr,function(value){
		return value==2;
	});//里面的function(value){}被称作回调函数
	console.log(result1);

	function every(arr,fn){
		for(var i=0;i<arr.length;i++){
			if(!fn(arr[i])){
				return false;
			}
		}
		return true;
	}
```

### 递归函数（函数自调用）

> 函数自己执行时调用自己本身
>
> 一定要有临界条件，不然死循环
>
> **注意：递归不是循环**

```javascript
//函数的自调用，递归函数
	fn(1);
	function fn(num){
		if(num<5){//条件很关键，出口，否则停不下来
			fn(++num);//调用自己本身，只是里面参数在变
		}
		alert(num);
	}//fn时一个递归函数，相当于实现下面的功能


/*	fn1(1);
	function fn1(){
		fn2();
		alert(1);
	}
	function fn2(){
		fn3();
		alert(2);
	}
	function fn3(){
		fn4();
		alert(3);
	}
	function fn4(){
		fn5();
		alert(4);
	}
	function fn5(){
		alert(5);
	}*/
```

### 传值和传址

```javascript
	// 数组的深拷贝，结合递归
	var arr=[1,2,3,4,5,['a','b','c']];
	var arr1=copy(arr);

	arr[2]=9;
	arr1[4]=8;

	arr[5][1]='z';
	//拷贝之后再修改，不然就都改了

	console.log(arr);
	console.log(arr1);


	function copy(arr){
		var newarr=[];
		for(var i=0;i<arr.length;i++){
			if(typeof arr[i]=='object'){//如果被拷贝数组中嵌套着数组的话，再调用copy函数
				newarr[i]=copy(arr[i]);
			}else{
				newarr[i]=arr[i];
			}
		}
		return newarr;
	}
```

### 闭包

> 函数有嵌套，内部嵌套的函数返回到外面，在外面访问内部嵌套的函数时也可以访问到里面的变量，就将里面嵌套的函数称为闭包

> 例子：

```javascript
	function fn(){
		var num = 10;
		return fn1;//将fn1整个函数语句返回
		function fn1(){
			num++;
			return num;
		}//fn1即为闭包
	}
	var result = fn();//返回后result是fn1的函数语句
	alert(result());//result()相当于fn1(),结果为11
```

### 箭头函数

> ES6中新定义的函数,写法比较简单，但箭头函数的出现并不为了替代普通函数，它主要是使用在回调函数中

#### 注意！

- 箭头函数中没有arguments对象
- 箭头函数不能作为构造函数去实例化对象
- 返回json数组必须在外面再加一个小括号

> 返回json数组

```js
// 箭头函数返回json对象
let fn=(num)=>({name:'zhangsan',age:13})//返回json数组必须在外面再加一个小括号，不然报错，会以为是包了普通语句
console.log(fn());//{name: "zhangsan", age: 13}可以返回
```

> 例子1：

```javascript
/*	var fn=function(a){
		return a;
	}*/

	var fn = a =>a;//ES6,箭头函数,与上面的函数等价，但箭头函数的出现并不为了替代上面的函数，主要是使用在回调函数中
	alert(fn(7));
	
/*	var fn=function(){
		return 1;
	}*/
	var fn = () =>1;//没有参数的情况，相当于上述函数，不加()会报错
	
/*	var fn=function(a,b){
		return a+b;
	}*/
	var fn = (a,b) =>a+b;//多参数的情况，相当于上述函数

/*	var fn=function(a,b){
		alert(a+b);
		alert(a-b);
		return [a+b];
	}*/
	var fn = (a,b) =>{
		alert(a+b);
		alert(a-b);
		return [a+b];
	};//多语句的情况，相当于上述函数

/*注意：箭头函数中没有arguments对象，箭头函数不能作为构造函数使用*/
```

> 例子2：

```javascript
	/*
	判断一个数组中是否有某元素
 */
	var arr=[1,2,3,4,5,6,7,8,9];
	var result=some(arr,function(value){
		return value==0;
	})

	var result1=some(arr,value=>value==0);//相当于result函数

	console.log(result);
	console.log(result1);//结果一样

	function some(arr,fn){
		for(var i=0;i<arr.length;i++){
			if(fn(arr[i])){
				return true;
			}
		}
		return false;
	}
```

### 内置顶层函数

> 内置：在JS内部自己定义了一些函数，只需要使用，无需了解实现
>
> 顶层：在任意的位置均可调用

1.escape()      对非字母、数字的字符进行编码

```
console.log(escape('中国'));//%u4E2D%u56FD
```

2.unescape()    对编码后的字符串进行解码

```
console.log(unescape('%u4E2D%u56FD'));//中国
```

3.Number()      转换成数值类型，只有数字型字符串才可转换，其他不符合数字规则的均为NaN

> 布尔值：true=>1 false=>0
>
> null=>0
>
> undefined=>NaN
>
> 数字：各种进制=>十进制 ； 忽略无意义的0
>
> 字符串：
>
> ​	数字型字符串：忽略掉前后无意义的0，识别进制
>
> ​	空字符串=>0

```javascript
console.log(Number('123'));//123
console.log(Number(123));//123
console.log(Number(00123));//83,八进制
console.log(Number(123.000));//123
console.log(Number(123.01));//123.01
console.log(Number(123.01.2));//报错
console.log(Number(0123));//84,八进制
console.log(Number(0b1111));//15,十进制
console.log(Number('0b1111'));//15,十进制
console.log(Number('123px'));//NaN
console.log(Number('abcd'));//NaN
console.log(Number('true'));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
```

4.String()      转换成字符串类型，相当于给各个类型外层加了`"" `

5.Boolean()     转换成布尔类型

> 只有false	 0	 null	 undefined	 “”（空字符串）	 NaN	会转换为false，其余均会转换为true

6.parseInt()    将字符串转换为整数

> 只能转换以数字、+、-、空格开头。以第一个数字字符开始，以第一个非数字结束的区间，并将其转换成带符号的整数

```javascript
console.log(parseInt('1234'));//1234
console.log(parseInt('0b1111'));//0
console.log(parseInt('100px'));//100
console.log(parseInt('100px200'));//100
console.log(parseInt('     100px200'));//100
console.log(parseInt('     -100px200'));//-100
console.log(parseInt('     -1.00px200'));//-1
console.log(parseInt('abcd100px200'));//NaN
```

7.parseFloat()  转换为小数

> 只能转换以数字、+、-、空格开头。以第一个数字字符开始，以第一个非数字结束的区间，并将其转换成带符号的小数
>
> 没有小数则转换成为整数

```javascript
console.log(parseFloat(1234.01));//1234.01
console.log(parseFloat(1234.00));//1234
console.log(parseFloat('1234.01'));//1234.01
console.log(parseFloat('1234.00'));//1234
console.log(parseFloat('0b1111'));//0
console.log(parseFloat('100px0.00'));//100
console.log(parseFloat('10.70px200'));//10.7
console.log(parseFloat('     1.100px200'));//1.1
console.log(parseFloat('     -1.500px200'));//-1.5
console.log(parseFloat('     -1.00px200'));//-1
console.log(parseFloat('abcd100px200'));//NaN
```

8.isNaN()       判断一个数能否转换为数值类型。会隐式调用Number()来判断是否是一个数值

```javascript
console.log(isNaN(true));//false
console.log(isNaN(false));//false

console.log(isNaN('abcd'));//true
console.log(isNaN('123'));//false
console.log(isNaN('0123'));//false
```

9.isFinite()    判断一个数是否为有穷的数字。将不是有穷的数字或不能转换为数值类型的数返回假。


10.eval()       将字符串转换成javascript命令执行(必须符合javascript语法规范，否则会出错)。

#### 强制类型转换

​	以上函数可用作强制类型转换

#### 隐式类型转换

算术运算符（* / - %）

关系运算符

逻辑运算符

三元表达式

if

while

## 作用域

### 作用范围

> 能访问到即为起作用，不管是否有值
>
> 通过函数来划分作用域

#### 全局作用域

> 变量没有用var修饰，或定义在函数的最外层。可作用在任意范围

#### 局部作用域

> 定义在函数内部，只能在某一函数中作用

### 环境

> 用来识别当前变量的作用域

#### 宿主

#### 执行

#### 预编译

- 按照script标签对，从上到下进行编译
- 只会预编译var声明的变量名，function的函数名，预先放置在内存里，还能够记录声明的环境
- 再执行

> 小例子：四则运算函数math，需要两次返回值

```
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
## 对象（object）

> 一系列属性和方法的无序集合

### 声明及使用方法

#### json声明

> 直接实例化一个对象，无需写构造函数，但实际上每个对象都是通过构造函数来的，他使用JS自带构造函数

```javascript
let zhangsan={}//json对象，JS原生声明方法直接声明一个对象
```

##### 方法一：先构造后对象

```javascript
let zhangsan={}

zhangsan.age=18;//添加一个属性，格式为：   对象名.属性名=值；
zhangsan.name=zhangsan;
zhangsan.say=function (){
   alert(zhangsan.name);
}//添加一个对象的方法，方法是一个函数，格式为： 对象名.方法名=function(){语句}

console.log(zhangsan);
zhangsan.say();
```

##### 方法二：直接添加属性

```javascript
	let zhangsan={
		age:18,//添加一个属性，格式为：   属性名:值；
		name:'zhangsan',//每条后面必须有	,	最后一条属性不加
		sex:'nan',//属性名可加单双引号或者不加均可
		say:function (){
		   alert(zhangsan.name);
		}//添加一个对象的方法，方法是一个函数，格式为： 对象名:方法名=function(){语句}
	}

	console.log(zhangsan);
	zhangsan.say();
```

#### 构造函数声明

##### 方法一：先构造后对象

```javascript
    function Person(){

    }//函数就是一个类，构造函数
    let zhangsan= new Person();//构造函数方法创建对象，从Person这个类中实例化出zhangsan这个具体对象
    let lisi = new Person();


    zhangsan.age=18;//添加一个属性，格式为：   对象名.属性名=值；
    zhangsan.name=zhangsan;
    zhangsan.say=function (){
      alert(zhangsan.name);
    }//添加一个对象的方法，方法是一个函数，格式为： 对象名.方法名=function(){语句}
    

    console.log(zhangsan.name);//访问一个对象的一个属性，格式为：  对象名.属性名
```

##### 方法二：添加默认属性

```javascript
	function Student(){
		this.name='zhangsan';
		this.age=22;
		this.sex='nan';
		this.say=function(){
			alert(1);
		}
	}//构造函数中的默认属性，常写一些公共属性，使用this指针
	let zhangsan = new Student();
	let lisi = new Student();

	lisi.name='lisi';//有默认值的也可以具体修改

	console.log(zhangsan);
	console.log(lisi);
```

##### 方法三:传参

```javascript
	function Student(name,age,sex){
		this.name=name;//等号前是属性名，后面是参数，互不冲突
		this.age=age;
		this.sex=sex;
		this.say=function(){
			alert(1);
		}
	}//构造函数也是函数，可以传参
	let zhangsan = new Student('zhangsan',22,'nan');
	let lisi = new Student('lisi',24,'nv');

	console.log(zhangsan);
	console.log(zhangsan.say());
	console.log(lisi);
```

##### 查看构造函数

###### 内容constructor

通过`对象名.constructor`可以查看指定对象的构造函数

> 查看json数组的构造函数

```javascript
	console.log(zhangsan.constructor);//ƒ Object() { [native code] }	JS中自带的构造函数
```

###### 来源instanceof

> 返回值为true或false
>
> **判断是否为数组的话应该用instanceof而不是typeof**

> 例子

```javascript
function Person(){
	this.name='person';
}
function Student(){
	this.name='student';
}

let zhangsan=new Person();
let lisi=new Student();

console.log(zhangsan instanceof Student);//false
console.log(lisi instanceof Student);//true

let arr=[];
console.log(arr.constructor);//ƒ Array() { [native code] }
console.log(zhangsan.constructor);//ƒ Person(){	this.name='person';}

console.log(zhangsan instanceof Array);//false，判断是否为数组的话应该用instanceof而不是typeof
console.log(lisi instanceof Array);//false，判断是否为数组的话应该用instanceof而不是typeof
console.log(arr instanceof Array);//true，判断是否为数组的话应该用instanceof而不是typeof
```

##### 冒充继承

```js
		/*冒充继承：

		本来是zhangsan的方法，冒充给lisi了，让lisi也有了这种方法
		意思是本次zhangsan say的时候让lisi用了，并不是说之后lisi就有了say方法了
		*/
		function Person(){
			this.name='person';
			this.age=16;
			this.say=function(a,b){
				console.log(a+b);
			}
			this.study=function(){
				console.log(this);
			}
		}
		function Student(){
			// Person.call(this);//这儿也能写冒充，？？？
			this.name='lisi';
			this.classes='WUIF1707-1';
			this.num='170701';
		}
		let zhangsan=new Person();
		let lisi=new Student();
		
		zhangsan.say.call(lisi,3,4);//冒充，第一个写冒充的对象，后面的参数是原方法的参数，可有可无
		zhangsan.say.apply(lisi,[1,2]);//也是冒充，只是后面传的是数组
```

#### 类Class声明

> 基本用法跟上述方法一样

##### 注意!

> 类名的首字母习惯大写,后面没有小括号！
>
> 函数名一般小写
>
> 方法习惯写在构造函数外面，函数间没必要加任何符号，也可加`;`
>
> new对象的时候只能在class之后，否则报错

```javascript
//ES6新语法
class Student{//类首字母大写习惯,没有小括号！！！！
	constructor(){//函数小写习惯
		this.name='lisi';
		this.age=22;
		this.sex='男';
		this.say=function(){
			alert(1);
		}
	}
	study(){
		alert('学习');
	};
	play(){
		alert('玩儿');
	}//方法习惯写在构造函数外面，函数间没必要加任何符号，也可加;
}

let lisi =new Student();//只能写在后面，否则报错
lisi.say();
lisi.study();
console.log(lisi);
```

##### 类的继承

```js
		/*类的继承*/
		class Person{
			constructor(){
				this.name='person';
				this.age=20;
			}
		}
		class Student extends Person{//类的继承
			constructor(){
				super();//写这个才能继承父类
			}
		}
		let lisi=new Student();
		console.log(lisi);
```

> 例子：模拟数组的工作原理

```javascript
	let arr = new myArray('a','b','c','d');
	/*
		arr[0]=a;
		arr[1]=b;
		...
	 */
	console.log(arr);
	console.log(arr.length);

	function myArray(){
		for(let i=0;i<arguments.length;i++){
			this[i]=arguments[i];
		}
		this.length=arguments.length;
	}

	//	模拟数组的工作原理
```



### 访问对象

#### 对象名.属性名

```javascript
	function Student(name,age,sex){
		this.name=name;
		this.age=age;
		this.sex=sex;
		this.say=function(){
			alert(1);
		}
	}
	let zhangsan = new Student('zhangsan',22,'nan');
	
	let lisi={
		age:18,//添加一个属性，格式为：   属性名:值；
		name:'lisi',//每条后面必须有	,	最后一条属性不加
		sex:'nan',//属性名可加单双引号或者不加均可
		say:function (){
		   alert(zhangsan.name);
		}//添加一个对象的方法，方法是一个函数，格式为： 对象名.方法名=function(){语句}
	}

    
	console.log(lisi);//{age: 18, name: "zhangsan", sex: "nan", say: ƒ}
	lisi.say();//弹出	zhangsan
	console.log(zhangsan);//弹出{name: 'zhangsan',age: 22,sex: 'nan', say: ƒ}
	console.log(zhangsan.say());//弹出1
```

#### 对象名['属性名']

> `[]`里面必须是字符串，否则会识别成一个变量，然后报错

```javascript
	console.log(zhangsan['name']);//相当于console.log(zhangsan.name);
	zhangsan['say']();//相当于zhangsan.say();
```

#### 遍历对象

> 使用for in 对对象进行遍历

```javascript
	function Student(name,age,sex){
		this.name=name;//等号前是属性名，后面是参数，互不冲突
		this.age=age;
		this.sex=sex;
		this.say=function(){
			alert(1);
		}
	}
	let zhangsan = new Student('zhangsan',22,'nan');


	for(let i in zhangsan){
		console.log(i);
	}//遍历zhangsan的每个属性名

	for(let i in zhangsan){
		console.log(`${i}---${zhangsan[i]}`);//遍历每个属性名和属性值（不是固定格式，只是变量引用而已）
		// console.log(`${i}---${zhangsan.i}`);//i会被当成字符串，结果全部为undefined
		// console.log(`${i}---${zhangsan.'i'}`);//错误写法，会去找名为 '属性名' 的属性名，没有当然报错
	}//遍历zhangsan的每个属性值

	//上述结果为 name
	//			age
	//			sex
	//			say
	//			name---zhangsan
	//			age---22
	//			sex---nan
	//			say---function (){
	//						alert(1);
	//					}
```

### 对象的调用

#### 调用自身属性和方法

```javascript
	let lisi=new Person('lisi',22,'nan')
	lisi.say('你好');
	lisi.study();
	lisi.speech('演讲');

	function Person(name,age,sex){
		this.name=name;
		this.age=age;
		this.sex=sex;
		this.brain=`${this.name}脑子`;
		this.say=function(value){
			alert('我说：'+value);//传参
		}
		this.study=function(){
			alert(this.brain);//弹出自身属性
		}
		this.speech=function(value){
			this.say(value);//调用自身方法
```

#### 对象的删除

对象名=null	即可删除

```javascript
	zhangsan.haha='haha';
	console.log(zhangsan.haha);//haha
	delete zhangsan.haha;
	console.log(zhangsan.haha);//undefined，说明删除成功

	zhangsan.lalala=function(){
		return 'lalala';
	}
	console.log(zhangsan.lalala());//lalala
	delete zhangsan.lalala;
	console.log(zhangsan.lalala);//undefined，说明删除成功
```

#### 属性的删除

delete 对象名.属性名	即可删除

**只能删除构造函数上面的属性或方法，prototype上的不能删除（删了公共的别人怎么办！）**

```javascript
	zhangsan=null;
	console.log(zhangsan);//null
```

##### 注意!

- 访问一个不存在的属性时不报错，会返回undefined
- 访问一个不存在的方法（函数）时报错（主要原因是因为undefined加`()`不合语法）
- 属性名也可以使用数字

```javascript
	let lisi=new Person('lisi',22,'nan')
	
	console.log(lisi[1]);//写数字的时候只能用[]
	console.log(lisi[2]);//写数字的时候只能用[]


	function Person(name,age,sex){
		this[1]=name;//属性名也可以写数字
		this[2]=age;
		this.sex=sex;
		this.say=function(value){
			alert(this.name);
		}
	}
```

### 原型对象(prototype)

> 由构造函数声明对象时，不同的对象的方法有各自的存储位置，所以太占内存，所以出现了prototype（原型对象），通过将方法写在prototype内部，实现不同对象使用同一方法

> 例子：说明不同对象的方法存储位置不同

```javascript
function Person(){
		this.name='zhangsan';
		this.age=33;
		this.sex='nan';

		this.say=function (){
			alert(this.name);
		}
		this.play=function (){
			alert(`${this.name}玩儿`)
		}
	}
	let zhangsan=new Person();
	let lisi=new Person();
	console.log(zhangsan.say()==lisi.say());//true，比较的是返回值，均为undefined，所以相等
	console.log(zhangsan.say==lisi.say);//false,比较的是各自函数的存储地址,所以不同
	console.log(zhangsan==lisi);//false,比较的是各自的存储地址,所以不同
	console.log([]==[]);//false,比较的是各自的存储地址,所以不同
```

**prototype是一个构造函数的属性**，数据类型为**对象（object）**，所以可以写做一个json对象

#### prototype优点

- prototype外放属性，prototype里放方法，直观便于维护
- 节省空间
- 容易继承

> 实际上对象也能放在prototype里，但是不好改（对于传参的来说）；方法也可以放在prototype外面，因为有的方法对于不同对象实现的功能不一样，所以放在外面

#### prototype的使用

> 例子：使用原型对象

```javascript
	function Person(){
		this.name='zhangsan';
		this.age=33;
		this.sex='nan';

	}
	Person.prototype={
		say:function (){
			alert(this.name);
		},
		play:function (){
			alert(`${this.name}玩儿`)
		},
		sleep:function(){
			alert('休息');
		}

	}//方法放到构造函数的prototype上，其new出来的都可以有该方法
	
	let zhangsan=new Person();
	let lisi=new Person();

	zhangsan.eat=function(){
		alert('eat')
	}//想给指定对象添加方法，按普通写法就行

	Person.prototype.hello=function(){
		alert('hello!');
	}//给原型添加一个方法，当然直接在上面写也可以
    
    Person.prototype={
		aa:function(){
			alert(1);
		}
	}//不能用这种方法添加，这种写法相当于重写，上面的方法就被覆盖没了

	zhangsan.sleep();//休息
	zhangsan.hello();//hello!
	console.log(zhangsan.sleep==lisi.sleep);//true,说明其存储地址一样
```

#### prototype的继承

> 因为prototype是一个对象，因此可以被另一个构造函数new出来，即可实现继承
>
> 构造函数中的方法名可以重复，自己有优先用自己的，且构造函数中方法的先于原型中的方法被调用
>
> `__proto__`指到的是他自身构造函数的原型对象上，可以一级一级往上找，查看他构造函数有何属性和方法

> 例子

```javascript
	function Person(){
		this.name='person';
		this.age=33;
		this.sex='nan';
		this.eat=function(){
			alert('eat');
		};
		this.sleep=function(){
			alert('sleep');
		}
		this.aa=function(){
			alert('person构造函数的aa')
		}
	}
	Person.prototype.aa=function(){
		alert('person原型的aa');
	}
	function Student(){
		this.classes='wuif1707-1';
		this.num='wuif1707-1001';
		this.skills=function(){
			alert('fuulstack');
		}
		this.aa=function(){
			alert('Student构造函数的aa')
		}
	}
	Student.prototype.aa=function(){
		alert('Student原型的aa');
	}

	let zhangsan=new Person();
	let lisi=new Student();

	console.log(lisi.name);//undefined,因为此时lisi还没有name属性

	Student.prototype = new Person();//继承了Person的属性和方法，相当于Student.prototype这个对象是由Person()new出来的
	let wangwu = new Student();

	console.log(wangwu.name);//person
	console.log(lisi);//没有继承的属性和方法,因为继承之前声明的
	console.log(lisi.name);//undefined,因为继承之前声明的
	
	console.log(wangwu.__proto__== Student.prototype);//__proto__指到的是他自身构造函数的原型对象上
	console.log(Student.prototype.__proto__==Person.prototype);
	console.log(Person.prototype.__proto__);//自带构造函数

	lisi.aa();//构造函数中的方法名可以重复，自己有优先用自己的，但构造函数中方法的先于原型中的方法被调用
```

### JS对象的内置属性

#### 字符串String

##### 属性

```javascript
//字符串
 	let str='a bc牛佳琦';
 	console.log(str.constructor);//查看构造函数
 	console.log(str.__proto__);//返回构造函数，可以用来查看所有属性
 	console.log(str.length);//空格算一个长度，汉字也是一个长度
```

##### 方法

###### 查找(charAt,charCodeAt,fromCharCode)

```javascript
 	console.log(str.charAt(5));//返回指定（下标）位置字符，参数0,1,2,...
 	console.log(str.charCodeAt(3));//返回指定（下标）位置字符的Unicode码
 	console.log(String.fromCharCode(97));//将Unicode码编译成字符（串）
```

###### 位置(indexOf,lastIndexOf)

```js
 	let str1='abcdabcd'
 	console.log(str1.indexOf('abcd'));//0,判断某字符串首次出现的位置
 	console.log(str1.indexOf('abcdy'));//-1,判断某字符串首次出现的位置，没有返-1
 	console.log(str1.lastIndexOf('abcd'));//4,判断某字符串最后出现的位置
 	console.log(str1.lastIndexOf('abcde'));//-1,判断某字符串最后出现的位置，没有返-1
```

###### 存在(includes)

```javascript
 	let str1='abcdabcd'
 	alert(str1.includes('abf'));//false
 	alert(str1.includes('ab'));//true
```

###### 截取(slice,substring,substr)

slice(start,end);

```javascript
 	console.log(str1.slice(0,4));//abcd,指定下标开始，指定下标结束，但不包括结束位置,原字符串不会改变
 	console.log(str1.slice(0,str1.length-3));//
 	console.log(str1.slice(0,-2));//负值是从后往前数的
 	console.log(str1.slice(4));//省略结束位置，会从指定位置截到结尾
```

substring(start,end);

```
 	console.log(str1.substring(0,4));//abcd,指定下标开始，指定下标结束，但不包括结束位置,原字符串不会改变
 	console.log(str1.substring(0,str1.length-3));//
 	console.log(str1.substring(4));//省略结束位置，会从指定位置截到结尾
```

substr(start,length);

```
 	console.log(str1.substr(2,2));//cd,指定下标开始，指定长度
 	console.log(str1.substr(2));//cdabcd，省略长度，会从指定下标开始，截到末尾
```

###### 替换(replace)

replace(原字符串，要替换的字符串);

常结合正则使用

```javascript
	let str2='abcdefgabcd';
	console.log(str2.replace('abcd','****'));//****efg，将一个字符串中某些字符替换成其他字符
	console.log(str2.replace('abcd','****'));//****efg,多次替换也是从头开始
```

> 例子：

```js
	let str2='abcdefgabcd';
	console.log(replaceAll(str2,'bcd'));//a***efga***
	function replaceAll(str,rstr){
		/*
			循环 while	条件	存在rstr

			存在
			替换	replace
			更新
			返回 	return
		 */
		let star='*'.repeat(rstr.length);//直接用repeat函数实现即可，等同于下面的for循环
/*		for(let i=0;i<rstr.length;i++){
			star+='*';
		}//星号长度*/
		while(str.includes(rstr)){
			str=str.replace(rstr,star);		
		}
		return str;

	}
```

###### 重复(repeat)

repeat(num);

将一个字符串重复若干次

###### 匹配(match)

```js
	let str3='abcdefg';
	console.log(str3.match('cd'));//匹配成功，返回数组（0，index，input）常结合正则使用
	console.log(str3.match('af'));//匹配失败返回null
```

###### search

里面必须放正则

###### 去空格(trim,...)

对原字符串没影响

```js
let str4='  asd  ';

console.log(str4.trim());
console.log(str4.trimLeft());
console.log(str4.trimRight());
```

###### 转换(split,...)

split(按什么分隔，几个分隔长度)

将字符串转化为数组

```js
let str5='a-sd-sda-fa-so';
var arr1=str5.split('-');//按'-'拆开
var arr2=str5.split('-',2);//按'-'拆开，一共分隔2个，即使能分割5个，但还是只给出2个
var arr3=str5.split('-',8);//按'-'拆开，一共分隔8个，即使能分割5个，但不会多补
console.log(arr1);// ["a", "sd", "sda", "fa", "so"]
console.log(arr2);//["a", "sd"]
console.log(arr3);//["a", "sd", "sda", "fa", "so"]
```

toUpperCase()

```js
let str6='asafvva';
console.log(str6.toUpperCase());
```

toLowerCase()

```js
let str7='CSFAA';
console.log(str7.toLowerCase());
```

fontcolor()

fontsize()

big()

small()

sup

sub

#### 数组Array

##### 概念

##### 声明

```js
	let arr=[1,2,3,4];//直接创建

	let arr1=new Array('x','y','z');//构造函数的创建方式
	let arr2=new Array(5);//当里面只有一个参数并且还是数字，那么它不是只有一个元素的数组[5]，而是长度为5的数组[undefined*5]

	let arr3=new Array.of(5);//[5] 使用构造函数（而不是对象！）上面的of方法，可以解决上述问题
	let arr4=new Array.of(1,2,3,4);//[1,2,3,4]这样写也是可以的
```

##### 属性

length

获取或者设置数组长度

```js
let arr=[1,2,3,4];
console.log(arr.length);//4
arr.length=0;//用作删除数组
console.log(arr);//[]
```

constructor

返回数组的构造函数

```js
console.log(arr.constructor);//ƒ Array() { [native code] }
```

##### 方法

###### 添加和删除push();unshift();pop();shift();splice();

push()

在数组末尾添加一个或者多个数组元素，返回新数组的长度

```js
	let arr=[1,2,3,4];
	console.log(arr.push(7,8,9));//7，返回值是新数组的长度
	console.log(arr);//[1, 2, 3, 4, 7, 8, 9]，依次将元素插到数组最后
```

unshift()

在数组前面添加一个或者多个元素，返回新数组的长度

```js
	let arr=[1,2,3,4];
	console.log(arr.unshift(7,8,9));//7，返回值是新数组的长度
	console.log(arr);//[7, 8, 9, 1, 2, 3, 4]，将元素从头按顺序插入
```

pop()

只能从数组的最后删除一个元素，返回值是删掉的元素，不接受参数，直接用

```js
	let arr=[1,2,3,4];
	console.log(arr.pop());//4，返回值删除的元素
	console.log(arr);//[1, 2, 3]，将数组最后的元素删除
```

shift()

只能从数组的开头删除一个元素，返回值是删掉的元素，不接受参数，直接用

```js
	let arr=[1,2,3,4];
	console.log(arr.shift());//1，返回值是删除的元素
	console.log(arr);//[2,3,4]，将数组开头的元素删除
```

splice(删除位置,删除个数,添加的元素们,...)

​	删除	arr.splice(pos,num);

``` js
	let arr=[1,2,3,4];
	console.log(arr.splice(2,2));//[3,4]删除的位置（不包含），删除几个，返回值为删除的元素组成的数组
	console.log(arr);//[1,2]
```

​	添加	arr.splice(pos,0,eles);

```js
	let arr=[1,2,3,4];
	console.log(arr.splice(2,0,'a','b'))//删除的位置（不包含），删除0个，要添加的元素们,返回值是空数组（因为没删）
	console.log(arr);// [1, 2, "a", "b", 3, 4]
```

​	添加和删除	arr.splice(pos,num,eles);

```js
	let arr=[1,2,3,4];
	console.log(arr.splice(2,1,'a','b'))//[3]删除的位置（不包含），删除1个，要添加的元素们
	console.log(arr);// [1, 2, "a", "b", 4]
```

###### 合并concat()

concat()

合并数组，数组里面合并元素，返回合并后的新数组，对原来数组没影响

```js
	let arr=[1,2,3,4,5,6];
	let arr1=['a','b','c','d'];
	let arr2=['x','y','z'];
	let newarr=arr.concat(arr1,arr2);
	console.log(newarr);//[1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "x", "y", "z"]
```

> 例子：使用不同方法实现数组连接

```js
		let arr=[1,2,3,4,5];
		let arr1=['a','b','c','d'];
		arr=arr.concat(arr1);//方法一
		arr.push(...arr1);//方法二
		Array.prototype.push.call(arr,...arr1);//方法三
		Array.prototype.push.apply(arr,arr1);//方法四
```

###### 转换join()reverse();sort();

> 字符串->数组arr.split();
>
> 数组->字符串arr.join();

join(连接符)

不写默认用`，`链接

```js
	let arr=[1,2,3,4,5,6];
	let str=arr.join();
	console.log(str);//1,2,3,4,5,6	没有传值就默认用 ， 来连接
	let str1=arr.join('-');
	console.log(str1);//1-2-3-4-5-6	用传入的符号连接
```

reverse();反转

```js
	let arr=[1,2,3,4,5,6];
	let newarr=arr.reverse();
	console.log(newarr);//[6, 5, 4, 3, 2, 1]
```

sort();排序默认按照AscLL码排列

```js
let arr=[12,53,2,4,6,7,43,2,132];

console.log(arr.sort());//[12, 132, 2, 2, 4, 43, 53, 6, 7],默认按ascLL码排列

console.log(arr.sort(function(a,b){//a,b代表任意两个数
	return a-b<0//a在b前面，降序排列
}));//[132, 53, 43, 12, 7, 6, 4, 2, 2]

console.log(arr.sort(function(a,b){//a,b代表任意两个数
	return a-b>0//a在b后面，升序排列
}));// [2, 2, 4, 6, 7, 12, 43, 53, 132]
```

###### 遍历forEach()

没有返回值，就是用来遍历、循环的

```js
let arr=[1,2,3,4,5,6];
let sum=0;
/*arr.forEach(function(value,index,obj){//value数组元素,index当前颜色下标,obj当前遍历数组
	sum+=value;
})//没有返回值，只是用来遍历、循环的*/
arr.forEach((value,index,obj)=>sum+=value);//箭头函数写法
console.log(sum);//21
```

###### 筛选filter()

```js
let arr=[1,2,3,4,5,6];
let newarr=arr.filter(function(value,index,obj) {//value数组元素,index当前颜色下标,obj当前遍历数组
	return value%2==0;//条件
})
console.log(newarr);//[2, 4, 6]
```

###### 映射map()

```js
let arr=[1,2,3,4,5,6];
// let map=arr.map(function(value,index,obj) {
// 	return value+index;
// })
let map=arr.map((value,index,obj)=>value+index);
console.log(map);//[1, 3, 5, 7, 9, 11]这个箭头函数相当于上面的
```

> 例子：数组去重

```js
let arr=[1,2,3,4,5,1,2,3];
console.log(delRepeat(arr));//[4,5,1,2,3]
console.log(delRepeat1(arr));//[1,2,3,4,5]

function delRepeat(arr){
	let newarr=[];
	for(let i=0;i<arr.length;i++){
		let flag=true;//要活用标记，每一个元素都要标记，所以写在里面
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]==arr[j]){
				flag=false;
				break;//终止了内层循环
			}
		}
		if(flag==true){
			newarr.push(arr[i]);
		}			
	}	
	return newarr;
}//方法一

function delRepeat1(arr){
	let newarr=[];
	for(let i=0;i<arr.length;i++){
		if(!newarr.includes(arr[i])){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}//方法二
```

> 数组去重，并且添加到数组的公共方法中

```js
Array.prototype.delReapeatF=function(){
	let newarr=[];
	for(let i=0;i<this.length;i++){
		if(!newarr.includes(this[i])){
			newarr.push(this[i]);
		}
	}
	return newarr;
}//保留前面
Array.prototype.delReapeatB=function(){
	let newarr=[];
	for(let i=0;i<this.length;i++){
		let flag=true;//要活用标记，每一个元素都要标记，所以写在里面
		for(let j=i+1;j<this.length;j++){
			if(this[i]==this[j]){
				flag=false;
				break;//终止了内层循环
			}
		}
		if(flag==true){
			newarr.push(this[i]);
		}			
	}	
	return newarr;
}//保留后面

let arr1=[1,2,3,4,5,1,2,3];
console.log(arr1.delReapeatF());//[1,2,3,4,5]
console.log(arr1.delReapeatB());//[4,5,1,2,3]
```

#### 数学Math

不用任何声明，直接用就行

##### Math 对象属性

| 属性                                       | 描述                           |
| ---------------------------------------- | ---------------------------- |
| [E](http://www.w3school.com.cn/jsref/jsref_e.asp) | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](http://www.w3school.com.cn/jsref/jsref_ln2.asp) | 返回 2 的自然对数（约等于0.693）。        |
| [LN10](http://www.w3school.com.cn/jsref/jsref_ln10.asp) | 返回 10 的自然对数（约等于2.302）。       |
| [LOG2E](http://www.w3school.com.cn/jsref/jsref_log2e.asp) | 返回以 2 为底的 e 的对数（约等于 1.414）。  |
| [LOG10E](http://www.w3school.com.cn/jsref/jsref_log10e.asp) | 返回以 10 为底的 e 的对数（约等于0.434）。  |
| [PI](http://www.w3school.com.cn/jsref/jsref_pi.asp) | 返回圆周率（约等于3.14159）。           |
| [SQRT1_2](http://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。   |
| [SQRT2](http://www.w3school.com.cn/jsref/jsref_sqrt2.asp) | 返回 2 的平方根（约等于 1.414）。        |

##### Math 对象方法

| 方法                                       | 描述                                       |
| ---------------------------------------- | ---------------------------------------- |
| [abs(x)](http://www.w3school.com.cn/jsref/jsref_abs.asp) | 返回数的绝对值。                                 |
| [acos(x)](http://www.w3school.com.cn/jsref/jsref_acos.asp) | 返回数的反余弦值。                                |
| [asin(x)](http://www.w3school.com.cn/jsref/jsref_asin.asp) | 返回数的反正弦值。                                |
| [atan(x)](http://www.w3school.com.cn/jsref/jsref_atan.asp) | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](http://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](http://www.w3school.com.cn/jsref/jsref_ceil.asp) | 对数进行上舍入。向上取整                             |
| [cos(x)](http://www.w3school.com.cn/jsref/jsref_cos.asp) | 返回数的余弦。                                  |
| [exp(x)](http://www.w3school.com.cn/jsref/jsref_exp.asp) | 返回 e 的指数。                                |
| [floor(x)](http://www.w3school.com.cn/jsref/jsref_floor.asp) | 对数进行下舍入。向下取整                             |
| [log(x)](http://www.w3school.com.cn/jsref/jsref_log.asp) | 返回数的自然对数（底为e）。                           |
| [max(x,y)](http://www.w3school.com.cn/jsref/jsref_max.asp) | 返回 x 和 y 中的最高值。                          |
| [min(x,y)](http://www.w3school.com.cn/jsref/jsref_min.asp) | 返回 x 和 y 中的最低值。                          |
| [pow(x,y)](http://www.w3school.com.cn/jsref/jsref_pow.asp) | 返回 x 的 y 次幂。                             |
| [random()](http://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。取不到0和1。                  |
| [round(x)](http://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                           |
| [sin(x)](http://www.w3school.com.cn/jsref/jsref_sin.asp) | 返回数的正弦。                                  |
| [sqrt(x)](http://www.w3school.com.cn/jsref/jsref_sqrt.asp) | 返回数的平方根。                                 |
| [tan(x)](http://www.w3school.com.cn/jsref/jsref_tan.asp) | 返回角的正切。                                  |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                               |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                          |

> 例子：随机数实现鼠标移入变换背景色

```html
<html lang="en">
<style>
	#box{width: 200px;height: 200px;background: red;}
</style>
<body>
	<div id='box'></div>	
</body>
</html>
<script>
	function color(){
		let str='rgb(';
		for(let i=0;i<3;i++){
			let num=Math.round(Math.random()*255);
			str+=num+',';
		}
		str=str.slice(0,-1);
		str=str+')';
		return str;
	}
	let box=document.getElementById('box');
	box.onmouseover=function(){
		box.style.background=color();
	}
</script>
```

> 例子：数组中随机取出三个不重复的元素

```js
	// 数组中随机取出三个不重复的元素	
	let arr=['a','b','c','d','e','f','g'];
	function suiji(arr,num){
		let newarr=[];
		let i=0;
		while(i<num){
			let flag=true;//不重复
			let num=Math.floor(Math.random()*arr.length);
			if(newarr.includes(arr[num])){
				flag=false;//重复
			}
			if(flag){
				newarr.push(arr[num]);
				i++;
			}
		}		
		return newarr;
	}//方法一
	function suiji1(arr,num){
		let newarr=[];
		while(newarr.length<num){
			let num=Math.floor(Math.random()*arr.length);
			if(!newarr.includes(arr[num])){
				newarr.push(arr[num]);
			}
		}		
		return newarr;
	}//方法二
		function suiji2(arr,num){
		let newarr=[];
		for(let i=0;i<num;i++){
			let index=Math.floor(Math.random()*arr.length);
			while(newarr.includes(arr[index])){
				index=Math.floor(Math.random()*arr.length);
			}
			newarr.push(arr[index]);
		}		
		return newarr;
	}//方法三
	console.log(suiji(arr,5));
	console.log(suiji1(arr,5));
	console.log(suiji2(arr,5));
```

## BOM(浏览器对象模型)

window、地址栏、screen、frames、历史、navigator

### window

查看window下的所有方法和属性

```js
console.log(window);
```

获取浏览器距屏幕边的位置

```js
	console.log(window.screenLeft);
	console.log(window.screenX);//浏览器距离屏幕的左边距
	console.log(window.screenTop);
	console.log(window.screenY);//浏览器距离屏幕的上边距
```

获取浏览器的宽高

```js
	console.log(window.innerHeight);
	console.log(window.innerWidth);//获取浏览器的视口宽高
	console.log(window.outerWidth);
	console.log(window.outerHeight);//整个浏览器宽高
	console.log(document.documentElement.clientWidth);//兼容常用
	console.log(document.documentElement.clientHeight);
```

改变浏览器大小和位置

```js
	moveTo(100,100);//如果不写window.会默认指向到window，设置浏览器的位置(绝对位置)
	moveBy(100,100);//如果不写window.会默认指向到window，设置浏览器的位置（相对位置）
	resizeTo(100,100);//设置浏览器大小(绝对)
	resizeBy(100,100);//设置浏览器大小(相对)
```

时间间隔函数

```js
	//window.setInterval(回调函数，时间周期毫秒);按照指定周期不停的执行某一函数,时间周期最小为4毫秒，不会停
	window.setInterval(function(){
		document.write('hello!');
	},500);
	function fn(){
		document.write('hello!');
	}
	window.setInterval(fn,1000);
	//这样写跟上面一样
	window.setInterval(()=>{document.write('hello!')},1000);
	//箭头函数写法
```

清除时间间隔函数

```js
	// window.clearInterval();清除时间函数，一般都是声明一下时间函数，再把时间函数的名字写进来就停了
	let name=window.setInterval(()=>{document.write('hello!')},1000);
	window.clearInterval(name);
```

时间延迟函数及清除

```js
	//setTimeout(回调函数，延迟时间毫秒);window.省略了。在延迟时间之后执行一次
	let t=setTimeout(()=>{alert('haha',1000)});//
	clearTimeout(t);//清除setTimeout();
```

> 例子：用setTimeout模拟setInterval

```js
	var fn=function(){
		document.write('hello!');
		setTimeout(fn,1000);
	}//用setTimeout模拟setInterval
	fn();
```

窗口的打开

> open(打开的地址,新窗口名字，新窗口的修饰,布尔值);打开文件

```js
	open('yanshi.html','newBOM','width:200,height:300,top:200');
```

窗口的关闭

> 关闭窗口，要是直接写，窗口打开就关了
>
> 不同浏览器不同，有的只能是open()打开的才能关，直接自己开的就关不了

```js
	close();
```

frames

```js
	window.frames//window.frames[index]返回所有窗口，加下标可以指定某个
	window.parent//子窗口的父窗口
	window.top//子窗口的顶层窗口
	window.self//本身，等于window即为window==self
	// 如果是window的对象或者方法，前面的window可以省略
```

弹框

```js
	prompt('提示信息', 默认值);弹出式输入框
	alert(弹出内容);弹出内容
	confirm('提示信息')弹出式带确定取消的确认
	//上面这几个样式都改不了，人家的网站都是自己写的
```

### history

> 是location对象，里面存的地址url（uniform resource locator统一资源定位符）

```js
	window.history.length;//历史记录的长度
	window.history.forward();//前进一页
	window.history.back();//后退一页
	window.history.go(n);//1前进、-1后退、0刷新
```

> 例子：通过按钮实现上一页下一页刷新
>
> 注意：以下代码再写另一个文件互相跳转几次才会产生历史记录，不然没历史不起作用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>history</title>
	<style>
		button{width: 80px;height: 30px;background: #244567;border: none;border-radius: 4px;outline: none;color: #fff;}
	</style>
</head>
<body>
	<h1><a href="history1.html">这是history第一页！</a></h1>
	<button id='forward'>前进</button>
	<button id="back">后退</button>
	<button id="refresh">刷新</button>
</body>
</html>
<script>	
	let forward=document.getElementById('forward');
	forward.onclick=function(){
		history.forward();
		// history.go(1);//相当于上一句
	}
	let back=document.getElementById('back');
	back.onclick=function(){
		history.back();
		// history.go(-1);//相当于上一句
	}
	let refresh=document.getElementById('refresh');
	refresh.onclick=function(){
		history.go(0);//
	}
</script>
```

### location

```js
	location.href;// 属性返回当前页面的 URL。
	location.protocol;//返回所使用的 web 协议（http:// 或 https://）
	location.host;//得到 URL 中的主机名称和端口号
	location.hostname;//返回 web 主机的域名
	location.port;//返回 web 主机的端口 （80 或 443）
	location.pathname;// 返回当前页面的路径和文件名
	location.search;//搜索的部分	?属性值=值&属性值=值&属性值=值&属性值=值
	location.hash;//锚点
	location.assign();//location.assign('地址');页面打开后再加载新的页面，会留下历史记录
	location.reload();//location.reload(boolean);刷新。true:真刷新，重新请求资源；false:利用本地缓存刷新
	location.replace();//location.replace('地址')替换，页面打开后用新的页面替换掉，不会留下历史记录
```

## DOM(文档对象模型)

> document核心对象
>

### document属性

```js
	document.title = '我可以修改标题';//设置或者获取文档的标题
	console.log(document.URL);//只能获取不可设置
	document.bgColor = '#ff6700';//设置背景色
	document.fgColor = '#0085d0';//设置前景色（字体颜色）
	document.anchors[];//anchors 集合可返回对文档中所有 Anchor 对象的引用。
	document.images[];//images 集合可返回对文档中所有 Image 对象的引用。
	document.forms[];//forms 集合可返回对文档中所有 Form 对象的引用。
	document.links[];//links 集合可返回对文档中所有 Area 和 Link 对象的引用。
```

### 节点

#### 节点属性

> 以下如果没有对应的元素，那么均返回null

```js
		obj.childNodes;//返回所有节点（包括空格会当成文本节点）
		obj.children;//只返回元素节点

		child[1].innerHTML='这是div的第一个子元素';//用下标访问某节点

		obj.firstChild//与childNodes对应，获取第一个子节点
		obj.lastChild//与childNodes对应，获取最后一个子节点

		obj.firstElementChild//与children对应，获取第一个元素节点
		obj.lastElementChild;//与children对应，获取最后一个元素节点

		obj.parentNode//获取某一元素的父元素

		obj.nextSibling//与first相邻的下一个兄弟节点
		objfirst.nextElementSibling//与first相邻的下一个兄弟元素节点

		obj.previousSibling//与first相邻的上一个兄弟节点
		obj.previousElementSibling//与first相邻的上一个兄弟元素节点
```

#### 特征相关属性

##### nodeName、nodeType和nodeValue

`nodeName`属性返回节点的名称，`nodeType`属性返回节点类型的常数值。`Node.nodeValue`属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。

> 由于只有Text节点、Comment节点、XML文档的CDATA节点有文本值，因此只有这三类节点的`nodeValue`可以返回结果，其他类型的节点一律返回`null`。同样的，也只有这三类节点可以设置`nodeValue`属性的值。对于那些返回`null`的节点，设置`nodeValue`属性是无效的。

具体的返回值见下表：

| 类型                     | nodeName             | nodeType | nodeValue |
| ---------------------- | -------------------- | -------- | --------- |
| ELEMENT_NODE元素节点       | 大写的HTML元素名           | 1        | null      |
| ATTRIBUTE_NODE         | 等同于Attr.name         | 2        |           |
| TEXT_NODE文本节点          | #text                | 3        | 文本内容      |
| COMMENT_NODE注释节点       | #comment             | 8        | 注释内容      |
| DOCUMENT_NODE文档节点      | #document            | 9        | null      |
| DOCUMENT_FRAGMENT_NODE | #document-fragment   | 11       |           |
| DOCUMENT_TYPE_NODE     | 等同于DocumentType.name | 10       |           |

#### 节点查找方法

##### getElementById('idname');

> 获取拥有指定id的第一个元素
>
> Tip：id可以重复，但JS只能获取第一个，所以原则上只写一个

```js
	let box = document.getElementById('box');//通过ID获取DOM元素,获取回来也属于一个对象
	box.style.width = '500px';//记住要有单位，加引号
	box.style.height = '200px';
```

##### getElementsByTagName('tagname');

> 通过标签名获取指定标签名的元素集合，通过下标方式操作元素
>
> 就算页面中只有一个元素，也要加上下标不然会报错

```js
	let divs = document.getElementsByTagName('div');//通过标签名获取指定标签名的元素集合，是一个html集合，属于对象
	console.log(divs);
	console.log(divs[0]);
	divs[0].style.background = '#434235';//需要通过下标操作元素	
	
	console.log(divs[9]);//下标越界，值为undefined
	divs[9].style.background = 'pink';//下标越界再使用的话会报错

	for(let i = 0;i<divs.length;i++){
		divs[i].style.background='#645221';
	}//给所有元素设置样式时需要遍历，注意下标不要越界
```

##### getElementsByClassName('classname');

> 通过类名获取指定类名的元素集合，通过下标方式操作元素
>
> 就算页面中只有一个元素，也要加上下标不然会报错

```js
	let box = document.getElementsByClassName('box');//通过类名获取指定类名的元素集合，是一个html集合，属于对象
	box[2].style.background = '#932294';
```

##### querySelector('selectorname')

> `document.querySelector`方法接受一个CSS选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回`null`。

```
	document.querySelector('div');//获取第一个出现的div
	document.querySelector('div:first-child');//获取以第一个子元素形式出现的div
```

##### querySelectorAll('selectorname')

> `document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点，使用时要加下标。
>
> `querySelectorAll`方法的参数是字符串`*`，则会返回文档中的所有HTML元素节点。
>
> `querySelectorAll`的返回结果不是动态集合，不会实时反映元素节点的变化。

> querySelectorAll指向的是NodeList，循环可以用forEach()遍历
> getElementsByTagName指向的是HTML集合，只能用for循环遍历

```
elementList = document.querySelectorAll('.myclass');
var matches = document.querySelectorAll('div.note, div.alert');//返回class属性是note或alert的div元素。
```

异同点：

- 这两个方法的参数，可以是逗号分隔的多个CSS选择器，返回匹配其中一个选择器的元素节点。


- 这两个方法都支持复杂的CSS选择器。

```js
// 选中data-foo-bar属性等于someval的元素
document.querySelectorAll('[data-foo-bar="someval"]');

// 选中myForm表单中所有不通过验证的元素
document.querySelectorAll('#myForm :invalid');

// 选中div元素，那些class含ignore的除外
document.querySelectorAll('DIV:not(.ignore)');

// 同时选中div，a，script三类元素
document.querySelectorAll('DIV, A, SCRIPT');
```

- 但是，它们不支持CSS伪元素的选择器（比如`:first-line`和`:first-letter`）和伪类的选择器（比如`:link`和`:visited`），即无法选中伪元素和伪类。


- 这两个方法除了定义在`document`对象上，还定义在元素节点上，即在元素节点上也可以调用。

#### 元素节点的操作

##### 创建元素节点

###### createElement()

> `document.createElement`方法用来生成网页元素节点。
>
> `createElement`方法的参数为元素的标签名，即元素节点的`tagName`属性，对于 HTML 网页大小写不敏感。如果参数里面包含尖括号（即`<`和`>`）会报错。

```
var newDiv = document.createElement('div');//动态添加元素，是一个document方法
```

##### 插入节点

###### appendChild()

> parent.appendChild(son) 方法向节点添加最后一个子节点。

```js
let box=document.querySelector('.box');//获取页面中已有的元素,父元素
let divs=document.createElement('div');//创建一个元素
box.appendChild(divs);//将创建的元素作为了父元素的最后一个子节点
```

###### insertBefore()

> parent.insertBefore(element.position) 方法在您指定的已有子节点之前插入新的子节点。

```js
let box=document.querySelector('.box');//获取页面中已有的元素,父元素
let h1=document.querySelector('h1');//插入的位置，是父元素的子元素
let span=document.createElement('span');//新建的要插入的元素
span.style.cssText=`
	display:block;
	width:150px;
	height:20px;
	background:yellow;
	margin:10px;
`//元素的样式
box.insertBefore(span,h1);//在h1前面插入span,这两个均为box的子元素
```

##### 删除节点

###### removeChild

> parent.removeChild(oldChild)

```js
son.removeChild(h1);//只是在页面上删除，但是内存里还在
h1=null;//写上这个才能从内存中删除
```

##### 替换节点

###### replaceChild

> parent.replaceChild(newChild, oldChild)

```js
box.replaceChild(divs,son);//divs把span替换掉*/
```

##### 克隆节点

###### cloneNode

> element.cloneNode(deep)

```js
son.cloneNode()//只能复制节点，内容不能复制，子元素不能复制
son.cloneNode(true)//传true的话可以克隆内容和子元素，默认false
```

### 获取元素

#### 获取所有元素

```js
	document.all//获取页面中所有元素
	document.getElementByTagName('*');//获取页面中所有元素
```

#### 获取指定范围元素

> 先到目标元素的父元素，再在其中获取目标元素

```js
	let btn=document.getElementsByClassName('btn');//先获取到目标元素的父元素
	let lis=btn[0].getElementsByTagName('li');//再在其下获取目标，找到目标元素
```

#### 获取元素内容

```js
	let divs=document.getElementsByTagName('div');
	divs[0].innerText='我是innerText修改后的';//获取、修改文本内容、W3C标准的
	divs[0].textContent='我是textContent修改后的';//获取、修改文本内容、兼容IE
	divs[0].innerHTML='<h2>我是innerHTML+h2修改后的<h2>';//获取或设置元素内容，识别标签对
```

#### 获取元素尺寸

```js
let box = document.getElementsByClassName('box')[0];
console.log(box.offsetWidth)
console.log(box.offsetHeight)
//获取元素实际尺寸（不含单位）,包含width\height\padding\border

console.log(box.offsetLeft)
console.log(box.offsetTop)
//获取当前元素实际相对于具有定位属性的父元素的位置（不含单位）
//CSS动画不会影响，但直接操纵宽高会影响
//影响元素：有父元素的padding、子元素的margin\left\right\top\bottom
```

> 例子：小广告

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.box{width: 200px;height: 200px;background: red;position: absolute;left: 0;top: 0;}
	</style>
</head>
<body>
	<div class="box"></div>
	<script>
		window.onload=function(){
			let box=document.getElementsByClassName('box')[0];
			let speedY=10;
			let speedX=10;
			let maxY=window.innerHeight-box.offsetHeight;
			let maxX=window.innerWidth-box.offsetWidth;
			setInterval(function(){
				let tops=box.offsetTop+speedY;
				let lefts=box.offsetLeft+speedX;
				if(tops>=maxY){
					tops=maxY;
					speedY*=-1;
				}
				if(tops<=0){
					tops=0
					speedY*=-1;
				}
				if(lefts>=maxX){
					lefts=maxX;
					speedX*=-1;
				}
				if(lefts<=0){
					lefts=0
					speedX*=-1;
				}
				box.style.top=`${tops}px`;
				box.style.left=`${lefts}px`;		
			},60)
		}
	</script>
</body>
</html>
```

#### 获取样式

##### 获取行内样式

obj.style.attr（只能获取到行内样式）

```js
console.log(box.style.width);//这种写法只能获取到行内样式

box.style.background='yellow';// box[1].style.borderRadius='50%';//属性名中有'-'的，大写或者下面的写法
box.style['border-radius']='50%';
```

##### 获取样式表样式

getComputedStyle(对象名,null);只能获取，不能设置

```js
	getComputedStyle(divs[0],null)//获取样式的对象，默认值null，可以获取divs[0]的所有属性和方法，只可获取，不能设置
	console.log(getComputedStyle(divs[0],null).width);//通过所有的属性和方法，再找到需要的属性
```

> 例子：实现点击按钮菜单滑动

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		button{width: 100px;height: 50px;background: blue;border-radius: 8px;margin: 20px;border: none;outline: none;}
		#slide{width: 300px;height: 500px;background: pink;transition: .5s;}
	</style>
</head>
<body>
	<button>slideDown</button>
	<button>slideUp</button>
	<button>slideToggle</button>
	<div id="slide"></div>
</body>
</html>
<script>
	let btns = document.getElementsByTagName('button');
	let slide = document.getElementById('slide');

	btns[0].onclick=function(){
		slide.style.height = '500px';
	}
	btns[1].onclick=function(){
		slide.style.height = '0';
	}
	let flag=true;
	btns[2].onclick=function(){
		if(flag){
			slide.style.height=0;
			flag=false;
		}else{
			slide.style.height='500px';
			flag=true;
		}
	}
</script>
```

> 通过改变属性实现效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div{width: 300px;height: 300px;}
		#circle{border-radius: 50%;}
		.red{background: red;}
		.green{background: green;}
	</style>
</head>
<body>
	<div id="" class="red"></div>
</body>
</html>
<script>
	let box = document.getElementsByTagName('div');
	box[0].id='circle';
	box[0].onclick=function(){
		box[0].className='green';
	}
</script>
```

>  盒子缩放

```js
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.box{
			width: 300px;
			height: 300px;
			background: red;
			margin: 20px auto;
		}
	</style>
</head>
<body>
	<div class="box"></div>
</body>
</html>
<script>
	let box = document.getElementsByClassName('box');
	let speed=10;
	let t= setInterval(fn,60);
	function fn(){
		let w=parseInt(getComputedStyle(box[0],null).width);
		if(w>=500||w<300){
			// clearInterval(t);
			speed=-speed;
		}
		box[0].style.width=`${w+speed}px`
	}
</script>
```

### 修改元素

#### 修改属性

> 直接通过对象名.属性名进行修改		obj.attr

```js
	let box=document.getElementsByTagName('div');

	box[0].id='one';//改变id名
	console.log(box[0].className);//获取类名
	box[0].className='two';//修改类名，注意此处不能直接写class，而要写className

	let img=document.getElementsByTagName('img');
	img[0].src='lujing.png';//设置图片路径
	img[0].title='lujing';//设置图片标题
```

#### 修改样式

##### 通过修改className

> 通过类名或id名实现批量修改元素样式	className	id

```js
	let btn=document.getElementsByClassName('btn');
	let lis=btn[0].getElementsByTagName('li');
	for(let i=0;i<lis.length;i++){
		lis[i].className='btn-now';
	}//通过添加类名批量改变某元素的样式
```

##### obj.style.attr

> 直接用对象名.style.属性名=值进行修改	obj.style.attr=value
>
> 这种方法添加的是行内样式

```js
box.style.background='#645221';
```

##### obj.style.cssText

> 通过cssText给样式，
> 注意：会重写行内样式，即擦除之前写的行内样式(obj.style.attr)，重新写新的行内样式

```js
			p.style.cssText=`
				width:150px;
				height:200px;
				background:red;
				margin:10px;
			`
			//通过cssText给样式，
			//注意：会重写行内样式，即擦除之前写的行内样式，重新写新的行内样式
```



### 事件驱动

用户的一些操作，浏览器行为，反馈一些实时的响应

#### 事件源

发生在谁的身上

#### 事件

如何发生的

#### 事件处理函数

事件发生时要干什么

#### 事件类型

##### 鼠标

click

a标签的跳转与click冲突的话写

```html
<a href='javascript:void(0)'></a>
```

dblclick

mouseover/mouseenter

mouseout/mouseleave

mousedown

mouseup

mousemove

##### 键盘

keydown

keyup

keypress

##### 表单

focus获得焦点

blur失去焦点

change获得焦点并值改变

input

submit提交

reset重置

#####  浏览器

load资源加载完毕后，写上这个之后可以把JS代码写在页面的任意部分，虽然可以引入多个js，但是只能写一个onload，否则后面的onload会覆盖前面的

> 例子
>
> 参见20170918、20170919部分的课堂练习，其中有
>
> 1、导航栏的展开
>
> 2、如何解决var不能用在JS中
>
> 3、banner和指示点的JS关联等
>

### 兼容性问题解决

参见20170919的练习

### banner效果

参见20170918-20170920中的练习以及作业中天猫、小米的效果

### this的指向

参见20170920的“this的指向问题”

### 使用构造函数封装动画

参见20170921的“小广告（对象方式）”



## 事件详解

### 事件绑定方式

#### 一般的绑定方式

##### js脚本

```js
obj.onclick=function(){}
```

##### 行内样式

#### 监听函数

> 可以同时在一个对象上添加多个相同的事件

`box.addEventListener('事件类型', '事件的处理函数', '布尔值（可传可不传，默认false）');`

```js
let box =document.querySelector('.box');
// box.addEventListener('事件类型', '事件的处理函数', '布尔值(可传可不传，默认false)');//添加监听函数
// 监听函数可以同时在一个对象上添加多个相同的事件
box.addEventListener('click', function(){
	this.style.background='lightgreen';
}, false)
	box.addEventListener('click', function(){
	this.style.borderRadius='50%';
}, false)
```

### 删除事件

#### 一般事件

```json
delete obj.onclick;//这种方法不推荐，因为会把这个属性删除了，之后再用就没有了
obj.onclick=null;//推荐使用，这个是把该事件置空，但不会删除属性
```

#### 监听函数

`box.removeEventListener('事件类型', '事件的处理函数', '布尔值（可传可不传，默认false）');`

```js
		//接上代码
box.removeEventListener('click', fn, false);//删除了fn函数
box.removeEventListener('click', function(){
	this.style.borderRadius='50%';
});//无效果，无法删除匿名函数，因为无法获取匿名函数的位置
```

### 事件对象

> 记录当事件触发时，与事件相关的详细信息。
>
> 事件发生时自动创建，只能在事件处理函数内部调用，当事件结束时自动销毁。

#### 获取事件对象

> 在事件处理函数中传一个参数，它即代表事件处理函数
>
> 只在作为事件函数时，这个参数才代表事件对象

```js
			box.addEventListener('mousemove', 
				function(e){
					this.style.background='lightgreen';
					console.log(e);//e就是事件函数
				}, false)
```

#### 属性

相对于浏览器的位置

- clientX
- clientY

相对于页面(文档)的位置

- pageX
- pageY

相对于事件源的位置

- offsetX
- offsetY

相对于屏幕的位置

- screenX
- screenY









