import React, { PropTypes } from 'react';
import Pagination from '../Pagination';
import Numeral from 'numeral';
import Moment from 'moment';
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

  state = {
    jobs: this.props.jobs.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.jobs.map(function (job, i) {

            job.salary = Numeral(job.salary).format('$0,0[.]00');
            job.time = Moment(job.dateCreated.date).format("M/D - ha");


            return (
                <a href={"/job/" + job.id} className={s.job} key={job.id}>
                    <div className={s.jobPosition}>
                      <h3>{job.position}</h3>
                    </div>
                    <div className={s.jobMeta}>
                      <p><i className="fa fa-tag" aria-hidden="true"></i>{job.category.label}</p>
                      <p><i className="fa fa-money" aria-hidden="true"></i>{job.salary}</p>
                      <p><i className="fa fa-calendar" aria-hidden="true"></i>{job.time}</p>
                    </div>
                    <div className={s.description}>
                      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                    </div>
                </a>
            );
          })}
          <Pagination />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobsLoaded);
