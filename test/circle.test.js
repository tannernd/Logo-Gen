const Circle = require('../lib/circle.js');

describe('Circle', () => {
  // Test to verify that the Triangle class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Circle class', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Circle(text, textColor, shapeColor);

      expect(shape).toBeInstanceOf(Circle);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Circle(text, textColor, shapeColor);

      expect(shape.text).toBe(text);
    });
  });

// Test to verify that textColor can be assigned.
  describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Circle(text, textColor, shapeColor);

      expect(shape.textColor).toBe(textColor);
    });
  });

 // Test to verify that shapeColor can be assigned.
 describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Circle(text, textColor, shapeColor);

      expect(shape.shapeColor).toBe(shapeColor);
    });
  });

   // Test to verify that render() returns the correct data.
  describe('render() method', () => {
    it('should print svg', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Circle(text, textColor, shapeColor);

      expect(shape.render()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>      
      </svg>`
      );
    });
  });
});