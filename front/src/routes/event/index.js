import React from 'react';
import Event from './Event';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Event';

export default {

  path: '/events/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/events/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Event title={title} event={data} /></Layout>,
    };
  },
};
