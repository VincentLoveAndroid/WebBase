var baseData = /** @class */ (function () {
    function baseData() {
        //基本类型
        this.isDone = true;
        this.age = 0xff00;
        this.name = "vincent";
        //数组类型
        this.list = [1, 2, 3];
        this.list2 = ["1", "2", "3"];
        this.list3 = [1, 2, 3];
        this.list4 = ["1", "2", "3"];
        //元组 Tuple元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
        this.x = [1, "1"]; //right
        //x: [number, string] = [1, 1];//wrong
    }
    return baseData;
}());
//枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c = Color1.Green;
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
//或者，全部都采用手动赋值：
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
// let c: Color = Color.Green;
var colorName = Color3[2];
alert(colorName);
