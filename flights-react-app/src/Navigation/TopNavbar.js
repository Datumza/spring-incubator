import {AppBar, Avatar, Box, Button, Chip, IconButton, Toolbar, Typography} from '@mui/material';
import FlightsPage from "../Flights/FlightsPage";
import {formatAvatar, formatUsername} from "../Functions/format";
import {deleteFromStorage, getFromStorage} from "../Authentication/StorageHandler";

export default function TopNavbar({user}) {
    const signOut = () => {
        deleteFromStorage('user')
        window.location.reload(false);
    };

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


                    <Chip label="Clickable" onClick={signOut} color="default" avatar={<Avatar>{formatAvatar(user)}</Avatar>} label={formatUsername(user)} />

                </Toolbar>
            </AppBar>
            <FlightsPage/>
        </Box>
    );
}