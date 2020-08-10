/* 类的装饰器语法——————总结 */

//情况一：装饰器函数没有程序员的return

//定义一个装饰器函数demo
function demo(target){
	target.a = 100
	target.b = 2
}

//装饰Test这个类————传统写法
/* class Test {} //定义一个Test类
console.log('装饰前',Test.a);
demo(Test)
console.log('装饰后',Test.a); */

//装饰Test这个类————装饰器语法
/* @demo
class Test {} //定义一个Test类
console.log(Test.a); */

//装饰器语法，经过编译后，是下方的样子
/* class Test {} //定义一个Test类
demo(Test)
console.log(Test.a); */





