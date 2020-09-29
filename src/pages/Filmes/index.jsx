//#region Imports

import React from 'react';
import Cartao from '../../components/Cartao';
import Search from '../../components/Search';
import Box from '@material-ui/core/Box';
import FormContainer from './../../containers/FormContainer/index';

//#endregion

const Filmes = () => {
  return (
    <div>
      <FormContainer title="Busca de Filmes">
        <Search></Search>
      </FormContainer>
      <Box
        display="flex"
        flexWrap="wrap"
        css={{ width: 1200, display: 'inline-block' }}
      >
        <Cartao />
        <Cartao />
        <Cartao />
        <Cartao />
        <Cartao />
        <Cartao />
        <Cartao />
        <Cartao />
      </Box>
    </div>
  );
};

export default Filmes;
