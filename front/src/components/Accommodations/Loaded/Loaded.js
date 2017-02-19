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
    accommodations: this.props.accommodations.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.accommodations.map(function (accommodation, i) {
            return (
              <Grid key={accommodation.id}>
                <a href={"/accommodations/" + accommodation.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{accommodation.title}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{accommodation.city}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeAccommodations={this.props.changeAccommodations} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
