import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {formatDate, formatPrice} from "../Functions/format";

export default function BookingConfirmationDialog({flight, open, handleClose, book}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {flight.origin} to {flight.destination}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Booking for
                    flight {flight.flightNumber.toUpperCase()} leaving {flight.origin} on {formatDate(flight.departureTime)},
                    arriving in {flight.destination} at {formatDate(flight.arrivalTime)}. The ticket price is
                    R {formatPrice(flight.seatCost)}.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={book} autoFocus>
                    Book
                </Button>
            </DialogActions>
        </Dialog>
    );
}