const helper = require('./src/helpers').default;

test('Format phone number', () => {
  expect(helper.formatPhone('4155448375')).toBe('(415) 544-8375');
  expect(helper.formatPhone(4155448375)).toBe('(415) 544-8375');
  expect(helper.formatPhone(null)).toBe('() -');
  expect(helper.formatPhone('')).toBe('() -');
});

test('Capitalize strings', () => {
  expect(helper.capitalize('neel')).toBe('Neel');
  expect(helper.capitalize('Neel')).toBe('Neel');
  expect(helper.capitalize('')).toBe('');
  expect(helper.capitalize('n')).toBe('N');
});

test('Full name formatting', () => {
  expect(helper.fullName('neel', 'mclarty')).toBe('Neel Mclarty');
  expect(helper.fullName('NEEL', 'MCLARTY')).toBe('NEEL MCLARTY');
  expect(helper.fullName('n', 'm')).toBe('N M');
  expect(helper.fullName('', 'mclarty')).toBe(' Mclarty');
  expect(helper.fullName('neel', '')).toBe('Neel ');
});
