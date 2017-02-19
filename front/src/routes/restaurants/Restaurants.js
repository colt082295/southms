import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Render from '../../components/Restaurants/Render';
import s from './Restaurants.css';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render loading={this.state.loading} restaurants={this.props.restaurants} restaurantsInfo={this.props.restaurantsInfo} pagination={this.props.restaurants.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Restaurants);
