import React from 'react';
import RealEstate from './RealEstate';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Real Estate';

export default {

  path: '/real-estates',

  async action({ params, path, uri }) {
    const realEstates = await fetch('http://www.southms.com/index.php/api/real-estate.json');
    const realEstatesData = await realEstates.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();
    const realEstateInfo = await fetch('http://www.southms.com/index.php/api/real-estate-types.json');
    const realEstateInfoData = await realEstateInfo.json();

    const info = {
      types: realEstateInfoData.types,
      properties: realEstateInfoData.properties,
      locations: citiesData.data,
    };
    return {
      title,
      component: <Layout><RealEstate title={title} realEstates={realEstatesData} realEstateInfo={info} /></Layout>,
    };
  },
};
