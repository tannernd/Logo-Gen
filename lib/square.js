const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="20" width="180" height="180" stroke="black" fill="${this.shapeColor}"/>  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>      
      </svg>`
    }
}

module.exports = Square;