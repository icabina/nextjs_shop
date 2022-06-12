import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen'} pageDescription={'Summary order of cart'}>  
    <Typography variant='h1' component='h1'>Resumen de compra</Typography>

    <Grid container>
        <Grid item xs={12} sm={7}>
    <CartList editable={false}/>
        </Grid>
        <Grid item xs={12} sm={5}>
            <Card className='summay-card'>
                <CardContent>
                    <Typography variant='h2'>
                        Resumen (3 productos)
                    </Typography>
                    <Divider sx={{my: 1}} />

                    <Box display='flex' justifyContent='end'>
                        <NextLink href='/checkout/address' passHref>
                            <Link underline='always'>
                                            Editar
                            </Link>
                        </NextLink>
                    </Box>



                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>
                        <Typography variant='subtitle1'>Test text</Typography>

                            <Divider sx={{my:1} }/>
                            <Box display='flex' justifyContent='end'>
                        <NextLink href='/cart' passHref>
                            <Link underline='always'>
                                            Editar
                            </Link>
                        </NextLink>
                    </Box>
                    <OrderSummary />

                    <Box sx={{mt:3}}>
                        <Button color="secondary" className='circular-btn' fullWidth>
                            Confirmar orden
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    </ShopLayout>
  )
}

export default SummaryPage