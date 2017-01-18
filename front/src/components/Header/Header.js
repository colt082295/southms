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
      <Menu className={s.header}>
        <Menu.Item href="/" className={s.logo} header>SouthMS</Menu.Item>

        <div className={s.lineContainer}>
        <div className={s.line}></div>
        </div>

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

        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className={s.search} type='text' placeholder='Search...' />
              <i className='search link icon' />
            </div>
            <div className='results'></div>
          </div>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withStyles(s)(Header);
