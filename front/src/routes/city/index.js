import React from 'react';
import City from './City';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/city/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const title = "city page";
    const resp = await fetch('http://www.southms.com/index.php/api/jobs/' + 4 + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><City title={title} city={data} /></Layout>,
    };
  },

};
