import React, { PropTypes } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobSidebar.css';

class JobSidebar extends React.Component {
  render() {
    const data = this.props.job;

    return (
      <div className={s.sidebar}>
        <Menu vertical>
        <Menu.Item name='inbox' onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Category: {data.category.label}
        </Menu.Item>

        <Menu.Item name='spam' onClick={this.handleItemClick}>
          <Label>51</Label>
          Salary: {data.salary}
        </Menu.Item>

        <Menu.Item name='updates' onClick={this.handleItemClick}>
          <Label>1</Label>
          Type: {data.type.label}
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default withStyles(s)(JobSidebar);
