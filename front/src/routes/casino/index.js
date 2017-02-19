import React from 'react';
import Casino from './Casino';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Accommodation';

export default {

  path: '/casinos/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/casinos/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Casino title={title} casino={data} /></Layout>,
    };
  },
};
