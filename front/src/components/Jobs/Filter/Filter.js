import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import JobsSearch from '../JobsSearch';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter.css';

class JobsFilter extends React.Component {
  state = {
    order: this.props.data.order,
    orderParam: this.props.data.orderParam,
    categories: [],
    types: [],
    locations: [],
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&category=" + this.props.data.category + "&city=" + this.props.data.city)
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
        .get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&category=" + this.props.data.category + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  componentDidMount() {
    let categories = [];
    let types = [];
    let locations = [];
      this.props.jobInfo.allCategories.forEach(function (item) {
        categories.push(JSON.parse(item));
      })
      this.setState({ categories: categories });
      this.props.jobInfo.allTypes.forEach(function (item) {
        types.push(JSON.parse(item));
      })
      this.setState({ types: types });
      this.props.jobInfo.allLocations.forEach(function (item) {
        locations.push(JSON.parse(item));
      })
      this.setState({ locations: locations });
    //console.log(JSON.parse(this.props.jobInfo.allCategories));
  }

  componentWillUnmount() {
    // this.serverRequest.abort();
  }

  jobLocationChanged(event, data) {
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
    this.props.updateJobLocation(val);
    val = val.join();
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order  + "&category=" + this.props.data.category + '&type=' + this.props.data.type + "&city=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  jobTypeChanged(event, data) {
    const _this = this;
    console.log("Job Type changed", event.target, data);
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
    this.props.updateJobType(val);
    val = val.join();
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order  + "&category=" + this.props.data.category + "&city=" + this.props.data.city + '&type=' + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  jobCateogryChanged(event, data) {
    const _this = this;
    console.log("Job Category changed", event.target, data.value);
    _this.props.onLoadChange({loading: true});
    var val = data.value;
    /*
    var val = this.props.data.category;
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
    this.props.updateJobCategory(val);
    val = val.join();
    console.log("Value is:", val);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&category=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  render() {

     const options = [
       { text: 'Date Added', value: 'dateCreated' },
       { text: 'Salary', value: 'salary' }
     ]

     const options2 = [
       { text: 'Ascending', value: 'asc' },
       { text: 'Descending', value: 'desc' },
     ]

    return (
      <div className={s.container}>
        <div className={s.left}>
          <Dropdown placeholder='Choose Categories' multiple search selection scrolling options={this.state.categories} onChange={this.jobCateogryChanged.bind(this)} />
          <Dropdown placeholder='Choose Type' multiple search selection scrolling options={this.state.types} onChange={this.jobTypeChanged.bind(this)} />
          <Dropdown placeholder='Choose Location' multiple search selection scrolling options={this.state.locations} onChange={this.jobLocationChanged.bind(this)} />
        </div>
        <div className={s.right}>
          <Input type='text' placeholder='Search...' action>
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
