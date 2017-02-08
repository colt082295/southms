import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.aboutContainer}>
            <div className={s.aboutTitle}>
              <h1>About <span className={s.city}>{this.props.city.title}</span></h1>
            </div>
            <div className={s.aboutDescription}>
              <div className={s.description} dangerouslySetInnerHTML={{ __html: this.props.city.description }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
