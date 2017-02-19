import React from 'react';
import Vehicles from './Vehicles';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Casinos';

export default {

  path: '/vehicles',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const vehicles = await fetch('http://www.southms.com/index.php/api/vehicles.json');
    const vehiclesData = await vehicles.json();
    const vehicleTypes = await fetch('http://www.southms.com/index.php/api/vehicle-types.json');
    const vehicleTypesData = await vehicleTypes.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();

    const info = {
      types: vehicleTypesData.types,
      locations: citiesData.data,
    };
    return {
      title,
      component: <Layout><Vehicles title={title} vehicles={vehiclesData} vehiclesInfo={info} /></Layout>,
    };
  },
};
