import React from "react";

export const Homepage = ({ data, firstName }) => {
  // const firstName = Boolean(data) ? data.first_name : "";

  return (
    <div className="page" data-page="home">
      <div className="background-banner" />

      <div className="layout-content">
        <div className="layout-main">
          <div className="page-header">
            <div className="columns">
              {Boolean(data) ? (
                <h1 className="page-title">Welcome Back, {firstName}</h1>
              ) : (
                <h1 className="page-title">Hello, Visitor</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
