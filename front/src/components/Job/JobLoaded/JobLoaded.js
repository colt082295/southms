import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobLoaded.css';

class JobLoaded extends React.Component {
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
    const data = this.props.job;

    return (
      <div className={s.root}>
        <div className={s.container}>
                <div className={s.job}>
                  <div className={s.jobPosition}>
                    <h3>{data.position}</h3>
                  </div>
                  <div className={s.description} dangerouslySetInnerHTML={{ __html: data.description }}>
                  </div>
                </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobLoaded);
