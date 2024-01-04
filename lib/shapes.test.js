const { Triangle } = require('./shapes');

test('Triangle render method', () => {
    // Arrange - Set up the conditions for the test
    const triangle = new Triangle();
    triangle.setColor('blue');

    // Act - Perform the action you want to tests
    const renderedSVG = triangle.render();

    // Assert - Check whether the actual result matches the expected result
    expect(renderedSVG).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
})