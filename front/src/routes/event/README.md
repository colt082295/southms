This is the route for the Event page.

index.js is the default file. It loads the top-level event component. It is also making one api call right now. It calls for the info for the specific event. So if someone were to go to southms.com/event/6, then this index.js would make the call to southms.com/index.php/api/events/6 to get all of the info for that specific event.

Event.js is the top-level React component for the page (or the wrapper). It will then load the render component for the events page.

Event.css is the css (styling) code that is compiled with POSTCSS.
