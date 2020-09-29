import http from '../api/http-common';

const apikey = '8e84cdd176b7968875031e1e83485588';
const getFilme = () => {
  return http.get(
    `/discover/movie/?api_key=${apikey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
};

export default {
  getFilme,
};
