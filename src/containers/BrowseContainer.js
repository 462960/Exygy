import React from "react";
import { Browse } from "../components/Browse";

export class BrowseContainer extends React.Component {
  state = {
    data: [],
    searchInput: ""
  };

  componentDidMount() {
    fetch("http://exygy-challenge-backend.herokuapp.com/documents?api_key=123")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  getInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  queryCancellation = e => {
    this.setState({ searchInput: "" });
  };

  render() {
    return (
      <Browse
        {...this.state}
        getInput={this.getInput}
        queryCancellation={this.queryCancellation}
      />
    );
  }
}
