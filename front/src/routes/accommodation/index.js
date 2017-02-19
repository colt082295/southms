import React from 'react';
import Accommodation from './Accommodation';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Accommodation';

export default {

  path: '/accommodations/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/accommodations/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Accommodation title={title} accommodation={data} /></Layout>,
    };
  },
};
