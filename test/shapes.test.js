const Shape = require('../lib/shapes.js');

describe('Shape', () => {
  // Test to verify that the Comment class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Shape class', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Shape(text, textColor, shapeColor);

      expect(shape).toBeInstanceOf(Shape);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Shape(text, textColor, shapeColor);

      expect(shape.text).toBe(text);
    });
  });

// Test to verify that textColor can be assigned.
  describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Shape(text, textColor, shapeColor);

      expect(shape.textColor).toBe(textColor);
    });
  });

 // Test to verify that shapeColor can be assigned.
 describe('Initialize Text Color', () => {
    it('should set textColor properly', () => {
        const text = 'ABC';
        const textColor = 'white';
        const shapeColor = 'green'
        const shape = new Shape(text, textColor, shapeColor);

      expect(shape.shapeColor).toBe(shapeColor);
    });
  });

});