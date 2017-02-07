import React, { PropTypes } from 'react';
import geolocator from 'geolocator';
import Loading from '../../Loading';
import JobsLoaded from '../JobsLoaded';
import Filter from '../Filter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
      type: '*',
      category: '*',
      city: '*',
      search: '',
      order: 'asc',
      orderParam: 'dateCreated',
      url: 'http://www.southms.com/index.php/api/jobs.json?',
      urlSearch: 'http://www.southms.com/index.php/api/search.json?',
      urlPagination: this.city,
      location: [],
      loading: false,
    };
  }

  componentDidMount() {
  }
  onLoadChange(load) {
    this.setState(load);
  }
  changeJobs(jobs) {
    this.setState({
      jobs: jobs,
    });
  }
  changeBasicFilter(order, orderParam) {
    this.setState({
      order: order,
      orderParam: orderParam,
    });
  }
  // Later I'll need to figure out how way to consolidate these functions into as little as possible.
  updateJobLocation(city) {
    // var newArray = this.state.type.slice();
    // newArray.push(type);
    //this.setState({ type: newArray });
    this.setState({ city: city });
  }
  updateJobType(type) {
    // var newArray = this.state.type.slice();
    // newArray.push(type);
    //this.setState({ type: newArray });
    this.setState({ type: type });
  }
  updateJobCategory(category) {
    console.log("Category update");
    this.setState({ category: category });
  }
  updateJobSearch(search) {
    // var newArray = this.state.type.slice();
    // newArray.push(type);
    //this.setState({ type: newArray });
    this.setState({ search: search });
  }
  render() {
    let render = null;
    if (typeof this.state.jobs.data == 'undefined' && !this.state.jobs.data.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <JobsLoaded jobs={this.state.jobs} pagination={this.props.pagination} data={this.state} onLoadChange={this.onLoadChange.bind(this)} changeJobs={this.changeJobs.bind(this)} />;
    }

    return (
      <div className={s.root}>
        <Filter onLoadChange={this.onLoadChange.bind(this)} updateJobSearch={this.updateJobSearch.bind(this)} changeJobs={this.changeJobs.bind(this)} changeBasicFilter={this.changeBasicFilter.bind(this)} data={this.state} jobs={this.state.jobs} jobInfo={this.props.jobInfo} location={this.state.location} onLoadChange={this.onLoadChange.bind(this)} changeJobs={this.changeJobs.bind(this)} data={this.state} updateJobCategory={this.updateJobCategory.bind(this)} updateJobType={this.updateJobType.bind(this)} updateJobLocation={this.updateJobLocation.bind(this)} />
        <div className={s.container}>
          <div className={s.jobs}>
            {render}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
