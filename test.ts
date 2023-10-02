const helper = require('./src/helpers').default;

test('Format phone number', () => {
  expect(helper.formatPhone('4155448375')).toBe('(415) 544-8375');
  expect(helper.formatPhone(4155448375)).toBe('(415) 544-8375');
  expect(helper.formatPhone(null)).toBe('() -');
  expect(helper.formatPhone('')).toBe('() -');
});
