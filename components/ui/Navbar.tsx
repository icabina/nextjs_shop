import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import NextLink from 'next/link'
import {SearchOffOutlined, ShoppingCartCheckoutOutlined} from '@mui/icons-material';
import { lightTheme } from "../../themes";



export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                <Typography variant='h6'>NextJS |</Typography>
                <Typography sx={{ml:0.5}}>Shop</Typography>
                </Link>
            </NextLink>

               
            <Box flex={1} />

           <Box sx={{display: {xs:'none', sm:'block'}}}>
                <NextLink href='category/men' passHref>
                    <Link>
                        <Button>Hombres</Button>
                    </Link>
                    </NextLink>
          
                <NextLink href='category/mujeres' passHref>
                    <Link>
                        <Button>Mujeres</Button>
                    </Link>
                    </NextLink>
          
                <NextLink href='category/chinos' passHref>
                    <Link>
                        <Button>Chinos</Button>
                    </Link>
                    </NextLink>
            </Box>
            
             <Box flex={1} />

             <IconButton>
                <SearchOffOutlined/>
             </IconButton>

             <NextLink href="/cart" passHref>
                <Link>
                <IconButton>
                    <Badge badgeContent={2} color='secondary'>

                    <ShoppingCartCheckoutOutlined/>
                    </Badge>
                </IconButton>
                </Link>
             </NextLink>


             <Button>Menú</Button>
        </Toolbar>
    </AppBar>
  )
}
