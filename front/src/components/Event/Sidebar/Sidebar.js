import React, { PropTypes } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    const data = this.props.event;
    const time = Moment(data.eventTime.date).format("MMMM Do, h:mm A");

    return (
      <div className={s.sidebar}>
        <Menu vertical>
          <Menu.Item name='location' onClick={this.handleItemClick}>
            <span className={s.title}>Location:</span> <span className={s.description}><a target="_blank" href={`${'http://maps.google.com/?q=', data.eventLocation}`} >{data.eventLocation}</a></span>
          </Menu.Item>

          <Menu.Item name='time' onClick={this.handleItemClick}>
            <span className={s.title}>Time:</span> <span className={s.description}>{time}</span>
          </Menu.Item>

      </Menu>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
