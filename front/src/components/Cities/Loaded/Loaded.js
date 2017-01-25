import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  state = {
    locations: this.props.locations.locations,
  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.locations.map(function (county, i) {
            county = JSON.parse(county);
            console.log(county);

            return (
                    <div className={s.county} key={i}>
                      <h2>{county.county}</h2>
                      <div className={s.cities}>
                        {county.cities.map(function (city, i) {

                          return (
                            <div className={s.city} key={i}>
                              <a href=""><h4>{city}</h4></a>
                            </div>
                          )

                        })}
                      </div>
                    </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
