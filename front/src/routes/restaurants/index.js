import React from 'react';
import Restaurants from './Restaurants';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/restaurants',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const title = "Restaurants page";
    const restaurants = await fetch('http://www.southms.com/index.php/api/restaurants.json');
    const restaurantsData = await restaurants.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();
    const restaurantTypes = await fetch('http://www.southms.com/index.php/api/restaurant-types.json');
    const restaurantTypesData = await restaurantTypes.json();

    const info = {
      types: restaurantTypesData.types,
      locations: citiesData.data,
    };
    return {
      component: <Layout><Restaurants title={title} restaurants={restaurantsData} restaurantsInfo={info} /></Layout>,
    };
  },

};
