import React, { PropTypes } from 'react';
import Spinner from '../../Spinner';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loading.css';

class Loading extends React.Component {

  render() {
    return (
      <Spinner />
    );
  }
}

export default withStyles(s)(Loading);
