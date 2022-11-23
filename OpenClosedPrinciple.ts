// Open Closed Principle (OCP)

//BAD WAY

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class AreaCalculator {
  public calculateRegtangleArea(rectangle: Rectangle): number {
    return rectangle.height * rectangle.width;
  }

  public calculateCircleArea(circle: Circle): number {
    return Math.PI * Math.pow(circle.radius, 2);
  }
}

//GOOD WAY

interface Shape {
  calculatorArea(): number;
}

class newRectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculatorArea(): number {
    return this.width * this.height;
  }
}
class newCircle implements Shape {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  public calculatorArea(): number {
      return Math.PI*Math.pow(this.radius,2);
  }
  
}
