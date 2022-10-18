import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

export const BottomNavbar = () => {

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -15,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    return (

    <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="fixed" 
            sx={{ bgcolor: "#b19cd9", top: 'auto', bottom: 0, }}>

        <Toolbar>

            <Fab
                component={Link} to="/outfits"
                style={{ color: "white", backgroundColor: "#9cc4d9" }}
                sx={{ borderRadius: 20, }}
                size="small"
                variant="contained">
                <CheckroomIcon 
                fontSize="medium"/>
            </Fab>

            <StyledFab
                component={Link} to="/current-outfit"
                position="absolute"
                align="center"
                style={{ color: "white", backgroundColor: "#9cc4d9",}}
                sx={{ borderRadius: 20, margin: '0 auto', }}
                variant="contained"
                aria-label="add">
                <AddIcon /> 
            </StyledFab>

            <Box sx={{ flexGrow: 1 }} />
            <Fab
                component={Link} to="/user/1"
                style={{backgroundColor: "#9cc4d9"}}
                variant="contained"
                size="small">
                <AccountCircleOutlinedIcon
                style={{color: "white" , backgroundColor: "#9cc4d9"}}
                sx={{ borderRadius: 20 }}
                fontSize="large"
                />
            </Fab>

        </Toolbar>
        </AppBar>
    </Box>
    );
}
