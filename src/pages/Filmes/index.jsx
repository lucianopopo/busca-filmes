//#region Imports

import React, { useState, useEffect } from 'react';
import Cartao from '../../components/Cartao';
import Search from '../../components/Search';
import Box from '@material-ui/core/Box';
import FormContainer from './../../containers/FormContainer/index';
import DataService from '../../services/Service';

//#endregion

const Filmes = () => {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    buscaFilmes();
  }, []);

  const buscaFilmes = () => {
    DataService.getFilmesPopulares()
      .then((response) => {
        setfilmes(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const listFilmes = filmes.map((filme) => (
    <Cartao
      imagem={filme.poster_path}
      titulo={filme.title}
      descricao={filme.overview}
    />
  ));

  return (
    <div>
      <FormContainer title="Busca de Filmes">
        <Search></Search>
      </FormContainer>
      <Box
        display="flex"
        flexWrap="wrap"
        css={{ width: 1300, display: 'inline-block' }}
      >
        {listFilmes}
      </Box>
    </div>
  );
};

export default Filmes;
