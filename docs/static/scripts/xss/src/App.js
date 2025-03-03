import PropTypes from 'prop-types';
import React from 'react'

import Search from 'containers/Search'

const App = ({ fullPage }) => (
  <div className="searchContainer">
    <Search fullPage={fullPage} />
  </div>
)

App.propTypes = {
  fullPage: PropTypes.bool,
}
App.defaultProps = {
  fullPage: false,
}

export default App
