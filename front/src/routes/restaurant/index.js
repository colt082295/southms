import React from 'react';
import Restaurant from './Restaurant';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Restaurant';

export default {

  path: '/restaurants/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/restaurants/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Restaurant title={title} restaurant={data} /></Layout>,
    };
  },
};
