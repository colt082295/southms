import React from 'react';
import Home from './Home'; // Load the parent level Home component
//import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  action() {
    return {
      component: <Layout><Home /></Layout>, // Display the homepage
    };
  },

};
