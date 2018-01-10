function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I am a " + shape + "with an area of" + area;
}

document.body.innerHTML = area("rectangle", 30, 15);

