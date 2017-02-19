import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { Menu, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import fetch from '../../core/fetch';

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
    console.log("fetch starting");
    this.serverRequest =
      axios
      // Make a call to populate the cities in the nav.
        .get('http://www.southms.com/index.php/api/cities.json')
        .then(function(result) {
          console.log("fetch ended", result.data.data);
          _this.setState({
            cities: result.data.data,
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
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

        <Menu.Item
          name='realState'
          active={activeItem === 'realEstate'}
          onClick={this.handleItemClick}
          href="/real-estates"
        >
          Real Estate
        </Menu.Item>

        <Menu.Item
          name='thingsToDo'
          active={activeItem === 'thingsToDo'}
          onClick={this.handleItemClick}
          href="/things-to-do"
        >
          Things To Do
        </Menu.Item>

        <Menu.Item
          name='golfCourses'
          active={activeItem === 'golfCourses'}
          onClick={this.handleItemClick}
          href="/golf-courses"
        >
          Golf Courses
        </Menu.Item>

        <Menu.Item
          name='accommodations'
          active={activeItem === 'accommodations'}
          onClick={this.handleItemClick}
          href="/accommodations"
        >
          Accommodations
        </Menu.Item>

        <Menu.Item
          name='restaurants'
          active={activeItem === 'restaurants'}
          onClick={this.handleItemClick}
          href="/restaurants"
        >
          Restaurants
        </Menu.Item>

        <Menu.Item
          name='vehicles'
          active={activeItem === 'vehicles'}
          onClick={this.handleItemClick}
          href="/vehicles"
        >
          Vehicles
        </Menu.Item>

        <Menu.Item
          name='casinos'
          active={activeItem === 'casinos'}
          onClick={this.handleItemClick}
          href="/casinos"
        >
          Casinos
        </Menu.Item>

        <Menu.Item as={Dropdown} text="Cities">
          <Dropdown.Menu>
            {this.state.cities.map(function (city, i) { // Map through the cities
              return (<Dropdown.Item key={i} href={'/city/'+city.value} >{city.text}</Dropdown.Item>)
              })}
          </Dropdown.Menu>
      </Menu.Item>



      </Menu>
    )
  }
}

export default withStyles(s)(Header);
