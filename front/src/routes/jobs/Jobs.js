import React, { PropTypes } from 'react';
import axios from 'axios';
import RenderJobs from '../../components/Jobs/RenderJobs';
import BasicFilter from '../../components/Jobs/BasicFilter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Jobs.css';

class JobsLoading extends React.Component {



}

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
    this.serverRequest =
      axios
        .get('http://192.168.0.25/test-craft2/craft/app/index.php/api/jobs.json')
        .then(function(result) {
          _this.setState({
            jobs: result.data.data,
            loading: false,
          });
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BasicFilter />
          <RenderJobs loading={this.state.loading} jobs={this.state.jobs} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Jobs);
