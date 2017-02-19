import React, { PropTypes } from 'react';
import Render from '../../components/GolfCourse/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GolfCourse.css';

class Golf extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render course={this.props.course} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Golf);
