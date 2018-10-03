import React, { Fragment } from "react";
import { Browse } from "../components/Browse";
import { Loader } from "../components/Loader";

export class BrowseContainer extends React.Component {
  state = {
    searchInput: ""
  };

  componentDidMount() {
    fetch("http://exygy-challenge-backend.herokuapp.com/documents?api_key=123")
      .then(res => res.json())
      .then(dataList => this.setState({ dataList }));
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
    const { dataList } = this.state;
    return (
      <Fragment>
        {!Boolean(dataList) ? (
          <Loader />
        ) : (
          <Browse
            {...this.state}
            getInput={this.getInput}
            queryCancellation={this.queryCancellation}
          />
        )}
      </Fragment>
    );
  }
}
