import React, { PropTypes } from 'react';
import axios from 'axios';
import RenderJobs from '../../components/Jobs/RenderJobs';
import BasicFilter from '../../components/Jobs/BasicFilter';
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
          <BasicFilter />
          <RenderJobs loading={this.state.loading} jobs={this.props.jobs} jobInfo={this.props.jobInfo} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Jobs);
