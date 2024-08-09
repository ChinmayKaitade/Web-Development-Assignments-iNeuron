/*04. Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin
with a base class Shape that provides default methods for area and perimeter calculation and includes 
subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the 
area and perimeter calculation methods to provide accurate results for their respective shapes.*/

class Shape {
  constructor() {
    this.type = "Shape";
  }

  calculateArea() {
    return "Area calculation not implemented for this shape.";
  }

  calculatePerimeter() {
    return "Perimeter calculation not implemented for this shape.";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "Circle";
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(base, height, side1, side2, side3) {
    super();
    this.type = "Triangle";
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const circle = new Circle(5);
console.log(
  `Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);
// Circle - Area: 78.53981633974483, Perimeter: 31.41592653589793

const rectangle = new Rectangle(4, 6);
console.log(
  `Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);
// Rectangle - Area: 24, Perimeter: 20

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(
  `Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`
);
// Triangle - Area: 24, Perimeter: 22
