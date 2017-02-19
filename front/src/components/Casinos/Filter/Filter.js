import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter.css';

class Filter extends React.Component {
  state = {
    order: this.props.data.order,
    orderParam: this.props.data.orderParam,
    locations: this.props.casinoInfo.locations,
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeCasinos(result.data)
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
        .get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeCasinos(result.data);
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
    _this.props.onLoadChange({loading: true});
    var val = data.value;

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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&term=" + this.props.data.search + "&city=" + val)
        .then(function(result) {
          _this.props.changeCasinos(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  searchChanged(event, data) {
    const _this = this;
    _this.props.onLoadChange({loading: true});
    var val = data.value;
    this.props.updateSearch(val);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + val)
        .then(function(result) {
          _this.props.changeCasinos(result.data)
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

export default withStyles(s)(Filter);
