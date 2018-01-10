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

var stu = new Shape("hah", 40);
alert(stu.age)






