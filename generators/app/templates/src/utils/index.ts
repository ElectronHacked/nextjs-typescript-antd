/**
 * Returns the parameter value, from the url, by name
 * @param {string} name Parameter name
 * @param {string} url The url
 * @returns {string} The value of this parameter
 */
export const getParameterByName = (name: string, url: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
