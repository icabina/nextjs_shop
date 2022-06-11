import { Box, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../components/layouts'

const Error404 = () => {
  return (
    <ShopLayout title={'Error 404'} pageDescription={'type 404'}>


<Box 
    display='flex' 
    justifyContent='center' 
    alignItems='center' 
    height='calc(100vh - 200px)'
    sx={{flexDirection: {xs:'column', sm:'row'}}}
    >
        <Typography variant='h2' component='h1'>
            Error | 
        </Typography>
        <Typography variant='h2' component='h1'>
        404
        </Typography>
</Box>
    </ShopLayout>
  )
}

export default Error404