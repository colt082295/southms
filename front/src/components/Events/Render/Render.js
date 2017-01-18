import React, { PropTypes } from 'react';
import geolocator from 'geolocator';
import Loading from '../Loading';
import Loaded from '../Loaded';
import Sidebar from '../Sidebar';
import BasicFilter from '../BasicFilter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  state = {
    location: [],
  }

  componentDidMount() {
  }

  render() {
    let render = null;
    if (typeof this.props.events.data == 'undefined' && !this.props.events.data.length > 0) {
      render = <Loading />;
    } else {
      render = <Loaded events={this.props.events} />;
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Sidebar events={this.props.events} eventInfo={this.props.eventInfo} location={this.state.location} />
          <div className={s.jobs}>
            {render}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
