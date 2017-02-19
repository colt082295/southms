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
      realEstates: this.props.realEstates,
      type: '*',
      property: '*',
      city: '*',
      search: '',
      order: 'asc',
      orderParam: 'dateCreated',
      url: 'http://www.southms.com/index.php/api/real-estate.json?',
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
  changeRealEstates(realEstates) {
    this.setState({
      realEstates: realEstates,
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
  updateCategory(category) {
    this.setState({ category: category });
  }
  updateType(type) {
    this.setState({ type: type });
  }
  updateProperty(property) {
    this.setState({ property: property });
  }
  updateSearch(search) {
    this.setState({ search: search });
  }
  render() {
    let render = null;
    if (typeof this.state.realEstates.data == 'undefined' && !this.state.realEstates.data.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <Loaded realEstates={this.state.realEstates} pagination={this.props.pagination} data={this.state} onLoadChange={this.onLoadChange.bind(this)} changeRealEstates={this.changeRealEstates.bind(this)} />;
    }

    let city = {
      camelCase: this.state.city,
    }

    return (
      <div className={s.root}>
        <Filter onLoadChange={this.onLoadChange.bind(this)} updateSearch={this.updateSearch.bind(this)} changeRealEstates={this.changeRealEstates.bind(this)} changeBasicFilter={this.changeBasicFilter.bind(this)} data={this.state} realEstates={this.state.realEstates} realEstateInfo={this.props.realEstateInfo} location={this.state.location} onLoadChange={this.onLoadChange.bind(this)} updateProperty={this.updateProperty.bind(this)} updateType={this.updateType.bind(this)} updateLocation={this.updateLocation.bind(this)} />
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
