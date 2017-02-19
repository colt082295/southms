import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import striptags from 'striptags';
import Pagination from '../../Pagination';
import Grid from '../../Grid';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

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
            job.time = Moment(job.dateCreated).format("M/D");
            job.description = striptags(job.description, [], '\n');


            return (
              <Grid key={job.id}>
                <a href={"/jobs/" + job.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{job.position}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-tag" aria-hidden="true"></i>{job.category}</p>
                        <p><i className="fa fa-money" aria-hidden="true"></i>{job.salary}</p>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{job.city}</p>
                        <p><i className="fa fa-calendar" aria-hidden="true"></i>{job.time}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeData={this.props.changeJobs} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
