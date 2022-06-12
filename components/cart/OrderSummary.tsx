import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3</Typography>
        </Grid>
{/* //====================*/} 

        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${105.35}`}</Typography>
        </Grid>
{/* //====================*/}        
        <Grid item xs={6}>
            <Typography>Impuestos (15%)</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${14.35}`}</Typography>
        </Grid>
{/* //====================*/}        
<Grid item xs={6} sx={{mt:2}}>
            <Typography variant="subtitle1">Total</Typography>
        </Grid>

        <Grid sx={{mt:2}} item xs={6} display='flex' justifyContent='end'>
            <Typography variant="subtitle1">{`$${214.35}`}</Typography>
        </Grid>
  {/* //====================*/}       
    </Grid>
  )
}
