import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  render() {
    const data = this.props.vehicle;

    return (
      <div className={s.root}>
        <div className={s.container}>
                <div className={s.job}>
                  <div className={s.jobPosition}>
                    <h3>{data.title}</h3>
                    <div className={s.jobMeta}>
                      <p><i className="fa fa-tag" aria-hidden="true"></i>{data.category}</p>
                      <p><i className="fa fa-map-marker" aria-hidden="true"></i>{data.city}</p>
                    </div>
                  </div>
                  <div className={s.description} dangerouslySetInnerHTML={{ __html: data.description }}>
                  </div>
                </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
