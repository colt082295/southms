import React from 'react';
import Golf from './GolfCourse';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Golf Course';

export default {

  path: '/golf-courses/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/golf-courses/' + params.id + '.json');
    const data = await resp.json();
    //console.log("Got fetch!", data);
    return data && {
      title,
      component: <Layout><Golf title={title} course={data} /></Layout>,
    };
  },
};
