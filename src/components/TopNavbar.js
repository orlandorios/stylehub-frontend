import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import navLogo from '../resources/logos/StyleHub-Logo-Black.png'
import Fab from '@mui/material/Fab';
import { IconButton, Menu } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Link, useLocation, useParams } from 'react-router-dom';
import {Paper} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import { MenuItem } from '@mui/material';




export const TopNavbar = ({token}) => {

    const settings = ['Logout'];
    const location = useLocation()
    const {id} = useParams()
    // const [value, setValue] = React.useState(0);

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    
    const getTitle = () => {

        switch (location.pathname) {
                case '/closet':
                    return "My Closet"
                case '/add-item':
                    return "Add Closet Item"
                case '/outfits':
                    return "My Outfits"
                case '/outfit/:id':
                    return "Outfits"
                case '/current-outfit':
                    return "Current Outfit"
                case '/user':
                    return "User Profile"
                default:
                    return "My Outfits"
                }
            }

    return (
    <div style={{ paddingTop: 64 }}>
    <Box sx={{ flexGrow: 1, }}>
        <AppBar
            
            position="fixed"
            sx={{ bgcolor: "white", boxShadow:"3" }}>


        <Toolbar>

    <Link to="closet">
        <IconButton>
            <Box
                component="img"
                sx={{ height: 40, margin: -1 }}
                alt="nav logo"
                src={navLogo}
            />
        </IconButton>
    </Link>
            
            <Typography
                align='center'
                variant="h6" 
                component="div"
                fontFamily="helvetica-bold"
                fontSize={27}
                color='#9cc4d9'
                sx={{ flexGrow: 1, }}>
            {getTitle()}
            </Typography>

            <Box sx={{flexgrow: 0}}>
            <IconButton 
            style={{ color: '#b19cd9'}}
            onClick={handleOpenUserMenu}
            sx={{ p: 0,  }}
            fontSize='large'
            label='user'>
            <PersonIcon 
            />
            </IconButton>

            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
            </Menu>
            </Box>
            

        </Toolbar>
        </AppBar>
    </Box>
    </div>
    );
}
