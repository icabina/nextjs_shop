import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import {initialData} from '../database/products'


const Home = () => {
  return (
  <ShopLayout title={'Next Shop'} pageDescription={'Built with NextJS'}>

<Typography variant='h1' component='h1'>Tienda</Typography>
<Typography variant='h2' sx={{marginBottom: 1}}>Todos los productos</Typography>

      <ProductList products={initialData.products as any}/>


  </ShopLayout>
  )
}

export default Home
