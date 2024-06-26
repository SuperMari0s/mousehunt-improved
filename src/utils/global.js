/**
 * Helper function to add a key and value to the global object.
 *
 * @param {string} key   Key to add.
 * @param {any}    value Value to add.
 */
const setGlobal = (key, value) => {
  // if we don't have a global object, create it
  if (! window.mhui) {
    window.mhui = {};
  }

  // add the key and value to the global object
  window.mhui[key] = value;
  app.mhui = mhui;
};

/**
 * Helper function to get a key from the global object.
 *
 * @param {string} key Key to get.
 *
 * @return {any|boolean} Value of the key or false if not found.
 */
const getGlobal = (key) => {
  if (window && window.mhui) {
    return window.mhui[key] || false;
  }

  if ('undefined' !== typeof app && app && app.mhui) {
    return app.mhui[key] || false;
  }

  return false;
};

export {
  setGlobal,
  getGlobal
};
