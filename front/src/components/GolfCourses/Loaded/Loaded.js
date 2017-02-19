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
    courses: this.props.courses.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.courses.map(function (course, i) {
            return (
              <Grid key={course.id}>
                <a href={"/golf-courses/" + course.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{course.title}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{course.city}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeCourses={this.props.changeCourses} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
