import http from '../api/http-common';

const apikey = '8e84cdd176b7968875031e1e83485588';
const getFilmesPopulares = () => {
  return http.get(
    `/discover/movie/?api_key=${apikey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=1`
  );
};

const getBuscaFilme = (termo) => {
  return http.get(
    `search/movie?api_key=8e84cdd176b7968875031e1e83485588&language=pt-BR&query=${termo}&page=1&include_adult=false`
  );
};

export default {
  getFilmesPopulares,
  getBuscaFilme,
};
