import React from 'react';

export interface SearchResult {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
}

class CharacterResult extends React.Component<{
  result: SearchResult;
}> {
  // Format birth year to look pretty
  private formatBirthyear(value: string): string {
    const bbyIndex = value.indexOf('BBY');
    if (bbyIndex > -1) {
      const age = value.substring(0, bbyIndex);
      return age + ' BBY';
    }
    return value;
  }

  private Capitalize(value: string) {
    if (value && typeof value === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      return value;
    }
  }

  render() {
    return (
      <div className="card-content result">
        {/* Helper */}
        {this.props.result.name === '' ? (
          <div className="result-overlay">
            <p>Search for a result</p>
          </div>
        ) : null}
        {/* Main Result Card */}
        <h6>{this.props.result.name}</h6>
        <div className="result-info">
          {/** Gender */}
          <div className="row">
            <div className="column label">Gender</div>
            <div className="column value">
              {this.Capitalize(this.props.result.gender)}
            </div>
          </div>
          {/** Birth year */}
          <div className="row">
            <div className="column label">Birth Year</div>
            <div className="column value">
              {this.formatBirthyear(this.props.result.birth_year)}
            </div>
          </div>
          {/** Height */}
          <div className="row">
            <div className="column label">Height</div>
            <div className="column value">{this.props.result.height}</div>
          </div>
          {/** Mass */}
          <div className="row">
            <div className="column label">Mass</div>
            <div className="column value">{this.props.result.mass}</div>
          </div>
          {/** Hair color */}
          <div className="row">
            <div className="column label">Hair Color</div>
            <div className="column value">
              {this.Capitalize(this.props.result.hair_color)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterResult;
