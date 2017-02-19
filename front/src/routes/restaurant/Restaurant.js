import React, { PropTypes } from 'react';
import Render from '../../components/Restaurant/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Restaurant.css';

class Restaurant extends React.Component {
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
          <Render restaurant={this.props.restaurant} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Restaurant);
