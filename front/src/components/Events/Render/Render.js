import React, { PropTypes } from 'react';
import Loading from '../../Loading';
import Loaded from '../Loaded';
import Filter from '../Filter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  state = {
    events: this.props.events,
    category: '*',
    city: '*',
    search: '',
    order: 'asc',
    orderParam: 'dateCreated',
    url: 'http://www.southms.com/index.php/api/events.json?',
    location: [],
    loading: false,
  }

  componentDidMount() {
  }

  onLoadChange(load) {
    this.setState(load);
  }
  changeEvents(events) {
    this.setState({
      events: events,
    });
  }
  changeFilter(order, orderParam) {
    this.setState({
      order: order,
      orderParam: orderParam,
    });
  }
  // Later I'll need to figure out how way to consolidate these functions into as little as possible.
  updateLocation(city) {
    // var newArray = this.state.type.slice();
    // newArray.push(type);
    //this.setState({ type: newArray });
    this.setState({ city: city });
  }
  updateCategory(category) {
    console.log("Category update");
    this.setState({ category: category });
  }
  updateSearch(search) {
    // var newArray = this.state.type.slice();
    // newArray.push(type);
    //this.setState({ type: newArray });
    this.setState({ search: search });
  }

  render() {
    let render = null;
    if (typeof this.state.events.data == 'undefined' && !this.state.events.data.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <Loaded events={this.state.events} pagination={this.props.pagination} data={this.state} onLoadChange={this.onLoadChange.bind(this)} changeEvents={this.changeEvents.bind(this)} />;
    }

    return (
      <div className={s.root}>
        <Filter events={this.state.events} updateSearch={this.updateSearch.bind(this)} changeFilter={this.changeFilter.bind(this)} data={this.state} eventInfo={this.props.eventInfo} location={this.state.location} onLoadChange={this.onLoadChange.bind(this)} changeEvents={this.changeEvents.bind(this)} data={this.state} updateCategory={this.updateCategory.bind(this)} updateLocation={this.updateLocation.bind(this)} />
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
