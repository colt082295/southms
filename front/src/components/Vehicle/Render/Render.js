import React, { PropTypes } from 'react';
import Loaded from '../Loaded';
import Sidebar from '../../QuicklinksSidebar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <main>
              <Loaded vehicle={this.props.vehicle} />
          </main>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
