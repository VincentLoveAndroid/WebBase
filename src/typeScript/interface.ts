interface Shape {
    name: string;
    width: number;
    height: number;
}

function area(shape: Shape) {
    var area = shape.width * shape.height;
    return "area of " + name + " is" + area;
}

// document.body.innerHTML = area({name: "rectangle", width: 39, height: 49});

// 可选属性
// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，
// 即给函数传入的参数对象中只有部分属性赋值了。下面是应用了“option bags”的例子：

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

interface Point {
    readonly x: number;
    readonly y: number;
}

// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
