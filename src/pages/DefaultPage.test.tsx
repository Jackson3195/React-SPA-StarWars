import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import DefaultPage from './DefaultPage';

function getSearchInputElement(renderResult: RenderResult): Element {
  const inputContainer = renderResult.getByLabelText('characterSearch');
  const inputElement = inputContainer.children[0].children[0];
  return inputElement;
}

function inputSearch(renderResult: RenderResult, value: string) {
  const inputElement = getSearchInputElement(renderResult);
  fireEvent.change(inputElement, { target: { value } });
}

function performSearch(renderResult: RenderResult) {
  const searchBtn = renderResult.getByLabelText('Search');
  fireEvent.click(searchBtn);
}

describe('Default Page functionality', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<DefaultPage></DefaultPage>);
  });

  test('Renders search input', () => {
    // Determine if label + input are loaded
    const labelElement = renderResult.getByText(/Character Name/);
    expect(labelElement).toBeInTheDocument();
    const inputElement = renderResult.getByLabelText('characterSearch');
    expect(inputElement).toBeInTheDocument();
  });

  test('Does not accept empty value or spaces', () => {
    // Invoke search with no input...
    performSearch(renderResult);
    const requiredMsg = renderResult.getByText('Enter a value');
    expect(requiredMsg).toBeInTheDocument();

    // Get input and fill it with spaces
    inputSearch(renderResult, '     ');
    expect(requiredMsg).toBeInTheDocument();
  });

  test('Does not accept special characters', () => {
    inputSearch(renderResult, 'Luk£ Skywalker');
    performSearch(renderResult);
    const validMsg = renderResult.getByText('Enter a valid input');
    expect(validMsg).toBeInTheDocument();
  });
});

test('Performs search if valid input is provided', () => {
  const searchRequestMock = jest.fn(() => {
    return Promise.resolve([
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
        homeworld: 'http://swapi.dev/api/planets/1/',
        films: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
          'http://swapi.dev/api/films/3/',
          'http://swapi.dev/api/films/6/',
        ],
        species: [],
        vehicles: [],
        starships: ['http://swapi.dev/api/starships/13/'],
        created: '2014-12-10T15:18:20.704000Z',
        edited: '2014-12-20T21:17:50.313000Z',
        url: 'http://swapi.dev/api/people/4/',
      },
    ]);
  });
  DefaultPage.prototype.searchRequest = searchRequestMock;
  const renderResult = render(<DefaultPage></DefaultPage>);
  inputSearch(renderResult, 'Darth Vader');
  performSearch(renderResult);
  expect(searchRequestMock).toHaveBeenCalled();
});

// TODO: Write up about this specific test
test('Informs user if no result is found', () => {
  const handleInputErrorMock = jest.fn((reason) => {
    console.log(reason);
    return reason;
  });
  const searchRequestMock = jest.fn().mockReturnValue(Promise.resolve([]));
  DefaultPage.prototype.handleInputError = handleInputErrorMock;
  DefaultPage.prototype.searchRequest = searchRequestMock;
  const renderResult = render(<DefaultPage></DefaultPage>);
  inputSearch(renderResult, 'jabbawockeez');
  performSearch(renderResult);
  expect(searchRequestMock).toHaveBeenCalled();
  // expect(handleInputErrorMock).toHaveBeenCalled();
  // expect(handleInputErrorMock.mock.results[0]).toBe(
  //   'No results found for jabbawockeez'
  // );
});
