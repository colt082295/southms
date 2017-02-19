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
    properties: this.props.realEstateInfo.properties,
    types: this.props.realEstateInfo.types,
    locations: this.props.realEstateInfo.locations,
  }

  orderChanged(event, data) {
    const _this = this;
    _this.props.onLoadChange({loading: true});
    this.setState({
      order: data.value,
    });
    this.props.changeBasicFilter(data.value, this.state.orderParam);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&type=" + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  orderParamChanged(event, data) {
    const _this = this;
    _this.props.onLoadChange({loading: true});
    this.setState({
      orderParam: data.value,
    });
    this.props.changeBasicFilter(this.state.order, data.value);
    this.serverRequest =
      axios
        .get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({loading: false});
        })
  }

  componentDidMount() {
      console.log(this.state.categories,this.state.locations)
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  typeChanged(event, data) {
    const _this = this;
    _this.props.onLoadChange({loading: true});
    var val = data.value;

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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + val + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  propertyChanged(event, data) {
    const _this = this;
    _this.props.onLoadChange({loading: true});
    var val = data.value;

    if(val.length > 0) {
      this.props.updateProperty(val);
      val = val.join();
    } else {
      this.props.updateProperty('*');
      val = '*';
    }
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + val + "&term=" + this.props.data.search + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data)
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + val + "&city=" + this.props.data.city)
        .then(function(result) {
          _this.props.changeRealEstates(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  render() {

     const options = [
       { text: 'Date Added', value: 'dateCreated' },
     ]

     const options2 = [
       { text: 'Ascending', value: 'asc' },
       { text: 'Descending', value: 'desc' },
     ]

    return (
      <div className={s.container}>
        <div className={s.left}>
          <Dropdown placeholder='Choose Properties' multiple search selection scrolling options={this.state.properties} onChange={this.propertyChanged.bind(this)} />
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

export default withStyles(s)(Filter);
