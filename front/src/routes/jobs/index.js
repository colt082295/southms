import React from 'react';
import Jobs from './Jobs';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Jobs';

export default {

  path: '/jobs',

  action() {
    return {
      title,
      component: <Layout><Jobs title={title} /></Layout>,
    };
  },

};
