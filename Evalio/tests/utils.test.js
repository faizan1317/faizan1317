import { formatDate, generateId, validateEmail, calculateScore } from '../src/utils/helpers';

describe('Utility Functions', () => {
  test('formatDate should format date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toMatch(/January 15, 2024/);
  });

  test('generateId should return a string', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  test('validateEmail should validate email correctly', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
  });

  test('calculateScore should calculate percentage correctly', () => {
    expect(calculateScore(8, 10)).toBe(80);
    expect(calculateScore(0, 10)).toBe(0);
    expect(calculateScore(10, 10)).toBe(100);
    expect(calculateScore(5, 0)).toBe(0);
  });
});