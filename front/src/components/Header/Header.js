import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }

  handleItemClick() {



  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
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
      </Menu>
    )
  }
}

export default withStyles(s)(Header);
