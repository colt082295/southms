import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobsLoaded.css';

class JobsLoaded extends React.Component {
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
          {this.props.jobs.data.map(function (job, i) {
            return (
                <a href={"/job/" + job.id} className={s.job} key={job.id}>
                    <div className={s.jobPosition}>
                      <h3>{job.position}</h3>
                    </div>
                    <div className={s.description}>
                      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                    </div>
                </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobsLoaded);
