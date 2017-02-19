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
    casinos: this.props.casinos.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.casinos.map(function (casino, i) {
            return (
              <Grid key={casino.id}>
                <a href={"/casinos/" + casino.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{casino.position}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{casino.city}</p>
                      </div>
                    </div>
                </a>
              </Grid>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeData={this.props.changeCasinos} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
