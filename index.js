// Inquirer (node package manager) import.
const inquirer = require('inquirer');

// File system module (node package manager) import.
const fs = require('fs');

// Importing classes from ./lib/shapes directory.
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
  // This question asks the user to input up to three characters for the logo text.
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.' // Validation to ensure the input is no more than three characters.
  },

  {
     // This question asks the user to input a color for the text.
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text (keyword or hexadecimal):'
  },
  {
    // This question presents the user with a list of shapes to choose from for the logo.
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    // This question asks the user to input a color for the selected shape.
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape (keyword or hexadecimal):'
  }
];

// Use inquirer to prompt the user with the predefined questions.
inquirer.prompt(questions).then(answers => {

  // Destructure the user's answers for easier access.
  const { text, textColor, shape, shapeColor } = answers;
  let shapeInstance;

  // Determine the shape based on the user's choice and create an instance of the corresponding class.
  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }

    // Set the color of the shape using the user's input.
  shapeInstance.setColor(shapeColor);

  // Construct the SVG content using template literals.
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write the SVG content to a file named 'logo.svg'.
  fs.writeFileSync('logo.svg', svgContent.trim());

  // Output a message to the console indicating that the file has been generated.
  console.log('Generated logo.svg');
});
