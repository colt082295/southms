import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Render from '../../components/Restaurants/Render';
import s from './Restaurants.css';

class Restaurants extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render city={this.props.city} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Restaurants);
