// Import the Shape classes
const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
  // Arrange
  const triangle = new Triangle();
  
  // Act
  const result = triangle.render();

  // Assert
  const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="" />
        <text x="50%" y="60%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;
  
  expect(result).toBe(expectedOutput);
});

test('Triangle setColor sets shapeColor correctly', () => {
  const triangle = new Triangle();

  triangle.setColor('red');

  expect(triangle.shapeColor).toBe('red');
});

test('Triangle setText sets text correctly', () => {
  const triangle = new Triangle();

  triangle.setText('Hello');

  expect(triangle.text).toBe('Hello');
});

test('Triangle setTextColor sets textColor correctly', () => {
  const triangle = new Triangle();

  triangle.setTextColor('blue');

  expect(triangle.textColor).toBe('blue');
});

test('Triangle render with different text and colors', () => {
  const triangle = new Triangle();
  triangle.setColor('green');
  triangle.setTextColor('yellow');
  triangle.setText('123');

  const result = triangle.render();

  const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="green" />
        <text x="50%" y="60%" fill="yellow" font-size="70" text-anchor="middle" dy=".3em">123</text>`;


  expect(result).toBe(expectedOutput);
});

test('Triangle render with default values', () => {
  const triangle = new Triangle();

  const result = triangle.render();

  const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="" />
        <text x="50%" y="60%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;

  expect(result).toBe(expectedOutput);
});

test('Circle renders correctly', () => {
  // Arrange
  const circle = new Circle();
  
  // Act
  const result = circle.render();

  // Assert
  const expectedOutput = `<circle cx="150" cy="100" r="80" fill="" />
        <text x="50%" y="50%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;
  
  expect(result).toBe(expectedOutput);
});

test('Circle setColor sets shapeColor correctly', () => {
  const circle = new Circle();

  circle.setColor('blue');

  expect(circle.shapeColor).toBe('blue');
});

test('Circle setText sets text correctly', () => {
  const circle = new Circle();

  circle.setText('World');

  expect(circle.text).toBe('World');
});

test('Circle setTextColor sets textColor correctly', () => {
  const circle = new Circle();

  circle.setTextColor('green');

  expect(circle.textColor).toBe('green');
});

test('Circle render with different text and colors', () => {
  const circle = new Circle();
  circle.setColor('red');
  circle.setTextColor('yellow');
  circle.setText('123');

  const result = circle.render();

  const expectedOutput = `<circle cx="150" cy="100" r="80" fill="red" />
        <text x="50%" y="50%" fill="yellow" font-size="70" text-anchor="middle" dy=".3em">123</text>`;

  expect(result).toBe(expectedOutput);
});

test('Circle render with default values', () => {
  const circle = new Circle();

  const result = circle.render();

  const expectedOutput = `<circle cx="150" cy="100" r="80" fill="" />
        <text x="50%" y="50%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;

  expect(result).toBe(expectedOutput);
});


test('Square renders correctly', () => {
  // Arrange
  const square = new Square();
  
  // Act
  const result = square.render();

  // Assert
  const expectedOutput = `<rect x="50" y="0" width="200" height="200" fill="" />
        <text x="50%" y="50%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;
  
  expect(result).toBe(expectedOutput);
});

test('Square setColor sets shapeColor correctly', () => {
  const square = new Square();

  square.setColor('green');

  expect(square.shapeColor).toBe('green');
});

test('Square setText sets text correctly', () => {
  const square = new Square();

  square.setText('Square');

  expect(square.text).toBe('Square');
});

test('Square setTextColor sets textColor correctly', () => {
  const square = new Square();

  square.setTextColor('purple');

  expect(square.textColor).toBe('purple');
});

test('Square render with different text and colors', () => {
  const square = new Square();
  square.setColor('blue');
  square.setTextColor('orange');
  square.setText('ABC');

  const result = square.render();

  const expectedOutput = `<rect x="50" y="0" width="200" height="200" fill="blue" />
        <text x="50%" y="50%" fill="orange" font-size="70" text-anchor="middle" dy=".3em">ABC</text>`;

  expect(result).toBe(expectedOutput);
});

test('Square render with default values', () => {
  const square = new Square();

  const result = square.render();

  const expectedOutput = `<rect x="50" y="0" width="200" height="200" fill="" />
        <text x="50%" y="50%" fill="" font-size="70" text-anchor="middle" dy=".3em"></text>`;

  expect(result).toBe(expectedOutput);
});