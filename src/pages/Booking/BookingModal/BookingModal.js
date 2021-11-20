import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, service, date, setBookingSuccess }) => {
    const { serviceName, price } = service;
    const { user } = useAuth();
    const initialInfo = { yourName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };

        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // alert('submitting')
        //collect data
        const booking = {
            ...bookingInfo,
            price,
            serviceName: serviceName,
            date: date.toLocaleDateString()
        }
        // console.log(booking);
        //send to the server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose();
                }
            })





        handleBookingClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {serviceName}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            id="filled-size-small"
                            label="Selected Price"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            id="filled-size-small"
                            name="yourName"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            id="filled-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            id="filled-size-small"
                            name="phone"
                            type="number"
                            label="Your Number"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            id="filled-size-small"
                            label="Selected Date"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button style={{ backgroundColor: '#CC2060', margin: '10px 120px' }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;