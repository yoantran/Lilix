import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    Toolbar,
    Tooltip,
    Typography, useTheme
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const pages = ['Profile', 'Lore', 'Gallery', 'Relationship'];

export default function Header() {
    const navigate = useNavigate()
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [menuState, setMenuState] = useState("close")

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

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'black', txt: 'white', height: '80px',
                // paddingLeft: 0,
                // paddingRight: 0
            }}>
                <Container maxWidth="xl" sx={{ px: 0 }}>
                    <Toolbar disableGutters>
                        {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                        {/*<Typography*/}
                        {/*    variant="h6"*/}
                        {/*    noWrap*/}
                        {/*    component="a"*/}
                        {/*    href="#app-bar-with-responsive-menu"*/}
                        {/*    sx={{*/}
                        {/*        mr: 2,*/}
                        {/*        display: { xs: 'none', md: 'flex' },*/}
                        {/*        fontFamily: 'monospace',*/}
                        {/*        fontWeight: 700,*/}
                        {/*        letterSpacing: '.3rem',*/}
                        {/*        color: 'inherit',*/}
                        {/*        textDecoration: 'none',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    LOGO*/}
                        {/*</Typography>*/}

                        {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>*/}
                        {/*    <IconButton*/}
                        {/*        size="large"*/}
                        {/*        aria-label="account of current user"*/}
                        {/*        aria-controls="menu-appbar"*/}
                        {/*        aria-haspopup="true"*/}
                        {/*        onClick={handleOpenNavMenu}*/}
                        {/*        color="inherit"*/}
                        {/*    >*/}
                        {/*        <MenuIcon />*/}
                        {/*    </IconButton>*/}
                        {/*    <Menu*/}
                        {/*        id="menu-appbar"*/}
                        {/*        anchorEl={anchorElNav}*/}
                        {/*        anchorOrigin={{*/}
                        {/*            vertical: 'bottom',*/}
                        {/*            horizontal: 'left',*/}
                        {/*        }}*/}
                        {/*        keepMounted*/}
                        {/*        transformOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'left',*/}
                        {/*        }}*/}
                        {/*        open={Boolean(anchorElNav)}*/}
                        {/*        onClose={handleCloseNavMenu}*/}
                        {/*        sx={{ display: { xs: 'block', md: 'none' } }}*/}
                        {/*    >*/}
                        {/*        {pages.map((page) => (*/}
                        {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                        {/*                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>*/}
                        {/*            </MenuItem>*/}
                        {/*        ))}*/}
                        {/*    </Menu>*/}
                        {/*</Box>*/}
                        {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
                        {/*<Typography*/}
                        {/*    variant="h5"*/}
                        {/*    noWrap*/}
                        {/*    component="a"*/}
                        {/*    href="#app-bar-with-responsive-menu"*/}
                        {/*    sx={{*/}
                        {/*        mr: 2,*/}
                        {/*        display: { xs: 'flex', md: 'none' },*/}
                        {/*        flexGrow: 1,*/}
                        {/*        fontFamily: 'monospace',*/}
                        {/*        fontWeight: 700,*/}
                        {/*        letterSpacing: '.3rem',*/}
                        {/*        color: 'inherit',*/}
                        {/*        textDecoration: 'none',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    LOGO*/}
                        {/*</Typography>*/}
                        {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
                        {/*    {pages.map((page) => (*/}
                        {/*        <Button*/}
                        {/*            key={page}*/}
                        {/*            onClick={handleCloseNavMenu}*/}
                        {/*            sx={{ my: 2, color: 'white', display: 'block' }}*/}
                        {/*        >*/}
                        {/*            {page}*/}
                        {/*        </Button>*/}
                        {/*    ))}*/}
                        {/*</Box>*/}

                        <Box
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <Tooltip title="Go Back To Home">
                                <IconButton onClick={handleHomeClick} sx={{
                                    p: 0
                                }}>
                                    <Avatar alt="Menu" src="src/assets/home_icon.png" sx={{ width: 80, height: 80 }}/>
                                </IconButton>
                            </Tooltip>
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
                        // sx={{ mt: '80px' }}
                        id="menu-appbar"
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
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseMenu}>
                                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Container>
            </AppBar>
        </>
    );
}