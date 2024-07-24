// index.test.js
const inquirer = require('inquirer');
const fs = require('fs');
const mockFs = require('mock-fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Mock the inquirer prompt
jest.mock('inquirer');

describe('SVG Logo Generator', () => {
  beforeEach(() => {
    // Set up the mock file system
    mockFs({
      'logo.svg': '', // Ensure the file exists in the mock
    });
  });

  afterEach(() => {
    // Restore the file system
    mockFs.restore();
  });

  test('should generate a logo.svg file with user inputs', async () => {
    // Mock user input
    inquirer.prompt = jest.fn().mockResolvedValue({
      text: 'SVG',
      textColor: 'white',
      shape: 'Circle',
      shapeColor: 'green',
    });

    // Debugging: Log current directory and path to index.js
    console.log('Current directory:', __dirname);
    console.log('Path to index.js:', path.resolve(__dirname, './index.js'));
    // Import the index.js file to run the script
    await require (path.resolve(__dirname, './index.js')); // Ensure this line is correct

    // Read the generated SVG file
    const svgContent = fs.readFileSync('logo.svg', 'utf8');

    // Check if the file content matches expected SVG structure
    expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
    expect(svgContent).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
  });
});
