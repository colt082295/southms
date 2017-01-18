import React, { PropTypes } from 'react';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import Search from '../Search';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BasicFilter.css';

class BasicFilter extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  render() {

     const options = [
       { text: 'Date Added', value: 'dateAdded' },
       { text: 'Distance', value: 'distance' },
     ]

     const options2 = [
       { text: 'Ascending', value: 'asc' },
       { text: 'Descending', value: 'desc' },
     ]

    return (
      <div className={s.container}>
        <Input type='text' placeholder='Search...' action>
    <input />
    <Select compact options={options} defaultValue='dateAdded' />
    <Select compact options={options2} defaultValue='asc' />
  </Input>
      </div>
    );
  }
}

export default withStyles(s)(BasicFilter);
