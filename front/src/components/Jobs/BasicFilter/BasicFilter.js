import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import JobsSearch from '../JobsSearch';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BasicFilter.css';

class JobsBasicFilter extends React.Component {
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
    order: this.props.data.order,
    orderParam: this.props.data.orderParam,
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type)
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
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type)
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
        <Input type='text' placeholder='Search...' action>
    <input />
    <Select compact options={options}  defaultValue='dateCreated' onChange={this.orderParamChanged.bind(this)} />
    <Select compact options={options2} defaultValue='asc' onChange={this.orderChanged.bind(this)} />
  </Input>
      </div>
    );
  }
}

export default withStyles(s)(JobsBasicFilter);
