/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./about').default,
    require('./jobs').default,
    require('./job').default,
    require('./events').default,
    require('./event').default,
    require('./city').default,
    require('./realEstate').default,
    require('./realEstates').default,
    require('./accommodation').default,
    require('./accommodations').default,
    require('./casino').default,
    require('./casinos').default,
    require('./restaurant').default,
    require('./restaurants').default,
    require('./vehicle').default,
    require('./vehicles').default,
    require('./thingToDo').default,
    require('./thingsToDo').default,
    require('./golfCourse').default,
    require('./golfCourses').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },

};
