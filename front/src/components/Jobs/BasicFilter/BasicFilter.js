import React, { PropTypes } from 'react';
import { Dropdown, Input, Select } from 'semantic-ui-react';
import JobsSearch from '../JobsSearch';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BasicFilter.css';

class JobsBasicFilter extends React.Component {
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

    var friendOptions = [
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
         image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
       }
     ]

     const options = [
       { text: 'All', value: 'all' },
       { text: 'Articles', value: 'articles' },
       { text: 'Products', value: 'products' },
     ]

    return (
      <div className={s.container}>
        <Input type='text' placeholder='Search...' action>
    <input />
    <Select compact options={options} defaultValue='articles' />
    <Select compact options={options} defaultValue='articles' />
  </Input>
      </div>
    );
  }
}

export default withStyles(s)(JobsBasicFilter);
