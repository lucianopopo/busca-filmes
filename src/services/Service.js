import http from '../api/http-common';

//const apikey = '8e84cdd176b7968875031e1e83485588';
//const termo = 'Star%20Wars';
const getFilme = () => {
  return http.get(
    `/search/movie?api_key=8e84cdd176b7968875031e1e83485588&language=pt-BR&page=1&query=Star%20Wars&include_adult=false`
  );
};

export default {
  getFilme,
};
