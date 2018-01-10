// 函数
// 介绍
// 函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。
//
// 函数
// 和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。
//
// 通过下面的例子可以迅速回想起这两种JavaScript中的函数：

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function 匿名函数
let myAdd = function (x, y) {
    return x + y;
};
// 在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。
// 至于为什么可以这样做以及其中的利弊超出了本文的范围，但是深刻理解这个机制对学习JavaScript和TypeScript会很有帮助。

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}

// 函数类型
// 为函数定义类型
//
// 让我们为上面那个函数添加类型：

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
//
// 书写完整函数类型

// 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。

let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };
// 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：

let myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
//
// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
//
// 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。

// 剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。
//
// 在TypeScript里，你可以把所有参数收集到一个变量里：
//
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
//
// 这个省略号也会在带有剩余参数的函数类型定义上使用到：
//
// 复制到剪切板
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

//
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
