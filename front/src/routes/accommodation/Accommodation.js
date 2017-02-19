import React, { PropTypes } from 'react';
import Render from '../../components/Accommodation/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Accommodation.css';

class Accommodation extends React.Component {
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
          <Render accommodation={this.props.accommodation} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Accommodation);
