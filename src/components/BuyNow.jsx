import { Grid, Typography, Avatar, IconButton, Button } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { orange, grey, lightBlue } from '@mui/material/colors';


const BuyNow = () => {
    const location = useLocation();
    // console.log(location.state)
    let product = location.state

    return (

        <div>

            <Grid container spacing={2} mt={10} >
                <Grid item xs={6} md={8} >


                    <Grid container spacing={2} bgcolor="white" alignItems="center" p={1}>
                        <Grid item md={1} >
                            <Box>
                                <img src={product.image} alt="product.img" srcSet="" style={{ width: "100%" }} />
                            </Box>
                        </Grid>
                        <Grid item md={5} >
                            <Box>
                                <Typography className="hide-overflow-text" sx={{ fontSize: "11px" }}>{product.discription}</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={3} >
                            <Box>
                                <Typography sx={{ fontSize: "12px" }}>Qty:{product.quantity}</Typography>

                            </Box>
                        </Grid>
                        <Grid item md={3} >
                            <Box display='flex' justifyContent='end'>
                                <Box display='flex' alignItems='center' sx={{ bgcolor: grey[200], }}>
                                    <Typography px={1} sx={{ textDecoration: "line-through", fontSize: "12px", color: grey[700] }}>Rs. {product.price}</Typography>
                                    <Typography px={1} sx={{ fontSize: "12px", color: grey[700] }}>-{product.discount}%</Typography>
                                </Box>
                                <Typography pl={2} sx={{ fontSize: "13px" }}>Rs. {product.discountPrice}</Typography>

                            </Box>
                        </Grid>

                    </Grid>



                </Grid>
                <Grid item xs={6} md={4} >
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} >Order Summart</Typography>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant="subtitle2" fontWeight={600} >
                                Total Quantity :
                            </Typography>

                            <Typography variant="subtitle2" fontWeight={600} >
                                {product.quantity}
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant="subtitle2" fontWeight={600} >
                                Total Price :
                            </Typography>

                            <Typography variant="subtitle2" fontWeight={600} >
                                {product.quantity * product.discountPrice}
                            </Typography>
                        </Box>
                        <Button sx={{bgcolor:orange[800] , width:"100%", color:"white", "&:hover":{bgcolor:grey[500]} }}>Place Order</Button>
                    </Box>
                </Grid>
            </Grid >



        </div >
    )
}

export default BuyNow