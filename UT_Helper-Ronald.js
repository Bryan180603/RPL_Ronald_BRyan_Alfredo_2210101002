// UT_Helper-Ronald.js

// Fungsi untuk diuji
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;

// UT_Helper-Ronald.test.js

const multiply = require('./UT_Helper-Ronald');

test('Mengalikan dua angka positif', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('Mengalikan angka positif dengan nol', () => {
  expect(multiply(4, 0)).toBe(0);
});

test('Mengalikan dua angka negatif', () => {
  expect(multiply(-2, -5)).toBe(10);
});
