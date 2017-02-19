import React, { PropTypes } from 'react';
import axios from 'axios';
import Render from '../../components/Vehicles/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Vehicles.css';

class Vehicles extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      vehicles: this.props.vehicles,
      loading: true,
    };
  }

  componentDidMount() {
    var _this = this;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render loading={this.state.loading} vehicles={this.props.vehicles} vehiclesInfo={this.props.vehiclesInfo} pagination={this.props.vehicles.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Vehicles);
