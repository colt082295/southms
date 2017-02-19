import React from 'react';
import Casinos from './Casinos';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Casinos';

export default {

  path: '/casinos',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const casinos = await fetch('http://www.southms.com/index.php/api/casinos.json');
    const casinosData = await casinos.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();

    const info = {
      locations: citiesData.data,
    };
    return {
      title,
      component: <Layout><Casinos title={title} casinos={casinosData} casinosInfo={info} /></Layout>,
    };
  },
};
