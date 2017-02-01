import React from 'react';
import Jobs from './Jobs';
import fetch from '../../core/fetch';
// import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

const title = 'Jobs';

export default {

  path: '/jobs',

  async action({ params, path, uri }) {
    // const route = await next();
    //console.log("Running fetch!", params, path, uri);
    const jobs = await fetch('http://www.southms.com/index.php/api/jobs.json?type=*&category=*&city=*');
    const jobsData = await jobs.json();
    //const resp2 = await fetch('http://www.southms.com/index.php/api/job-info.json');
    //const jobInfo = await resp2.json();
    const jobTypes = await fetch('http://www.southms.com/index.php/api/job-types.json');
    const jobTypesData = await jobTypes.json();
    console.log("jobTypes:", jobTypesData.data);
    const jobCities = await fetch('http://www.southms.com/index.php/api/cities.json');
    const jobCitiesData = await jobCities.json();
    console.log("jobCities:", jobCitiesData.data);
    const jobCategories = await fetch('http://www.southms.com/index.php/api/job-categories.json');
    const jobCategoriesData = await jobCategories.json();

    const jobInfo = {
      allCategories: jobCategoriesData.data,
      allTypes: jobTypesData.data,
      allLocations: jobCitiesData.data,
    };
    console.log("Job Info:", jobInfo);
    //console.log("Got fetch!", jobs, jobInfo);
    return jobs && /* jobInfo &&*/{
      title,
      component: <Layout><Jobs title={title} jobs={jobsData} jobInfo={jobInfo} /></Layout>,
    };
  },
};
