import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearchLocal = (e) => {
    const localTerm = e.target.value;
    this.setState({ term: localTerm });
    this.props.onUpdateSearch(localTerm);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='Знайти працівника'
        value={this.state.term}
        onChange={this.onUpdateSearchLocal}
      />
    );
  }
}

export default SearchPanel;
