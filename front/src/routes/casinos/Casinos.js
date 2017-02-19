import React, { PropTypes } from 'react';
import axios from 'axios';
import Render from '../../components/Casinos/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Casinos.css';

class Casinos extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      casinos: [],
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
          <Render loading={this.state.loading} casinos={this.props.casinos} casinosInfo={this.props.casinosInfo} pagination={this.props.casinos.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Casinos);
