import React, { PropTypes } from 'react';
import Render from '../../components/Cities/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cities.css';

class Cities extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      events: [],
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
          <Render loading={this.state.loading} locations={this.props.locations} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Cities);
