const Square = require('../lib/square.js');

describe('Square', () => {
  // Test to verify that the Triangle class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Square class', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Square(text, textColor, shapeColor);

      expect(shape).toBeInstanceOf(Square);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Square(text, textColor, shapeColor);

      expect(shape.text).toBe(text);
    });
  });

// Test to verify that textColor can be assigned.
  describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Square(text, textColor, shapeColor);

      expect(shape.textColor).toBe(textColor);
    });
  });

 // Test to verify that shapeColor can be assigned.
 describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Square(text, textColor, shapeColor);

      expect(shape.shapeColor).toBe(shapeColor);
    });
  });

   // Test to verify that render() returns the correct data.
  describe('render() method', () => {
    it('should print svg', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Square(text, textColor, shapeColor);

      expect(shape.render()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="20" width="180" height="180" stroke="black" fill="${shapeColor}"/>  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>      
      </svg>`
      );
    });
  });
});