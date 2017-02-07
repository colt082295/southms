import React, { PropTypes } from 'react';
import axios from 'axios';
import RenderJobs from '../../components/Jobs/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Jobs.css';

class Jobs extends React.Component {
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
    this.state = {
      jobs: [],
      loading: true,
    };
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
          <RenderJobs loading={this.state.loading} jobs={this.props.jobs} jobInfo={this.props.jobInfo} pagination={this.props.jobs.meta.pagination} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Jobs);
