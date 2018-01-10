var Shape = /** @class */ (function () {
    function Shape(name, age) {
        this.name = name;
        this.age = age;
    }
    Shape.prototype.showInfo = function () {
        return "name " + this.name + " age " + this.age;
    };
    return Shape;
}());
var stu = new Shape("hah", 40);
alert(stu.showInfo());
alert(stu.age);
