function area(shape) {
    var area = shape.width * shape.height;
    return "area of " + name + " is" + area;
}
document.body.innerHTML = area({ name: "rectangle", width: 39, height: 49 });
