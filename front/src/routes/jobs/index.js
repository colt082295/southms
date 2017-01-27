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
    const resp = await fetch('http://www.southms.com/index.php/api/jobs.json');
    const jobs = await resp.json();
    const resp2 = await fetch('http://www.southms.com/index.php/api/job-info.json');
    const jobInfo = await resp2.json();
    console.log("Pages:", jobs.meta.pagination.total_pages)
    //console.log("Got fetch!", jobs, jobInfo);
    return jobs && jobInfo && {
      title,
      component: <Layout><Jobs title={title} jobs={jobs} jobInfo={jobInfo} /></Layout>,
    };
  },
};
