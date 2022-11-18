import React from 'react'

import { Avatar, Box, Grid, Typography } from '@mui/material'
import { orange, grey, lightBlue } from '@mui/material/colors';
import { increment, decrement } from '../features/cart/cartSlice'


import { useSelector, useDispatch } from 'react-redux';

const ShopingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.Products)
    return (
        <div>
            <Grid container spacing={2} mt={10}>
                <Grid item xs={6} md={8} >

                    {products.map((product, ind) => {
                        return (
                            <Grid container spacing={2} key={ind} bgcolor="white" >
                                <Grid item md={2} >
                                    <Box>
                                        <img src={product.image} alt="" srcSet="" style={{ width: "100%" }} />
                                    </Box>
                                </Grid>
                                <Grid item md={5} >
                                    <Box>
                                        <Typography className="hide-overflow-text">{product.discription}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2} >
                                    <Box>
                                        <Typography sx={{ fontSize: "20px", color: orange[900] }}> Rs.{product.discountPrice}</Typography>
                                        <Typography sx={{ fontSize: "14px", textDecoration: "line-through", color: grey[500] }}> Rs.{product.price}</Typography>
                                        <Typography sx={{ fontSize: "14px", pl: 1 }}>-{product.discount}%</Typography>

                                    </Box>
                                </Grid>
                                <Grid item md={3} >
                                    <Box display="flex" alignItems="center">
                                        <Avatar sx={{ bgcolor: "grey", width: "30px", height: "30px", cursor: "pointer" }} variant="square"
                                            onClick={() => dispatch(decrement(product))}
                                       
                                       >
                                            -
                                        </Avatar>
                                        <Typography px={2}>{product.quantity}</Typography>
                                        <Avatar sx={{ bgcolor: "grey", width: "30px", height: "30px", cursor: "pointer" }} variant="square"
                                            onClick={() => dispatch(increment(product))}
                                        >
                                            +
                                        </Avatar>
                                    </Box>
                                </Grid>
                            </Grid>
                        )
                    })}


                </Grid>
                <Grid item xs={6} md={4} bgcolor="blue">
                    <Box>xs=6 md=4</Box>
                </Grid>
            </Grid >
        </div >
    )
}

export default ShopingCart