import React, { PropTypes } from 'react';
import RenderJob from '../../components/Job/RenderJob';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Job.css';

class Job extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

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
          <RenderJob job={this.props.job} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Job);
