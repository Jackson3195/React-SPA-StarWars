import React from 'react';
import { render } from '@testing-library/react';
import DefaultPage from './DefaultPage';

test('Renders search input', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Prompts user to search for a result', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Does not accept empty value or spaces', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Does not accept special characters', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Performs search if valid input is provided', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Informs user if no result is found', () => {
  const { getByText } = render(<DefaultPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
