import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© SouthMS</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/jobs">Jobs</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/events">Events</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/about-us">About Us</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
