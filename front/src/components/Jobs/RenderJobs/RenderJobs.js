import React, { PropTypes } from 'react';
import geolocator from 'geolocator';
import JobsLoading from '../JobsLoading';
import JobsLoaded from '../JobsLoaded';
import JobsSidebar from '../JobsSidebar';
import BasicFilter from '../BasicFilter';
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
    location: [],
  }

  componentDidMount() {
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
  }

  render() {
    let render = null;
    if (typeof this.props.jobs.data == 'undefined' && !this.props.jobs.data.length > 0) {
      render = <JobsLoading />;
    } else {
      render = <JobsLoaded jobs={this.props.jobs} />;
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <JobsSidebar jobs={this.props.jobs} jobInfo={this.props.jobInfo} location={this.state.location} />
          <div className={s.jobs}>
            {render}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RenderJobs);
