import React from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CharacterResult, { SearchResult } from '../components/CharacterResult';
import { SwapiAPIResponse } from '../interfaces/swapi';

import './DefaultPage.stylus';

interface DefaultPageState {
  searchInput: string;
  loading: boolean;
  searchResult: SearchResult;
  searchNoResult: boolean;
  searchError: boolean;
  searcHelperText: string | null;
}

class DefaultPage extends React.Component<{}, DefaultPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchInput: '',
      loading: false,
      searchResult: {
        name: '',
        gender: '',
        birth_year: '',
        height: '',
        hair_color: '',
        mass: '',
      },
      searchNoResult: false,
      searchError: false,
      searcHelperText: 'E.g. Luke Skywalker',
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Set state
    this.setState({
      searchInput: e.target.value,
      searchNoResult: false,
      searchError: false,
      searcHelperText: 'E.g. Luke Skywalker',
    });
    // Validate
    this.validateInput(e.target.value);
  }

  validateInput(value: string) {
    // Determine if input is valid
    const validityRegex = new RegExp(/^[a-zA-Z0-9\s-]*$/gm);
    if (value.trim()) {
      if (validityRegex.test(value)) {
        return true;
      } else {
        this.handleInputError('Enter a valid input');
      }
    } else {
      this.handleInputError('Enter a value');
    }
    return false;
  }

  handleInputError(reason: string) {
    this.setState({
      searchError: true,
      searcHelperText: reason,
    });
  }
  // Note: Switched to arrow function because "this" bindings did not allow access to "search"
  handleSearchInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.search();
    }
  };

  handleSnackbarClose = (e: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ searchNoResult: false });
  };

  async search() {
    if (this.validateInput(this.state.searchInput)) {
      // Set loading
      this.setState({ loading: true, searchNoResult: false });
      // Perform query
      const response = await this.searchRequest(this.state.searchInput);
      if (response.length > 0) {
        this.setState({ searchResult: response[0] });
      } else {
        this.handleInputError('No results found for ' + this.state.searchInput);
      }
      this.setState({ loading: false });
    }
  }

  async searchRequest(searchTerm: string) {
    try {
      const response = await fetch(
        'http://swapi.dev/api/people/?search=' + searchTerm
      );
      if (response.status === 200) {
        let body: SwapiAPIResponse = await response.json();
        return body.results;
      } else {
        console.warn('Unhandled response code: ' + response.status);
      }
    } catch (e) {
      console.error('Fetch Error - ' + e);
    }
    return [];
  }

  render() {
    return (
      <div className="page center vh">
        {/* Future-TODO: Figure out Vue:Slots equvilent so card can be reused...*/}
        <div className="card character-search-card">
          {/* Card Loading */}
          {this.state.loading ? (
            <div className="card-loading">
              <CircularProgress></CircularProgress>
            </div>
          ) : null}
          {/* Card Header */}
          <h5 className="card-header">STAR WARS HEROES</h5>
          {/* Card Body */}
          <div className="card-body">
            {/* Future-TODO: Refactor into own component */}
            {/* Search */}
            <div className="card-content hightlight-content padded">
              <div className="input-container">
                <label htmlFor="characterSearch">Character Name</label>
                {/* Input */}
                <TextField
                  aria-label="characterSearch"
                  id="outlined-basic"
                  variant="outlined"
                  error={this.state.searchError}
                  helperText={this.state.searcHelperText}
                  fullWidth
                  onChange={this.handleSearchInputChange}
                  onKeyDown={this.handleSearchInputKeyPress}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Search"
                          onClick={() => {
                            this.search();
                          }}
                          edge="end"
                        >
                          <SearchIcon></SearchIcon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
            </div>
            {/* Search Body */}
            <CharacterResult result={this.state.searchResult}></CharacterResult>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultPage;
