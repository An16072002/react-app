import React from 'react';
import { createRoot } from 'react-dom/client';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      searchCount: 0,
      resultCount: 0
    };

    this.changeSearchText = this.changeSearchText.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  changeSearchText(event) {
    const v = event.target.value;
    this.setState({
      searchText: v
    });
  }

  doSearch() {
    this.setState((prevState) => {
      const count = this.state.searchText.length * 3;
      return {
        searchCount: prevState.searchCount + 1,
        resultCount: count
      };
    });
  }

  render() {
    return (
      <div className='search-box'>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.changeSearchText}
        />
        <button onClick={this.doSearch}>Search</button>
        <div>Search Text: {this.state.searchText}</div>
        <div>Search Count: {this.state.searchCount}</div>
        <div>Result Count: {this.state.resultCount}</div>
      </div>
    );
  }
}

// Render
const container = document.getElementById("search1");
const root = createRoot(container);
root.render(<Search />);
