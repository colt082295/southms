import React, { PropTypes } from 'react';
import axios from 'axios';
import Render from '../../components/Accommodations/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Accommodations.css';

class Accommodations extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      accommodations: [],
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
          <Render loading={this.state.loading} accommodations={this.props.accommodations} accommodationsInfo={this.props.accommodationsInfo} pagination={this.props.accommodations.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Accommodations);
