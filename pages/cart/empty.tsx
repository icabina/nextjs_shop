import NextLink from 'next/link';
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const Empty = () => {
  return (
    <ShopLayout title={'Carrito vacio'} pageDescription={'vacio'}>


        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{flexDirection: {xs:'column', sm:'row'}}}
            >
                <Box display='flex' flexDirection='column' alignItems='center'>
                <RemoveShoppingCartOutlined sx={{fontSize: 100,
                mb: 2}}/>
                <Typography variant='h2' component='h2'>
                Su carrito está vacío
                </Typography>
                    <NextLink href='/' passHref>
                        <Link typography='h4' color='secondary'>
                        Regresar
                        </Link>
                    </NextLink>
                    </Box>

        
        </Box>



    </ShopLayout>
  )
}

export default Empty