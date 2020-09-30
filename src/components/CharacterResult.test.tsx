import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import CharacterResult, { SearchResult } from './CharacterResult';

const fakeSearchResult: SearchResult = {
  name: 'Luke Skywalker',
  gender: 'male',
  birth_year: '48.9BBY',
  height: '74',
  mass: '55',
  hair_color: 'blonde',
};

describe('Character result component functionality', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <CharacterResult result={fakeSearchResult}></CharacterResult>
    );
  });

  test('Renders the information correctly', () => {
    const textValues: string[] = [
      'Luke Skywalker',
      'Male', // Implicity checks format
      '48.9 BBY', // Implicity checks format
      '74',
      '55',
      'Blonde', // Implicity checks format
    ];
    textValues.forEach((value) => {
      const domElement = renderResult.getByText(value);
      expect(domElement).toBeInTheDocument();
    });
  });
});
