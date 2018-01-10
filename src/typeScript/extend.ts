class Shape {
    public name: String;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        return "name " + this.name + " age " + this.age;

    }
}

class Shape2 extends Shape {
    //如何重写方法改变方法的返回值
    showInfo() {
        return super.showInfo();
    }
}

var std = new Shape2("哈哈", 30);
alert(std.showInfo());
