This is the route for the Job page.

index.js is the default file. It loads the top-level job component. It is also making one api call right now. It calls for the info for the specific job. So if someone were to go to southms.com/jobs/6, then index.js would make the call to southms.com/index.php/api/jobs/6 to get all of the info for that specific job.

Job.js is the top-level React component for the page (or the wrapper). It will then load the render component for the job page.

Job.css is the css (styling) code that is compiled with POSTCSS.
