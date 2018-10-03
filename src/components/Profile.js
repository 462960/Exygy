import React from "react";

const initialsHolder = {
  width: "52px",
  height: "52px",
  backgroundColor: "#002556",
  borderRadius: "50%",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "0.875rem",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  marginTop: "10px",
  padding: "1px"
};

const initials = {
  position: "absolute",
  top: "50%",
  margiTop: "auto",
  marginBottom: "auto",
  left: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  transform: "translate(-50%, -50%)"
};

export const Profile = ({
  data,
  firstLetter,
  lastLetter,
  firstName,
  lastName
}) => {
  const email = Boolean(data) ? data.email : "";

  return (
    <div className="page" data-page="login">
      <div className="layout-content">
        <div className="layout-main">
          <div className="page-header">
            <div className="columns">
              <div className="login-box ">
                {/* Login box symbol*/}
                <span className="login-box-symbol">
                  <span style={initialsHolder}>
                    {Boolean(data) ? (
                      <span style={initials}>
                        {firstLetter}
                        {lastLetter}
                      </span>
                    ) : null}
                  </span>
                </span>

                <div className="login-box-body">
                  <div className="login-box-header">
                    {Boolean(data) ? (
                      <h2 className="login-box-title">
                        {firstName} {lastName}
                      </h2>
                    ) : (
                      <h6 className="login-box-title">User's name</h6>
                    )}
                    {Boolean(data) ? (
                      <h6 className="user-email">{email}</h6>
                    ) : (
                      <h6 className="user-email">User's email</h6>
                    )}
                    <h6 className="edit">EDIT</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
