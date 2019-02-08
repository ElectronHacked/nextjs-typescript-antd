/* eslint-disable no-underscore-dangle */
import { get, has } from 'lodash';

export default {
  get: key => get(window.__CONFIG__, key),
  has: key => has(window.__CONFIG__, key),
};
/* eslint-enable no-underscore-dangle */
