import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Person } from '@mui/icons-material';
import PieChartIcon from '@mui/icons-material/PieChart';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import BarChartIcon from '@mui/icons-material/BarChart';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export const BottomNavbar = () => {

    const [value, setValue] = React.useState(0); 

    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="fixed" 
            sx={{ bgcolor: "white", top: 'auto', bottom: 0, }}>

        <Toolbar>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
                sx={{
                    "& .Mui-selected, .Mui-selected > svg": {
                    color: " #b19cd9"
                    }
                }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction 
            component={Link} to='/closet'
            label="Closet"
            icon={<DoorSlidingIcon />} 
            />

            <BottomNavigationAction 
            component={Link} to='/closet-composition'
            label="Stats" 
            icon={<DonutSmallIcon />} 
            />


            <BottomNavigationAction 
            component={Link} to='/current-outfit'
            label="My Draft" 
            icon={<CheckroomIcon />} />

            <BottomNavigationAction 
            component={Link} to='/outfits'
            label="Outfits"
            icon={<DryCleaningIcon />} 
            />

            <BottomNavigationAction 
            component={Link} to='/add-item'
            // sx={{ margin: -2.5 }}
            fontSize='large'
            label="Add Item"
            icon={<AddAPhotoIcon />} 
            />

            {/* <BottomNavigationAction 
            component={Link} to='/user'
            label="Account" 
            icon={<PersonIcon />} 
            /> */}
        
        </BottomNavigation>
        </Paper>

        </Toolbar>
        </AppBar>
    </Box>
    );
}
