import React from 'react';
import Accommodations from './Accommodations';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Accommodations';

export default {

  path: '/accommodations',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const accommodations = await fetch('http://www.southms.com/index.php/api/accommodations.json');
    const accommodationsData = await accommodations.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();
    const accommodationTypes = await fetch('http://www.southms.com/index.php/api/accommodation-types.json');
    const accommodationTypesData = await accommodationTypes.json();

    const info = {
      types: accommodationTypesData.types,
      locations: citiesData.data,
    };
    return {
      title,
      component: <Layout><Accommodations title={title} accommodations={accommodationsData} accommodationsInfo={info} /></Layout>,
    };
  },
};
