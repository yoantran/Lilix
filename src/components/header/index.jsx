import {
    AppBar,
    Avatar,
    Box,
    Container, Grid2,
    IconButton,
    Menu,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const menuItems = [
    {
        label: 'Profile',
        img: 'src/assets/profile.png',
        path: '/profile'
    },
    {
        label: 'Lore',
        img: 'src/assets/lore.png',
        path: '/lore'
    },
    {
        label: 'Gallery',
        img: 'src/assets/gallery.png',
        path: '/gallery'
    },
    {
        label: 'Relationship',
        img: 'src/assets/relationship.png',
        path: '/relationship'
    },
];


export default function Header() {
    const navigate = useNavigate()
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [menuState, setMenuState] = useState("close")
    const { pathname } = useLocation();

    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
        setMenuState("open")
    };
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
        setMenuState("close")
    };
    const handleHomeClick = () => {
        navigate("/")
    }
    const handleMenuItemClick = (path) => {
        navigate(path);
        handleCloseMenu();
    }

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'black', txt: 'white', height: '80px',
                // paddingLeft: 0,
                // paddingRight: 0
            }}>
                <Container maxWidth="xl" sx={{ px: 0 }}>
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            {pathname !== '/' && pathname !== '/home' && ( // Conditional rendering
                            <Tooltip title="Go Back To Home">
                                <IconButton onClick={handleHomeClick} sx={{
                                    p: 0
                                }}>
                                    <Avatar alt="Menu" src="src/assets/home_icon.png" sx={{ width: 80, height: 80 }}/>
                                </IconButton>
                            </Tooltip>
                            )}
                        </Box>

                        <Box sx={{
                            display: 'inline-flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <Tooltip title="Open Menu">
                                <IconButton onClick={handleOpenMenu} sx={{
                                    p: 0 }}>
                                    <Avatar alt="Menu" src="src/assets/menu_icon_unopen.png" sx={{ width: 80, height: 80 }}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                    <Menu
                        anchorEl={anchorElMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElMenu)}
                        onClose={handleCloseMenu}
                        sx={{
                            mt: '80px',
                            '& .MuiPaper-root': {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% black transparency
                                width: '50%', // Set width to 50% of screen
                                minWidth: '250px', // Minimum width to ensure readability
                                overflowY: 'auto', // Enable vertical scrolling
                                maxHeight: '80vh', // Set maximum height to 80% of viewport height
                            },
                        }}
                    >
                        <Grid2 container spacing={2}>
                            {menuItems.map((item) => (
                                <Grid2 item xs={6} key={item.label}>
                                    <MenuItem
                                        onClick={() => handleMenuItemClick(item.path)}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.label}
                                                style={{ width: '50px', height: '50px' }}
                                            />
                                            <Typography sx={{ textAlign: 'center', mt: 1 }}>{item.label}</Typography>
                                        </Box>
                                    </MenuItem>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Menu>
                </Container>
            </AppBar>
        </>
    );
}