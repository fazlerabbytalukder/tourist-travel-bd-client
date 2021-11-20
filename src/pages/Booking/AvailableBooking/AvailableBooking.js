import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleAvailableBooking from '../SingleAvailableBooking/SingleAvailableBooking';

const AvailableBooking = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container>
            <h2 style={{margin:'30px 0', color:'#CC2060'}}> <span style={{color:'black'}}>Available booking on</span> {date.toDateString()}</h2>
            <Grid container spacing={2}>
                {
                    services.map(service => <SingleAvailableBooking
                        key={service._id}
                        service={service}
                        date={date}
                    ></SingleAvailableBooking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableBooking;