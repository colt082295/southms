import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import striptags from 'striptags';
import Pagination from '../Pagination';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobsLoaded.css';

class JobsLoaded extends React.Component {

  state = {
    jobs: this.props.jobs.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.jobs.map(function (job, i) {

            job.salary = Numeral(job.salary).format('$0,0[.]00');
            //job.time = Moment(job.dateCreated.date).format("M/D - ha");
            job.time = Moment(job.dateCreated.date).format("M/D");
            job.description = striptags(job.description, [], '\n');;


            return (
              <div className={s.jobContainer} key={job.id}>
                <a href={"/job/" + job.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{job.position}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-briefcase" aria-hidden="true"></i>{job.type.label}</p>
                        <p><i className="fa fa-tag" aria-hidden="true"></i>{job.category.label}</p>
                        <p><i className="fa fa-money" aria-hidden="true"></i>{job.salary}</p>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{job.city.label}</p>
                        <p><i className="fa fa-calendar" aria-hidden="true"></i>{job.time}</p>
                      </div>
                    </div>
                    <div className={s.description}>
                      <div className={s.descriptionText}><p>{job.description}</p></div>
                      <div className={s.viewFull}><Button basic color='blue'>View Job</Button></div>
                    </div>
                </a>
              </div>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeJobs={this.props.changeJobs} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobsLoaded);
