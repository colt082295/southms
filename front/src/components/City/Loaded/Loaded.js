import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loaded.css';

class Loaded extends React.Component {

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.aboutContainer}>
            <div className={s.aboutTitle}>
              <h1>About Ocean Springs</h1>
            </div>
            <div className={s.aboutDescription}>
              <p>Ocean Springs is a city in Jackson County, Mississippi, about 2 miles (3.2 km) east of Biloxi and west of Gautier. It is part of the Pascagoula, Mississippi Metropolitan Statistical Area. The population was 17,225 at the 2000 U.S. Census. As of the 2010 U.S. Census, the city of Ocean Springs had a population of 17,442.</p>
                <p>The town has a reputation as an arts community. Its historic and secluded downtown area, with streets lined by live oak trees, is home to several art galleries and shops. It is also home to a number of ethnic restaurants relatively uncommon in surrounding communities.</p>
                <p>Ocean Springs was the hometown of the late Walter Inglis Anderson, a nationally renowned painter and muralist who died in 1965 from lung cancer. The town plays host to several festivals, including its Peter Anderson Festival and The Herb Festival.</p>
                <p>Ocean Springs was severely damaged on August 29, 2005, by Hurricane Katrina, which destroyed many buildings along the shoreline, including the Ocean Springs Yacht Club, and the wooden replica of Fort Maurepas, and gutted or flooded other buildings. Katrina's 28 ft (8.5 m) storm surge also destroyed the Biloxi Bay Bridge, which connected Biloxi to Ocean Springs.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loaded);
