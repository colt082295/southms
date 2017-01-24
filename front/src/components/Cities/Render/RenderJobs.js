import React, { PropTypes } from 'react';
import geolocator from 'geolocator';
import JobsLoading from '../JobsLoading';
import JobsLoaded from '../JobsLoaded';
import Filter from '../Filter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RenderJobs.css';

class RenderJobs extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  state = {
    jobs: this.props.jobs,
    type: [],
    category: [],
    city: [],
    search: '',
    order: 'asc',
    orderParam: 'dateCreated',
    url: 'http://192.168.0.25/test-craft2/craft/app/index.php/api/jobs.json?',
    urlSearch: 'http://192.168.0.25/test-craft2/craft/app/index.php/api/search.json?',
    location: [],
    loading: false,
  }

  componentDidMount() {
    /*
    const _this = this;
    console.log("IT DID MOUNT!");
    // This is getting the user's geolcation and converting it (using Google api) to an actual address. Look up the usage, etc on this.
    // Free for up to 2,500 daily (max 50 per second) requests. Above that, you can pay $0.50 per 1,000 extra requests. If tons, then contact sales.
    // https://developers.google.com/maps/documentation/geocoding/usage-limits
    // https://console.developers.google.com/apis/dashboard?project=southms-156003&duration=PT1H
    geolocator.config({
        language: "en",
        google: {
            version: "3",
            key: "AIzaSyCftA8pbt4-CmCVuQew8iH8EOKmOTGVe4w"
        }
    });

        var options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumWait: 10,     // max wait time for desired accuracy
            maximumAge: 0,          // disable cache
            desiredAccuracy: 1000,    // meters
            fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
            addressLookup: true,    // requires Google API key if true
            timezone: false,         // requires Google API key if true
            //map: "map-canvas",      // interactive map element id (or options object)
            staticMap: false         // map image URL (boolean or options object)
        };
        geolocator.locate(options, function (err, location) {
            if (err) return console.log(err);
            console.log(location);
            _this.setState({ location: location.address });
        });
        */
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
      render = <JobsLoading />;
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

export default withStyles(s)(RenderJobs);
