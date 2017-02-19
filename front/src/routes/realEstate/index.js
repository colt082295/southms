import React from 'react';
import RealEstate from './RealEstate';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Real Estate';

export default {

  path: '/real-estates/:id',

  async action({ params, path, uri }) {
    const realEstate = await fetch('http://www.southms.com/index.php/api/real-estate/' + params.id + '.json');
    const realEstateData = await realEstate.json();
    return {
      title,
      component: <Layout><RealEstate title={title} realEstate={realEstateData} /></Layout>,
    };
  },
};
