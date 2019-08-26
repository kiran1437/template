import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  render() {
    const { id } = this.props;
    return <div>{id}</div>;
  }
}

App.defaultProps = {
  id: 2
};
App.propTypes = {
  id: PropTypes.number
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
