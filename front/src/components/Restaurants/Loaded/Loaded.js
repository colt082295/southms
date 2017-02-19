import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import striptags from 'striptags';
import Pagination from '../../Pagination';
import Numeral from 'numeral';
import Moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  state = {
    restaurants: this.props.restaurants.data,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.restaurants.map(function (restaurant, i) {
            restaurant.description = striptags(restaurant.description, [], '\n');;


            return (
              <div className={s.jobContainer} key={restaurant.id}>
                <a href={"/restaurants/" + restaurant.id} className={s.job}>
                    <div className={s.jobPosition}>
                      <h3>{restaurant.title}</h3>
                      <div className={s.jobMeta}>
                        <p><i className="fa fa-tag" aria-hidden="true"></i>{restaurant.type}</p>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>{restaurant.city}</p>
                      </div>
                    </div>
                </a>
              </div>
            );
          })}
          <Pagination pagination={this.props.pagination} data={this.props.data} onLoadChange={this.props.onLoadChange} changeData={this.props.changeRestaurants} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
