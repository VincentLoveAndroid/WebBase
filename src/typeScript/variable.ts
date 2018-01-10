// 变量声明
// let和const是JavaScript里相对较新的变量声明方式。 像我们之前提到过的， let在很多方面与var是相似的，但是可以帮助大家避免在JavaScript里常见一些问题。
// const是对let的一个增强，它能阻止对一个变量再次赋值。
//
// 因为TypeScript是JavaScript的超集，所以它本身就支持let和const。 下面我们会详细说明这些新的声明方式以及为什么推荐使用它们来代替 var。
//
// 如果你之前使用JavaScript时没有特别在意，那么这节内容会唤起你的回忆。 如果你已经对 var声明的怪异之处了如指掌，那么你可以轻松地略过这节。

// let 声明
// 现在你已经知道了var存在一些问题，这恰好说明了为什么用let语句来声明变量。 除了名字不同外， let与var的写法一致。
//
// let hello = "Hello!";
// 主要的区别不在语法上，而是语义，我们接下来会深入研究。
//
// 块作用域
//
// 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
//
// 复制到剪切板
// function f(input: boolean) {
//     let a = 100;
//
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//
//     // Error: 'b' doesn't exist here
//     return b;
// }
// 这里我们定义了2个变量a和b。 a的作用域是f函数体内，而b的作用域是if语句块里。
//
// 在catch语句里声明的变量也具有同样的作用域规则。
//
// try {
//     throw "oh no!";
// }
// catch (e) {
//     console.log("Oh well.");
// }
//
// // Error: 'e' doesn't exist here
// console.log(e);
// 拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。 虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于 暂时性死区。 它只是用来说明我们不能在 let语句之前访问它们，幸运的是TypeScript可以告诉我们这些信息。
//
// a++; // illegal to use 'a' before it's declared;
// let a;
// 注意一点，我们仍然可以在一个拥有块作用域变量被声明前获取它。 只是我们不能在变量声明前去调用那个函数。 如果生成代码目标为ES2015，现代的运行时会抛出一个错误；然而，现今TypeScript是不会报错的。
//
// function foo() {
//     // okay to capture 'a'
//     return a;
// }
//
// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();
//
// let a;
// 关于暂时性死区的更多信息，查看这里Mozilla Developer Network.

// const 声明
// const 声明是声明变量的另一种方式。
//
// const numLivesForCat = 9;
// 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
//
// 这很好理解，它们引用的值是不可变的。


