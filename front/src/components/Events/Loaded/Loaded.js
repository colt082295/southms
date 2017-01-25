import React, { PropTypes } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Pagination from '../Pagination';
import Numeral from 'numeral';
import Moment from 'moment';
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

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.events.data.map(function (event, i) {

            event.time = Moment(event.dateCreated.date).format("M/D - ha");


            return (
              <div className={s.jobContainer} key={event.id}>
                <a href={"/event/" + event.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{event.eventName}</h3>
                    </div>
                    <div className={s.image}>
                      <div className={s.imageBackground} style={{background: 'url("https://upload.wikimedia.org/wikipedia/commons/1/1c/BiloxiLightHouseandVisitorsCenter.jpg")'}} >

                      </div>
                    </div>
                    <div className={s.eventMeta}>
                    </div>
                    <div className={s.description}>
                      <div dangerouslySetInnerHTML={{ __html: event.eventDescription }}></div>
                    </div>
                </a>
              </div>

            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeJobs={this.props.changeEvents} />
          <div className={s.ad}>Ad</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
