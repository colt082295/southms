import React from 'react';
import ThingToDo from './ThingToDo';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Restaurant';

export default {

  path: '/things-to-do/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/things-to-do/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><ThingToDo title={title} thing={data} /></Layout>,
    };
  },
};
