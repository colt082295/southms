import React, { PropTypes } from 'react';
import Home from '../../components/Home/Render'; // Get the actual homepage component
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class HomeWrapper extends React.Component { // This is the homepage/parent level wrapper
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
