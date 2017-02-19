import React, { PropTypes } from 'react';
import Render from '../../components/Casino/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Casino.css';

class Casino extends React.Component {
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
          <Render casino={this.props.casino} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Casino);
