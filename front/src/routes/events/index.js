import React from 'react';
import Events from './Events';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Events';

export default {

  path: '/events',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const resp = await fetch('http://www.southms.com/index.php/api/events.json');
    const events = await resp.json();
    const resp2 = await fetch('http://www.southms.com/index.php/api/job-info.json');
    const eventInfo = await resp2.json();
    //console.log("Got fetch!", jobs, jobInfo);
    return events && eventInfo && {
      title,
      component: <Layout><Events title={title} events={events} eventInfo={eventInfo} /></Layout>,
    };
  },
};
