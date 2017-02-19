import React from 'react';
import Golf from './GolfCourses';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/golf-courses',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const title = "Golf courses page";
    const courses = await fetch('http://www.southms.com/index.php/api/golf-courses.json');
    const coursesData = await courses.json();
    const courseTypes = await fetch('http://www.southms.com/index.php/api/golf-course-types.json');
    const courseTypesData = await courseTypes.json();
    const cities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const citiesData = await cities.json();

    const info = {
      types: courseTypesData.types,
      locations: citiesData.data,
    };
    return {
      component: <Layout><Golf title={title} courses={coursesData} coursesInfo={info} /></Layout>,
    };
  },

};
