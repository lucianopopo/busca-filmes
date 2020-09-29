import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

const FormContainer = ({ children, title }) => {
  const styles = useStyles();
  return (
    <div>
      <Box width={600}>
        <h2>{title}</h2>
      </Box>
      <Paper variant="outlined" className={styles.paperContainer}>
        {children}
      </Paper>
    </div>
  );
};

export default FormContainer;
