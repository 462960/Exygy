import React from "react";

export const Login = ({ signIn, takeInput }) => (
  <div className="page" data-page="login">
    <div className="layout-content">
      <div className="layout-main">
        <div className="page-header">
          <div className="columns">
            <div className="login-box ">
              <span className="login-box-symbol">
                <span className="ui-icon i-darkest-blue i-xxlarge ">
                  <svg>
                    <use xlinkHref="#i-profile-large">
                      <svg
                        id="i-profile-large"
                        viewBox="0 0 32 32"
                        width="100%"
                        height="100%"
                      >
                        <title>profile-large</title>
                        <path
                          className="path1"
                          d="M16 0c-8.83 0-16 7.17-16 16s7.17 16 16 16 16-7.17 16-16-7.17-16-16-16zM16 30.815c-8.178 0-14.815-6.637-14.815-14.815s6.637-14.815 14.815-14.815 14.815 6.637 14.815 14.815-6.637 14.815-14.815 14.815z"
                        />
                        <path
                          className="path2"
                          d="M24 24.237c-0.948-0.474-3.496-1.778-5.57-2.726l-0.593-1.956c0.889-0.593 1.541-1.481 1.659-2.548l0.415-3.2c0.119-0.296 0.119-0.593 0.119-0.889 0-2.252-1.837-4.089-4.089-4.089s-4.089 1.896-4.089 4.148c0 0.296 0 0.593 0.119 0.948l0.415 3.141c0.178 1.067 0.77 2.015 1.659 2.548l-0.593 1.956c-1.956 0.948-4.563 2.252-5.452 2.726-0.652 0.296-1.185 0.889-1.481 1.541 2.311 2.548 5.748 4.207 9.422 4.207 3.793 0 7.111-1.541 9.541-4.207-0.296-0.83-0.77-1.304-1.481-1.6z"
                        />
                      </svg>
                    </use>
                  </svg>
                </span>
              </span>

              <div className="login-box-body">
                <div className="login-box-header">
                  <h2 className="login-box-title">Sign In</h2>
                </div>
                <form className="login-box-form">
                  <input
                    onChange={takeInput}
                    id="email"
                    className="login-box-form-username"
                    type="text"
                    placeholder="Username"
                    required=""
                  />
                  <input
                    onChange={takeInput}
                    id="password"
                    className="login-box-form-password"
                    type="password"
                    placeholder="Password"
                    required=""
                  />

                  <button
                    onClick={signIn}
                    className="button login-box-form-submit"
                    data-open=""
                    type="button"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
