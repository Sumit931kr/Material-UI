import './App.css';
import { Button, AppBar, Typography, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container, Card, CardContent } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import useStyles from './styles';


const ff = [1,2,3,4,5]

function App() {
  
  const classes = useStyles();
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]              
  
  return (
    <>
      {cards.map(() => {
        <h1>hloo</h1>
      })}
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <menu>
        <div className={classes.container}>

          <Container maxWidth='sm'>
            <Typography variant='h3' align='center' colors='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h6' align='center' colors='textSecondry' paragraph>
              HEllo everyone (Konichiwa ) my friends my anme is sumit and i am from uttar pradesh sand living in haryana in may circumstances do you need any kind of golmaal you can contact me

            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center" >
                <Grid item md={4}>
                  <Button variant='contained' color="primary"  >
                    See my photos
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant='outlined' color="primary"  >
                    See my photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent} >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography >
                      This is Media Card. You can use the section
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </menu>
    </>
  );
}

export default App;
