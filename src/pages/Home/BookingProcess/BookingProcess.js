import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/bus-banner.jpg';

const backgroundImage2 = {
    width: "100%",
    height: "350px",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundImage: "url(" + banner + ")",
    backgroundColor: 'rgba(45,58,74,0.7)',
    backgroundBlendMode: 'darken, luminosity',
}

const button1 = {
    backgroundColor: '#CC2262',
    padding: '15px 33px',
    color: 'white'
}

const BookingProcess = () => {
    return (
        <Box style={backgroundImage2}>
                <Box>
                <Typography style={{ fontWeight: '500', size: '50px', color: 'white', letterSpacing: '2px', paddingTop:'50px' }} variant="h2" gutterBottom component="div">
                        BOOKING PROCESS?
                    </Typography>
                    <Typography style={{ size: '16px', color: 'white' }} variant="subtitle1" gutterBottom>
                    <Box >
                    i. Go to the Booking Section or Click Book a Bus. <br />
                    ii. Select Date and bus. <br />
                    iii. payment and book your bus.
                    </Box>
                    </Typography>
                        <Button style={{ ...button1, marginRight: '50px' }}>BOOK A BUS</Button>
                </Box>
            </Box>
    );
};

export default BookingProcess;