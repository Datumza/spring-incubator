import {AppBar, Avatar, Box, Button, Chip, IconButton, Toolbar, Typography} from '@mui/material';
import FlightsPage from "../Flights/FlightsPage";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Molo Air
                    </Typography>

                    <Button color="inherit"> Search </Button>
                    <Button color="inherit"> Flights </Button>
                    <Button color="inherit"> Bookings </Button>

                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                </Toolbar>
            </AppBar>
            <FlightsPage/>
        </Box>
    );
}