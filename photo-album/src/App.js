import React from 'react'
import {
  Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia,
  CssBaseline, Grid, Toolbar, Container
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'


const App = () => {

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>        
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone this is a photo album and i'm trying to make this sentence as long as possible so we can see how does it look on the screen
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>                  
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Secondary action
                  </Button>                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App
