import React, { PropTypes } from 'react';
import Loading from '../../Loading';
import Loaded from '../Loaded';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {

  state = {
    locations: this.props.locations,
    url: 'http://www.southms.com/index.php/api/cities.json?',
    loading: false,
  }

  componentDidMount() {

  }
  onLoadChange(load) {
    this.setState(load);
  }
  render() {
    let render = null;
    if (typeof this.state.locations.locations == 'undefined' && !this.state.locations.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <Loaded locations={this.state.locations} data={this.state} onLoadChange={this.onLoadChange.bind(this)} />;
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.jobs}>
            {render}
            <div className={s.ad}>Ad</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
