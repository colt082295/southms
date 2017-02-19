import React, { PropTypes } from 'react';
import axios from 'axios';
import Render from '../../components/RealEstates/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RealEstate.css';

class RealEstates extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      realEstates: [],
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
          <Render loading={this.state.loading} realEstates={this.props.realEstates} realEstateInfo={this.props.realEstateInfo} pagination={this.props.realEstates.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RealEstates);
