import React from 'react';

export interface SearchResult {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
}

function FormatBirthYear(value: string): string {
  const bbyIndex = value.indexOf('BBY');
  if (bbyIndex > -1) {
    const age = value.substring(0, bbyIndex);
    return age + ' BBY';
  }
  return value;
}

function CharacterResult(props: { result: SearchResult }) {
  return (
    <div className="card-content result">
      <h6>{props.result.name}</h6>
      <div className="result-info">
        {/** Gender */}
        <div className="row">
          <div className="column label">Gender</div>
          <div className="column value">{props.result.gender}</div>
        </div>
        {/** Birth year */}
        <div className="row">
          <div className="column label">Birth Year</div>
          <div className="column value">
            {FormatBirthYear(props.result.birth_year)}
          </div>
        </div>
        {/** Height */}
        <div className="row">
          <div className="column label">Height</div>
          <div className="column value">{props.result.height}</div>
        </div>
        {/** Mass */}
        <div className="row">
          <div className="column label">Mass</div>
          <div className="column value">{props.result.mass}</div>
        </div>
        {/** Hair color */}
        <div className="row">
          <div className="column label">Hair Color</div>
          <div className="column value">{props.result.hair_color}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterResult;
