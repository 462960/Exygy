import React from "react";
// import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
// import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Modal = ({ open, status }) => (
  <MuiThemeProvider>
    <Dialog open={open}>
      {status === 200 ? (
        <div>Congrats, you're logged!</div>
      ) : (
        <div>Something wen wrong...</div>
      )}
    </Dialog>
  </MuiThemeProvider>
);
