import React from 'react';
import Vehicle from './Vehicle';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Vehicle';

export default {

  path: '/vehicles/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/vehicles/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Vehicle title={title} vehicle={data} /></Layout>,
    };
  },
};
