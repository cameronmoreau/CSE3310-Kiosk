import config from './config';

export const apiCall = (url, options = {}) => {
  return fetch(`${config.url}${url}`, options)
    .then(validate);
}

const validate = (response) => {
  if(response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    console.log('error');
    console.log(response);
    throw new Error('an error occured');
  }
}