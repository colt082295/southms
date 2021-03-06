import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import striptags from 'striptags';
import Pagination from '../../Pagination';
import Grid from '../../Grid';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  state = {
    things: this.props.things.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.things.map(function (thing, i) {
            return (
              <Grid key={thing.id}>
                <a href={"/things-to-do/" + thing.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{thing.title}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{thing.city}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeThings={this.props.changeThings} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
