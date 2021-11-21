import React from 'react';
import { Card, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';



const Review = (props) => {
    const { name, review, star, img } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, height: '150px', border: 0, boxShadow: 2 }}>
                <Box style={{display:'flex', justifyContent:'spaceBetween', alignItems:'center'}}>
                    <Box style={{textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
                        <CardMedia
                            component="img"
                            style={{ width: '50px', borderRadius: '50%', marginLeft:'10px' }}
                            image={img}
                            alt="your img"
                        />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="body2" sx={{ fontSize: 14, color: '#8A513D', fontWeight: 400 }} >
                                {name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                <i style={{ color: '#8A513D', margin: '5px' }} class="fas fa-quote-left fa-1x"></i>
                                {review}
                                <i style={{ color: '#8A513D', margin: '5px' }} class="fas fa-quote-right fa-1x"></i>
                            </Typography>
                        </CardContent>
                        <Stack spacing={1}>
      <Rating name="size-small" defaultValue={parseFloat(star)} size="small" />
    </Stack>
                        {/* <StarRatings
                            rating={parseFloat(star)}
                            starDimension="15px"
                            starSpacing="10px"
                        /> */}
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default Review;