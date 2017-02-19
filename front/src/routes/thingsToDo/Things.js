import React, { PropTypes } from 'react';
import axios from 'axios';
import Render from '../../components/ThingsToDo/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Things.css';

class Things extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      things: this.props.things,
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
          <Render loading={this.state.loading} things={this.props.things} thingsInfo={this.props.thingsInfo} pagination={this.props.things.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Things);
