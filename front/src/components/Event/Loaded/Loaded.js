import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {
  render() {
    const data = this.props.event;
    const time = Moment(data.time.date).format("h:mm A [on] MMMM Do");

    return (
      <div className={s.root}>
        <div className={s.container}>
                <div className={s.job}>
                  <div className={s.jobPosition}>
                    <h3>{data.title}</h3>
                    <div className={s.meta}>
                      <p>At {time} in {data.city}</p>
                    </div>
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
