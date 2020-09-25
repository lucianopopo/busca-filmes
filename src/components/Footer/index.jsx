//#region Imports

import Box from '@material-ui/core/Box';
import React from 'react';

//#endregion

export const Footer = ({ backgroundColor = 'gray', textColor = 'white' }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      position="fixed"
      zIndex={1201}
      bottom={0}
      left={0}
      right={0}
      width="100%"
      height="35px"
      bgcolor={backgroundColor}
    >
      <Box color={textColor} fontWeight="bold" paddingLeft={10} fontSize={12}>
        Busca Filmes © {new Date().getFullYear()} Nenhum o direito reservado.
        Pode copiar!
      </Box>
    </Box>
  );
};

export default Footer;
