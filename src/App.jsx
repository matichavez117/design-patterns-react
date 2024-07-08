import React, { useRef, useState } from 'react'
import { Button, Grid, Zoom, Typography, CircularProgress, Box } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CompoundComponents from './components/CompoundComponents/CompoundComponents'
import whitDataFetch from './components/HigherOrderComponents/withDataFetch'
import PartiallyControlledComponent from './components/PartiallyControlledComponents/PartiallyControlledComponent'
import PolymorphicComponent from './components/PolymorphicComponents/PolymorphicComponent'
import './App.css'
import ExtensibleStyles from './components/ExtensibleStyles/ExtensibleStyles'

function App(props) {
  const buttonRef = useRef(null);
  const [section, setSection] = useState('');

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant='h4' sx={{ mb: 4 }}>Design patterns in React</Typography>
      <Grid container justifyContent='center' spacing={1}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles} onClick={() => setSection('compoundComponents')}>
            Compound Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles} onClick={() => setSection('HigherOrderComponents')}>
            Higher Order Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles} onClick={() => setSection('partiallyControlledComponents')}>
            Partially Controlled Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles} onClick={() => setSection('polymorphicComponents')}>
            Polymorphic Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles} onClick={() => setSection('extensibleStyles')}>
            Extensible Styles
          </Button>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' sx={{ height: 100, width: 200 }} xs={12} sm={12} md={12} xl={12}>
          {section === 'HigherOrderComponents' &&
            <Zoom in={true}>
              <Box>
                {!props.loading ?
                  <Typography>Cantidad de pokemones: {props.data.count}</Typography>
                  :
                  <CircularProgress />
                }
              </Box>
            </Zoom>
          }
          {section === 'partiallyControlledComponents' &&
            <Zoom in={true}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <PartiallyControlledComponent ref={buttonRef} />
                <Button
                  variant='contained'
                  onClick={() => buttonRef.current.toggle()} //De esta manera se accede a la funcion guardad en toogle
                  sx={{ mt: 1 }}
                >
                  Father button
                </Button>
              </Box>
            </Zoom>

          }
          {section === 'compoundComponents' &&
            <Zoom in={true}>
              <Box>
                <CompoundComponents />
              </Box>
            </Zoom>
          }
          {section === 'polymorphicComponents' &&
            <Zoom in={true}>
              <Box>
                <PolymorphicComponent as='h2'>
                  Esto es un titulo
                </PolymorphicComponent>
                <PolymorphicComponent as='p'>
                  Esto es un parrafo
                </PolymorphicComponent>
              </Box>
            </Zoom>
          }
          {section === 'extensibleStyles' &&
            <Zoom in={true}>
              <Box>
                <ExtensibleStyles customStyle={{ color: 'red', borderColor: 'red' }} />
              </Box>
            </Zoom>
          }
        </Grid>
      </Grid>
    </>
  )
}

const AppWithFetch = whitDataFetch(App); //Esta es la manera de utilizar un Higher order component (HOC).

export default AppWithFetch;

const buttonStyles = {
  textTransform: 'none',
  height: 40,
  backgroundColor: '#B53EFE',
  '&:hover': { backgroundColor: '#9666FE' }
}
