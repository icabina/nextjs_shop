import { Box, Button } from "@mui/material";
import { FC } from "react"
import { ISize } from "../../interfaces/products";

interface Props{
    selectedSize?: ISize;
    sizes: ISize[];
}
export const ProductSize:FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box sx={{mb: 3}}>
        {
        sizes.map(size =>(
            <Button 
            key={size}
            size='small'
            color={selectedSize === size ? 'secondary' : 'info'}>
                {size}
           
            </Button>
        ))
        }
    </Box>
  )
}
