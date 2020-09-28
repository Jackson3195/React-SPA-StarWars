import React from 'react';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CharacterResult, { SearchResult } from '../components/CharacterResult';

import './DefaultPage.stylus';

function DefaultPage() {
  let fakeResult: SearchResult = {
    name: 'Luke Skywalker',
    gender: 'Male',
    birth_year: '39.7BBY',
    height: '177',
    hair_color: 'Blond',
    mass: '77',
  };

  return (
    <div className="page center vh">
      {/* Future-TODO: Figure out React Vue:Slots equvilent so card can be reused...*/}
      <div className="card character-search-card">
        {/* Card Header */}
        <h5 className="card-header">STAR WARS HEROES</h5>
        {/* Card Body */}
        <div className="card-body">
          {/* TODO: Refactor into own component */}
          {/* Search */}
          <div className="card-content hightlight-content padded">
            <div className="input-container">
              <label>Character Name</label>
              {/* Input */}
              <TextField
                id="outlined-basic"
                variant="outlined"
                helperText="E.g. Luke Skywalker"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Search"
                        onClick={() => {
                          return;
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
          <CharacterResult result={fakeResult}></CharacterResult>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;
