import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter.css';

class JobsFilter extends React.Component {
  state = {
    order: this.props.data.order,
    orderParam: this.props.data.orderParam,
    availabilities: this.props.jobInfo.availabilities,
    types: this.props.jobInfo.types,
    locations: this.props.jobInfo.locations,
  }

  orderChanged(event, data) {
    const _this = this;
    console.log("Sort changed", data.value);
    _this.props.onLoadChange({loading: true});
    this.setState({
      order: data.value,
    });
    this.props.changeBasicFilter(data.value, this.state.orderParam);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&availability=" + this.props.data.availability + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  orderParamChanged(event, data) {
    const _this = this;
    console.log("Sort changed", data.value);
    _this.props.onLoadChange({loading: true});
    this.setState({
      orderParam: data.value,
    });
    this.props.changeBasicFilter(this.state.order, data.value);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&availability=" + this.props.data.availability + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({loading: false});
        })
  }

  componentDidMount() {
      console.log(this.state.categories,this.state.types,this.state.locations)
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  locationChanged(event, data) {
    const _this = this;
    console.log("Job Location changed", event.target, data);
    _this.props.onLoadChange({loading: true});
    var val = data.value;
    /*
    var val = this.props.data.type;
    if(data.checked) {
      val.push(data.value);
    } else {
      // I'm sure there's a better way
        for(var i = val.length - 1; i >= 0; i--) {
            if(val[i] === data.value) {
               val.splice(i, 1);
            }
        }
        console.log("Array now:", val);
    }
    */

    if(val.length > 0) {
      this.props.updateLocation(val);
      val = val.join();
    } else {
      this.props.updateLocation('*');
      val = '*';
    }
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order  + "&availability=" + this.props.data.availability + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  typeChanged(event, data) {
    const _this = this;
    // console.log("Job Type changed", event.target, data);
    _this.props.onLoadChange({loading: true});
    var val = data.value;
    console.log("Job type value:", val);
    /*
    var val = this.props.data.type;
    if(data.checked) {
      val.push(data.value);
    } else {
      // I'm sure there's a better way
        for(var i = val.length - 1; i >= 0; i--) {
            if(val[i] === data.value) {
               val.splice(i, 1);
            }
        }
        console.log("Array now:", val);
    }
    */
    if(val.length > 0) {
      this.props.updateType(val);
      val = val.join();
    } else {
      this.props.updateType('*');
      val = '*';
    }
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order  + "&availability=" + this.props.data.availability + "&city=" + this.props.data.city + "&term=" + this.props.data.search + '&type=' + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  availabilityChanged(event, data) {
    const _this = this;
    console.log("Job Availability changed", event.target, data.value);
    _this.props.onLoadChange({loading: true});
    var val = data.value;

    if(val.length > 0) {
      this.props.updateAvailability(val);
      val = val.join();
    } else {
      this.props.updateAvailability('*');
      val = '*';
    }
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&availability=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  searchChanged(event, data) {
    const _this = this;
    console.log("Search changed", event.target, data.value);
    _this.props.onLoadChange({loading: true});
    var val = data.value;
    this.props.updateSearch(val);
    console.log("Value is:", val);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&availability=" + this.props.data.availabilities + "&term=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  render() {

     const options = [
       { text: 'Date Added', value: 'dateCreated' },
       { text: 'Salary', value: 'jobSalary' }
     ]

     const options2 = [
       { text: 'Ascending', value: 'asc' },
       { text: 'Descending', value: 'desc' },
     ]

    return (
      <div className={s.container}>
        <div className={s.left}>
          <Dropdown placeholder='Choose Categories' multiple search selection scrolling options={this.state.availabilities} onChange={this.availabilityChanged.bind(this)} />
          <Dropdown placeholder='Choose Types' multiple search selection scrolling options={this.state.types} onChange={this.typeChanged.bind(this)} />
          <Dropdown placeholder='Choose Locations' multiple search selection scrolling options={this.state.locations} onChange={this.locationChanged.bind(this)} />
        </div>
        <div className={s.right}>
          <Input type='text' placeholder='Search...' action onChange={this.searchChanged.bind(this)}>
            <input />
            <Select options={options} defaultValue='dateCreated' onChange={this.orderParamChanged.bind(this)} />
            <Select options={options2} defaultValue='asc' onChange={this.orderChanged.bind(this)} />
          </Input>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobsFilter);
