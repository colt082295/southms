import React, { PropTypes } from 'react';
import JobsLoading from '../JobsLoading';
import JobsLoaded from '../JobsLoaded';
import JobsSidebar from '../JobsSidebar';
import BasicFilter from '../BasicFilter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RenderJobs.css';

class RenderJobs extends React.Component {
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
    let render = null;
    if (this.props.loading) {
      render = <JobsLoading />;
    } else {
      render = <JobsLoaded jobs={this.props.jobs} />;
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <JobsSidebar />
          <div className={s.jobs}>
            {render}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RenderJobs);
