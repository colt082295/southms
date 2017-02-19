import React, { PropTypes } from 'react';
import Render from '../../components/Vehicle/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Vehicle.css';

class Vehicle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
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
          <Render vehicle={this.props.vehicle} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Vehicle);
