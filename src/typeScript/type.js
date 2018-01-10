function area(shape, width, height) {
    var area = width * height;
    return "I am a " + shape + "with an area of " + area;
}
document.body.innerHTML = area("rectangle", 30, 15);
