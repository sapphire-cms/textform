import { test, expect } from 'vitest';
import text from './example.textform?raw';
import { collect } from '../src';
import { form, markdown } from './data';

test('collect', () => {
  const inputs = collect(form, text);
  const expected = {
    id: ['_r2d2'],
    tier: ['Quartz Supporter'],
    available: [true],
    category: [' #sponsor'],
    donation: [500],
    forWhom: ['Small Dev Agencies', 'Indie Devs'],
    description: [markdown],
  };

  expect(inputs).toEqual(expected);
});
