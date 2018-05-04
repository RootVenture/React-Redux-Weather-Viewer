import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// This component modifies state by dispatching actions;Needs to be a container to interact with redux

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch weather data via the actionCreator
    this.props.fetchWeather(this.state.term);

    // clear out our form
    this.setState({
      term: '',
    });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          value={this.state.term}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// Ensures that our action creators will pass to our middleware and reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null b/c no mapStateToProps; connect Component to our actionCreators
export default connect(null, mapDispatchToProps)(SearchBar);
