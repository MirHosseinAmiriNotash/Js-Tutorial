const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius : ' + _radius.get(this));
    }
}
module.exports = Circle;
//Circle
//module.exports = 2;
//2

// module.exports.Circle = Circle;
// module.exports.Square = Square;
//module.exports = {Circle : Circle , Square : Square}
// module.exports = { Circle: Circle, Square: Square };