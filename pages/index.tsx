import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'

const Home = () => {
  return (
  <ShopLayout title={'Next Shop'} pageDescription={'Built with NextJS'}>

<Typography variant='h1' component='h1'>Tienda</Typography>
<Typography variant='h2' sx={{marginBottom: 1}}>Todos los productos</Typography>

  </ShopLayout>
  )
}

export default Home
