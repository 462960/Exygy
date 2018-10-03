import React, { PureComponent } from "react";

export class Browse extends PureComponent {
  render() {
    const { getInput, data, searchInput, queryCancellation } = this.props;

    const filteredData = data.filter(i => i.name.includes(searchInput));

    const slatItem = (filteredData || data).map(x => (
      <div key={x.id} className="slat row align-middle collapse  excel">
        <div className="slat-avatar item-avatar">
          <span className="ui-icon i-excel i-xlarge ">
            <svg>
              <use xlinkHref="#i-file-excel" />
            </svg>
          </span>
        </div>

        <div className="slat-body expand columns">
          <div className="rows">
            {/* slat-header  */}
            <div className="columns small-12">
              <h3 className="slat-header">{x.name}</h3>
            </div>
          </div>

          <div className="row slat-subtitle">
            {/* slat-title */}
            <div className="columns small-12">
              <p className="slat-title-wrapper">
                <span className="slat-subtitle-prefix">Title:</span>
                <span className="slat-subtitle-text">{x.title}</span>
              </p>
            </div>
          </div>

          <div className="row show-for-medium">
            <div className="columns small-12 medium-6">
              <p className="slat-attr-wrapper">
                <span className="slat-attr-key">Modified By:</span>
                <span className="slat-attr-value">{x.modified_by}</span>
              </p>
              <p className="slat-attr-wrapper">
                <span className="slat-attr-key">Last Modified:</span>
                <span className="slat-attr-value">{x.updated_at}</span>
              </p>
            </div>

            <div className="columns small-12 medium-6">
              <p className="slat-attr-wrapper">
                <span className="slat-attr-key">Status:</span>
                <span className="slat-attr-value">{x.status}</span>
              </p>
              <p className="slat-attr-wrapper">
                <span className="slat-attr-key">Country:</span>
                <span className="slat-attr-value">{x.country}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="slat-secondary columns shrink">
          <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-icon">
            <svg>
              <use xlinkHref="#i-star" />
            </svg>
          </span>
          <span className="float-right slat-dropdown">
            <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-more">
              <svg>
                <use xlinkHref="#i-more-vert" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    ));

    return (
      <div className="page" data-page="browse">
        <div className="layout-content">
          <div className="layout-main">
            <div className="browse-search">
              <div className="search-box-container">
                <span className="ui-icon i-darker-gray i-base search-box-search-icon">
                  <svg>
                    <use xlinkHref="#i-search">
                      <svg
                        id="i-search"
                        viewBox="0 0 32 32"
                        width="100%"
                        height="100%"
                      >
                        <title>search</title>
                        <path
                          className="path1"
                          d="M23.74 20.5c0.172 0.105 0.322 0.222 0.455 0.355l7.11 7.1c0.398 0.423 0.642 0.994 0.642 1.622 0 1.309-1.061 2.37-2.37 2.37-0.628 0-1.199-0.244-1.623-0.643l-7.114-7.109c-0.127-0.133-0.24-0.282-0.334-0.444-2.085 1.454-4.67 2.33-7.46 2.33-7.199 0-13.035-5.836-13.035-13.035s5.836-13.035 13.035-13.035c7.199 0 13.035 5.836 13.035 13.035 0 2.79-0.876 5.375-2.369 7.495zM21.335 13.050c0-0.003 0-0.006 0-0.010 0-4.581-3.714-8.295-8.295-8.295s-8.295 3.714-8.295 8.295c0 4.579 3.711 8.292 8.29 8.295 0.002 0 0.004 0 0.005 0 4.581 0 8.295-3.714 8.295-8.295 0-0.002 0-0.004 0-0.005z"
                        />
                      </svg>
                    </use>
                  </svg>
                </span>
                <input
                  type="text"
                  id="searchInput"
                  className="search-box "
                  placeholder="Please, enter your query"
                  value={searchInput}
                  onChange={getInput}
                />
                <span
                  onClick={queryCancellation}
                  className="ui-icon i-medium-gray i-base search-box-close-icon"
                >
                  <svg>
                    <use xlinkHref="#i-close-large">
                      <svg
                        id="i-close-large"
                        viewBox="0 0 32 32"
                        width="100%"
                        height="100%"
                      >
                        <title>close-large</title>
                        <path
                          className="path1"
                          d="M18.4 16l13.1-13.1c0.7-0.7 0.7-1.7 0-2.4s-1.7-0.7-2.4 0l-13.1 13.1-13.1-13.1c-0.7-0.7-1.7-0.7-2.4 0s-0.7 1.7 0 2.4l13.1 13.1-13.1 13.1c-0.7 0.7-0.7 1.7 0 2.4s1.7 0.7 2.4 0l13.1-13.1 13.1 13.1c0.7 0.7 1.7 0.7 2.4 0s0.7-1.7 0-2.4l-13.1-13.1z"
                        />
                      </svg>
                    </use>
                  </svg>
                </span>
              </div>
            </div>

            <div className="browse-stage">
              <div className="browse-slat-set">{slatItem}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
