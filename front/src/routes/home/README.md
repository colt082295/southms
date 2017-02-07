This is the route for the hompeage.

index.js is the default file. It loads the top-level homepage component. It will also be making any calls needed to the api to get data. We can either wait on the data (which I'm using by default in this project) or we can load it along with rendering the page with a loading symbol of some kind.

Home.js is the top-level React component for the page (or the wrapper). It will then load the render component for the homepage.

Home.css is the css (styling) code that is compiled with POSTCSS.
