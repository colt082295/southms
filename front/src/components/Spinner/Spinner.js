import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Spinner.css';

class Spinner extends React.Component {
  render() {return (
    <div className={s.spinner}>
      <div className={s.rect1} />
      <div className={s.rect2} />
      <div className={s.rect3} />
      <div className={s.rect4} />
      <div className={s.rect5} />
    </div>
    );
  }
}

export default withStyles(s)(Spinner);
