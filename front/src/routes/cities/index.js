import React from 'react';
import Cities from './Cities';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Locations';

export default {

  path: '/cities',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/locations.json');
    const locations = await resp.json();
    //console.log("Got fetch!", jobs, jobInfo);
    return locations && {
      title,
      component: <Layout><Cities title={title} locations={locations} /></Layout>,
    };
  },
};
