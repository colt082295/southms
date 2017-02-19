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
    vehicles: this.props.vehicles.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.vehicles.map(function (vehicle, i) {
            return (
              <Grid key={vehicle.id}>
                <a href={"/vehicles/" + vehicle.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{vehicle.title}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{vehicle.city}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeVehicles={this.props.changeVehicles} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
