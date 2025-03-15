const API_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

const load = async (route) => {
  const response = await fetch(`${API_URL}${route}`);
  return response.ok ? await response.json() : Promise.reject();
};

const send = async (route, method, body) => {
  const response = await fetch(`${API_URL}${route}`, {method, body});
  return response.ok ? await response.json() : Promise.reject();
};

export const getData = async () => await load(Route.GET_DATA);
export const sendData = async (body) => await send(Route.SEND_DATA, METHOD.POST, body);
