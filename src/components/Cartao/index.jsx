import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 650,
    marginTop: 12,
    marginRight: 12,
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '140%',
    marginTop: '60',
  },
});

const Cartao = ({ imagem, titulo, descricao }) => {
  const classes = useStyles();
  const foto = `http://image.tmdb.org/t/p/w500${imagem}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={foto} title="Filme" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descricao.substr(0, 140)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cartao;
