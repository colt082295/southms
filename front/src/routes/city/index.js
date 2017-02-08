import React from 'react';
import City from './City';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};

export default {

  path: '/city/:id',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const title = "city page";
    params.id = params.id.toCamelCase();
    console.log("City slug is:", params.id);
    const resp = await fetch('http://www.southms.com/index.php/api/cities/' + params.id + '.json');
    const data = await resp.json();
    console.log("Got city info!", data);
    return data && {
      title,
      component: <Layout><City title={title} city={data} /></Layout>,
    };
  },

};
