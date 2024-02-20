// classes ES6

// just sugar for creating objects that looks similar to the oop langs.
// class declarations are not hoisted

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}


// static methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(3, 5)); // Output: 8

// inheritance

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}

// getters and setters

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 50
