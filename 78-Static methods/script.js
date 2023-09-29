class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method
    draw() {

    }

    static parse(str) {
      const radius = JSON.parse(str).radius;
      return new Circle(radius);
    }
}

// Circle.parse();
// const circle = new Circle(10);
// console.log(circle);

const circle = Circle.parse('{"radius" : 10}');

// Math.