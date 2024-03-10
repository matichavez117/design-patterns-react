import { Button, Grid, Typography } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompoundComponents from './components/CompoundComponents/CompoundComponents'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant='h4' sx={{ mb: 4 }}>Design patterns</Typography>
      <Grid container justifyContent='center' spacing={1}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles}>
            Compound Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles}>
            Higher Order Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles}>
            Partially Controlled Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Button fullWidth variant='contained' sx={buttonStyles}>
            Polymorphic Components
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <CompoundComponents />
        </Grid>
      </Grid>
    </>
  )
}

export default App

const buttonStyles = {
  textTransform: 'none',
  height: 40,
  backgroundColor: '#B53EFE',
  '&:hover': { backgroundColor: '#9666FE' }
}
