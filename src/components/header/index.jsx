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
import React from "react";

const pages = ['Profile', 'Lore', 'Gallery', 'Relationship'];

export default function Header() {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'black', txt: 'white', height: '80px' }}>
                <Container maxWidth="xl">
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

                        <Box sx={{ flexGrow: 1 }} /> {/* This will push the menu icon to the right */}

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: "flex-end" }}>
                            <Tooltip title="Open Menu">
                                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Menu" src="src/assets/menu_icon_unopen.png" sx={{ width: 80, height: 80 }}/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '80px' }}
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
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}