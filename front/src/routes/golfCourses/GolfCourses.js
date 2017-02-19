import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Render from '../../components/GolfCourses/Render';
import s from './GolfCourses.css';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: this.props.courses,
      loading: true,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render loading={this.state.loading} courses={this.props.courses} coursesInfo={this.props.coursesInfo} pagination={this.props.courses.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Courses);
