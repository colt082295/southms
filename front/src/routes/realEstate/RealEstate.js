import React, { PropTypes } from 'react';
import Render from '../../components/RealEstate/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RealEstate.css';

class RealEstate extends React.Component {
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
          <Render realEstate={this.props.realEstate} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RealEstate);
