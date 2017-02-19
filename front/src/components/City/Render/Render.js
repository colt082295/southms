import React, { PropTypes } from 'react';
import Loaded from '../Loaded';
import Sidebar from '../../QuicklinksSidebar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  render() {
    console.log("The city object:", this.props.city);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <main>
            <Loaded city={this.props.city} />
          </main>
          <Sidebar citySlug={this.props.city.slug} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
