import React, { PropTypes } from 'react';
import Loaded from '../JobLoaded';
import Sidebar from '../../QuicklinksSidebar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RenderJob.css';

class RenderJob extends React.Component {
  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <main>
              <Loaded job={this.props.job} />
          </main>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RenderJob);
