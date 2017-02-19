import React, { PropTypes } from 'react';
import Loading from '../../Loading';
import Loaded from '../Loaded';
import Sidebar from '../../QuicklinksSidebar';
import Filter from '../Filter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accommodations: this.props.accommodations,
      type: '*',
      category: '*',
      city: '*',
      search: '',
      order: 'asc',
      orderParam: 'dateCreated',
      url: 'http://www.southms.com/index.php/api/accommodations.json?',
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
  changeAccommodations(accommodations) {
    this.setState({
      accommodations: accommodations,
    });
  }
  changeBasicFilter(order, orderParam) {
    this.setState({
      order: order,
      orderParam: orderParam,
    });
  }
  updateLocation(city) {
    this.setState({ city: city });
  }
  updateType(type) {
    this.setState({ type: type });
  }
  updateSearch(search) {
    this.setState({ search: search });
  }
  render() {
    let render = null;
    if (typeof this.state.accommodations.data == 'undefined' && !this.state.accommodations.data.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <Loaded accommodations={this.state.accommodations} pagination={this.props.pagination} data={this.state} onLoadChange={this.onLoadChange.bind(this)} changeAccommodations={this.changeAccommodations.bind(this)} />;
    }

    let city = {
      camelCase: this.state.city,
    }

    return (
      <div className={s.root}>
        <Filter onLoadChange={this.onLoadChange.bind(this)} updateSearch={this.updateSearch.bind(this)} changeAccommodations={this.changeAccommodations.bind(this)} changeBasicFilter={this.changeBasicFilter.bind(this)} data={this.state} accommodations={this.state.accommodations} accommodationsInfo={this.props.accommodationsInfo} location={this.state.location} onLoadChange={this.onLoadChange.bind(this)} updateType={this.updateType.bind(this)} updateLocation={this.updateLocation.bind(this)} />
        <div className={s.container}>
          <main>
              {render}
          </main>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
