import React, { PropTypes } from 'react';
import Home from '../../components/Home/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class HomeWrapper extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Home />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeWrapper);
