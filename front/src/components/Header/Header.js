import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import { Menu, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    }
  }



  handleItemClick() {



  }

  componentDidMount() {
    const _this = this;

    this.serverRequest =
      axios
      // Make a call to populate the cities in the nav.
        .get('http://www.southms.com/index.php/api/cities.json')
        .then(function(result) {
          console.log("Cities: ", result.data.data);
          _this.setState({
            cities: result.data.data,
          });
        })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu className={s.header + ' nav'}>
        <a href="/" className={s.logo} >SouthMS</a>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          href="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick}
          href="/jobs"
        >
          Jobs
        </Menu.Item>

        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
          href="/events"
        >
          Events
        </Menu.Item>

        <Menu.Item as={Dropdown} text="Cities">
          <Dropdown.Menu>
            {this.state.cities.map(function (city, i) { // Map through the cities
              return (<Dropdown.Item key={i} >{city.text}</Dropdown.Item>)
              })}
          </Dropdown.Menu>
      </Menu.Item>



      </Menu>
    )
  }
}

export default withStyles(s)(Header);
