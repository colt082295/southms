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
      casinos: this.props.casinos,
      type: '*',
      category: '*',
      city: '*',
      search: '',
      order: 'asc',
      orderParam: 'dateCreated',
      url: 'http://www.southms.com/index.php/api/casinos.json?',
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
  changeCasinos(casions) {
    this.setState({
      casions: casions,
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
  updateSearch(search) {
    this.setState({ search: search });
  }
  render() {
    let render = null;
    if (typeof this.state.casinos.data == 'undefined' && !this.state.casinos.data.length > 0 || this.state.loading == true) {
      render = <Loading />;
    } else {
      render = <Loaded casinos={this.state.casinos} pagination={this.props.pagination} data={this.state} onLoadChange={this.onLoadChange.bind(this)} changeCasinos={this.changeCasinos.bind(this)} />;
    }

    let city = {
      camelCase: this.state.city,
    }

    return (
      <div className={s.root}>
        <Filter onLoadChange={this.onLoadChange.bind(this)} updateSearch={this.updateSearch.bind(this)} changeCasinos={this.changeCasinos.bind(this)} changeBasicFilter={this.changeBasicFilter.bind(this)} data={this.state} casinos={this.state.casinos} casinoInfo={this.props.casinosInfo} location={this.state.location} onLoadChange={this.onLoadChange.bind(this)} updateCategory={this.updateCategory.bind(this)} updateLocation={this.updateLocation.bind(this)} />
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
