import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {
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
    const data = this.props.event;

    return (
      <div className={s.root}>
        <div className={s.container}>
                <div className={s.job}>
                  <div className={s.jobPosition}>
                    <h3>{data.eventName}</h3>
                  </div>
                  <div className={s.image}>
                    <div className={s.imageBackground} style={{background: 'url("https://upload.wikimedia.org/wikipedia/commons/1/1c/BiloxiLightHouseandVisitorsCenter.jpg")'}} >

                    </div>
                  </div>
                  <div className={s.description} dangerouslySetInnerHTML={{ __html: data.eventDescription }}>
                  </div>
                </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
