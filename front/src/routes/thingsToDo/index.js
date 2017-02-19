import React from 'react';
import Things from './Things';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Things To Do';

export default {

  path: '/things-to-do',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const things = await fetch('http://www.southms.com/index.php/api/things-to-do.json');
    const thingsData = await things.json();
    const thingsTypes = await fetch('http://www.southms.com/index.php/api/things-to-do-types.json');
    const thingsTypesData = await thingsTypes.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();

    const info = {
      types: thingsTypesData.types,
      locations: citiesData.data,
    };
    return {
      title,
      component: <Layout><Things title={title} things={thingsData} thingsInfo={info} /></Layout>,
    };
  },
};
