import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts"
import { ProductSlideShow } from "../../components/products";
import { initialData } from "../../database/products"

const product = initialData.products[0];

const Slug = () => {
  return (
   <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* slideshow */}
          <ProductSlideShow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
            <Box display='flex' flexDirection='column'>
 
                <Typography variant='h1' component='h1'>{product.title}</Typography>

                <Typography variant='subtitle1' component='h1'>{`$${product.price}`}</Typography>

                <Box sx={{my:2}}>
                <Typography variant='subtitle2'>Cantidad</Typography>
                </Box>



                <Button color="secondary" className="circular-btn">
                  Add to Cart
                </Button>

                {/* <Chip label="No hay disponibles" color='error' variant='outlined'/> */}



                <Box sx={{mt:3}}>
                  <Typography variant='subtitle2'>Description:</Typography>
                  <Typography variant='body2'>{product.description}:</Typography>
                </Box>


            </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default Slug