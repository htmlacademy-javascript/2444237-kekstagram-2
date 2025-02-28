import { loadPhotoErrorMessage, sendErrorMessage } from './messages.js';

const CURRENT_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

const load = async (route) => {
  const response = await fetch(`${CURRENT_URL}${route}`);
  return response.ok ? await response.json() : Promise.reject(sendErrorMessage());
};

const send = async (route, method, body) => {
  const response = await fetch(`${CURRENT_URL}${route}`, {method, body});
  return response.ok ? await response.json() : Promise.reject(loadPhotoErrorMessage());
};

export const getData = async () => await load(Route.GET_DATA);
export const sendData = async (body) => await send(Route.SEND_DATA, METHOD.POST, body);
