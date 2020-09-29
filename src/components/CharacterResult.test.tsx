import React from 'react';
import { render } from '@testing-library/react';
import CharacterResult, { SearchResult } from './CharacterResult';

const fakeSearchResult: SearchResult = {
  name: 'Luke Skywalker',
  gender: 'male',
  birth_year: '48.9BBY',
  height: '74',
  mass: '55',
  hair_color: 'blonde',
};

test('Renders the information correctly', () => {
  const { getByText } = render(<CharacterResult result={fakeSearchResult} />);
  const linkElement = getByText(/learn react/i);
});

test('Displays birth year correctly', () => {
  const { getByText } = render(<CharacterResult result={fakeSearchResult} />);
  const linkElement = getByText(/learn react/i);
});

test('Displays gender correctly', () => {
  const { getByText } = render(<CharacterResult result={fakeSearchResult} />);
  const linkElement = getByText(/learn react/i);
});

test('Displays hair colour year correctly', () => {
  const { getByText } = render(<CharacterResult result={fakeSearchResult} />);
  const linkElement = getByText(/learn react/i);
});
