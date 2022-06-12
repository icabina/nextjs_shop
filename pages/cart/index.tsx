import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const CartPage = () => {
  return (
    <ShopLayout title={'Cart'} pageDescription={'Summary order of cart'}>  
    <Typography variant='h1' component='h1'>Carrito</Typography>

    <Grid container>
        <Grid item xs={12} sm={7}>
            {/* CartList */}
        </Grid>
        <Grid item xs={12} sm={7}>
            <Card className='summay-card'>
                <CardContent>
                    <Typography variant='h2'>
                        Orden
                    </Typography>
                    <Divider sx={{my: 1}} />

                    {/* Order summary */}

                    <Box sx={{mt:3}}>
                        <Button color="secondary" className='circular-btn' fullWidth>
                            Checkout
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    </ShopLayout>
  )
}

export default CartPage