This is the route for the Jobs page.

index.js is the default file. It loads the top-level jobs component. It is also making 4 api calls right now. It currently makes calls for jobs, job types (full-time, part-time, etc), job categories (technology, administrative, etc), and cities. I might want to place job types and categories into one api call. The cities has to stay separate because other pages make calls to only it.

Jobs.js is the top-level React component for the page (or the wrapper). It will then load the render component for the events page.

Jobs.css is the css (styling) code that is compiled with POSTCSS.
