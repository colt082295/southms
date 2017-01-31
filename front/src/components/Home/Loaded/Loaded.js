import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Home</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
