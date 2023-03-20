import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import '../css/flights.css'
import airplane from '../assets/airplane-icon.png'
import flying from '../assets/airplane-location-destination.png'
import FlightComponent from "./FlightComponent";


const steps = [
    'Select a flight',
    'Create an ad group',
    'Create an ad',
];

export default function FlightsPage() {
    return (
        // <Box sx={{ width: '100%' }}>
        //     <Stepper activeStep={1} alternativeLabel>
        //         {steps.map((label) => (
        //             <Step key={label}>
        //                 <StepLabel>{label}</StepLabel>
        //             </Step>
        //         ))}
        //     </Stepper>
        // </Box>

        <FlightComponent/>
    );
}