import React, { PropTypes } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobSidebar.css';

class JobSidebar extends React.Component {
  render() {
    const data = this.props.job;
    const salary = Numeral(data.salary).format('$0,0[.]00');
    const time = Moment(data.dateCreated.date).format("MMMM Do, h A");

    return (
      <div className={'sidebar'}>
        <Menu vertical>
          <Menu.Item name='jobs' onClick={this.handleItemClick}>
            <a href="#">More jobs in {data.category}</a>
          </Menu.Item>

          <Menu.Item name='events' onClick={this.handleItemClick}>
            <a href="#">Events around {data.city}</a>
          </Menu.Item>

          <Menu.Item className={s.post} name='post' onClick={this.handleItemClick}>
            <a href="#">Post a job</a>
          </Menu.Item>

      </Menu>
      <div className={s.ad}>Ad</div>
      </div>
    );
  }
}

export default withStyles(s)(JobSidebar);
