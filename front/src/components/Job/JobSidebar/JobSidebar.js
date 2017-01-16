import React, { PropTypes } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import Numeral from 'numeral';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobSidebar.css';

class JobSidebar extends React.Component {
  render() {
    const data = this.props.job;
    const salary = Numeral(data.salary).format('$0,0[.]00');

    return (
      <div className={s.sidebar}>
        <Menu vertical>
          <Menu.Item name='inbox' onClick={this.handleItemClick}>
            Category: <a href="#">{data.category.label}</a>
          </Menu.Item>

          <Menu.Item name='spam' onClick={this.handleItemClick}>
            Salary: {salary}
          </Menu.Item>

          <Menu.Item name='updates' onClick={this.handleItemClick}>
            Type: {data.type.label}
          </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default withStyles(s)(JobSidebar);
