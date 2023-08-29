const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const { join } = require('path');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');


class CLI {
  constructor() {

  }
  run() {
    const questions = [
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Please the text for your logo (max 3 characters)',
            maxLength: 3,
        }, 
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the color for your text (color keyword or hexadecimal number)',
        }, 
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color for your shape (color keyword or hexadecimal number)',
        }, 
    ];    
    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

    return inquirer
      .prompt(questions)
      .then((resp) => {
        let dir = './output';
        let shape;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        switch (resp.shape) {
            case 'Triangle':
                shape = new Triangle(resp.text, resp.textColor, resp.shapeColor);
                break;
            case 'Circle':
                shape = new Circle(resp.text, resp.textColor, resp.shapeColor);
                break;
            case 'Square':
                shape = new Square(resp.text, resp.textColor, resp.shapeColor);
                break;
            
        }
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          shape.render()
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Sorry, there was an error.');
      });
  }
}

module.exports = CLI;
