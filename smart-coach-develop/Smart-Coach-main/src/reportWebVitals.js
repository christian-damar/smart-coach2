// Define a function called reportWebVitals that takes in a callback function called onPerfEntry
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is defined and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // If it is, import the 'web-vitals' library and then call the getCLS, getFID, getFCP, getLCP, and getTTFB functions from it, passing in the onPerfEntry callback function as an argument
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
