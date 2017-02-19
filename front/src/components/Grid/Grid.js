import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Grid.css';

class Grid extends React.Component {
  render() {

    return (
      <div className={s.grid}>
        <div className={s.gridItem}>
          {this.props.children}
        </div>
      </div>
    );
}}

export default withStyles(s)(Grid);
