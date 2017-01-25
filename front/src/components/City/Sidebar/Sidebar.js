import React, { PropTypes } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={'sidebar'}>
        <Menu vertical>
          <Menu.Item name='cities' onClick={this.handleItemClick}>
            <a href="#">Jobs in Ocean Springs</a>
          </Menu.Item>
          <Menu.Item name='cities' onClick={this.handleItemClick}>
            <a href="#">Events in Ocean Springs</a>
          </Menu.Item>
          <Menu.Item name='cities' onClick={this.handleItemClick}>
            <a href="#">Things ToDo in Ocean Springs</a>
          </Menu.Item>

      </Menu>
      <div className={s.ad}>Ad</div>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
