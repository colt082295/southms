import React, { PropTypes } from 'react';
import Spinner from './Spinner';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loading.css';

class Loading extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  render() {
    return (
      <Spinner />
    );
  }
}

export default withStyles(s)(Loading);
