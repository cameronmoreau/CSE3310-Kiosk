import config from './config';

export const apiCall = (url, options = {}) => {
  return fetch(`${config.url}${url}`).then((response) => response.json());
}