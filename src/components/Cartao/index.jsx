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
    maxWidth: 250,
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
    paddingTop: '150%',
    marginTop: '60',
  },
});

const Cartao = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../assets/images/filme.jpg')}
          title="Filme"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Money Plane
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Um ladrão profissional com dívidas de 40 milhões de dólares deve
            cometer um último golpe - roubar um cassino aéreo futurista cheio
            dos criminosos mais perigosos do mundo.
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
