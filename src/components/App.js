import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import { Homepage } from "./Homepage";
import { TopBar } from "./TopBar";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Modal } from "./Modal";
import { BrowseContainer } from "../containers/BrowseContainer";

class App extends React.Component {
  state = {
    open: false
  };

  takeInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  signIn = () => {
    const { email, password } = this.state;

    axios
      .post("http://exygy-challenge-backend.herokuapp.com/users/login", {
        email,
        password,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(res => {
        this.setState(
          {
            data: res.data[0],
            status: res.status
          },
          () => {
            if (this.state.status === 200) {
              this.setState({
                open: true
              });
            }

            setTimeout(() => {
              this.setState({
                open: false
              });
            }, 1500);
          }
        );
      })
      .catch(() => {
        this.setState({
          open: true
        });

        setTimeout(() => {
          this.setState({
            open: false
          });
        }, 1500);
      });
  };

  render() {
    const { data, status, open } = this.state;
    const firstLetter = Boolean(data) ? data.first_name.slice(0, 1) : "";
    const lastLetter = Boolean(data) ? data.last_name.slice(0, 1) : "";
    const firstName = Boolean(data) ? data.first_name : "";
    const lastName = Boolean(data) ? data.last_name : "";

    return (
      <Fragment>
        <TopBar data={data} firstLetter={firstLetter} lastLetter={lastLetter} />
        <Modal open={open} status={status} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage data={data} firstName={firstName} />}
          />
          <Route path="/browse" render={() => <BrowseContainer />} />
          <Route
            path="/login"
            render={() =>
              status === 200 ? (
                <Redirect push to="/profile" />
              ) : (
                <Login
                  signIn={this.signIn}
                  takeInput={this.takeInput}
                  history={this.props.history}
                  status={status}
                />
              )
            }
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                data={data}
                firstLetter={firstLetter}
                lastLetter={lastLetter}
                firstName={firstName}
                lastName={lastName}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
