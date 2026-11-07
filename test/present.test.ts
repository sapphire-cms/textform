import { expect, test } from 'vitest';
import { form } from './data';
import expected from './example.textform?raw';
import { present } from '../src';

test('collect', () => {
  const asText = present(form);
  expect(asText).toBe(expected);
});
