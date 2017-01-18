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
      <div className={s.sidebar}>
        <Menu vertical>
          <Menu.Item name='category' onClick={this.handleItemClick}>
            Category: <a href="#">{data.category.label}</a>
          </Menu.Item>

          <Menu.Item name='salary' onClick={this.handleItemClick}>
            Salary: {salary}
          </Menu.Item>

          <Menu.Item name='type' onClick={this.handleItemClick}>
            Type: {data.type.label}
          </Menu.Item>

          <Menu.Item name='added' onClick={this.handleItemClick}>
            Posted: {time}
          </Menu.Item>

      </Menu>
      </div>
    );
  }
}

export default withStyles(s)(JobSidebar);
