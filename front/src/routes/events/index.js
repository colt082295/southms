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
    const resp = await fetch('http://www.southms.com/index.php/api/events.json?city=*');
    const events = await resp.json();
    const eventTypes = await fetch('http://www.southms.com/index.php/api/event-types.json');
    const eventTypesData = await eventTypes.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();

    const eventsInfo = {
      types: eventTypesData.types,
      locations: citiesData.data,
    };
    return events && {
      title,
      component: <Layout><Events title={title} events={events} eventsInfo={eventsInfo} /></Layout>,
    };
  },
};
