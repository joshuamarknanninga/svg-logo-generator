// Define the base Shape class.
class Shape {
    constructor() {
      // Initialize the color property.
      this.color = '';
    }
  
    // Method to set the color of the shape.
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    // Method to render the SVG representation of the triangle.
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Define the Triangle class, which extends the Shape class.
  class Circle extends Shape {
    // Method to render the SVG representation of the circle.
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  // Define the square class, which extends the shape class.
  class Square extends Shape {
    // Method to render the SVG representation of the square.
    render() {
      return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
  }
  //Export the triange, circle and square classes for use in other files.
  module.exports = { Triangle, Circle, Square };
  