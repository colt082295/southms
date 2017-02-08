import React, { PropTypes } from 'react';
import Loaded from '../JobLoaded';
import JobSidebar from '../JobSidebar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RenderJob.css';

class RenderJob extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.jobs}>
            <Loaded job={this.props.job} />
          </div>
          <JobSidebar job={this.props.job} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RenderJob);
