import {Avatar, Box, Container, Grid2, IconButton, Menu, Toolbar, Tooltip, Typography} from "@mui/material";
import React, {useState} from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuItem from "@mui/material/MenuItem";

const pages = [
    {
        label: "Facebook",
        icon: <FacebookIcon sx={{ color: 'white', width: '30px', height: '30px' }} />,
        link: 'https://www.facebook.com/mie.tran.397293/'
    },
    {
        label: "Twitter",
        icon: <TwitterIcon sx={{ color: 'white', width: '30px', height: '30px' }} />,
        link: 'https://x.com/yuu_mie0612'
    },
    // Add more social media links here
];

export default function Footer() {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [menuState, setMenuState] = useState("close")
    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
        setMenuState("open");
    };
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
        setMenuState("close");
    };

    return (
        <Box component="footer" sx={{
            // py: 2,
            // px: 2,
            // mt: 'auto',
            backgroundColor: 'black',
            height: '80px' // Set the height of the footer to 80px
        }}>
            <Container maxWidth="xl" sx={{px: 0}}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body2" align="center"
                                sx={{
                                    flexGrow: 1,
                                    width: '50vw', // Use vw unit for half screen width
                                    maxWidth: '500px',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis'
                                }}>
                        All the artwork and contents belong to @Miemiekyu. <br/>
                        The act of reposting, copying and re-editing my works is strictly prohibited.
                    </Typography>
                    </Box>

                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
                        }}>
                        <Tooltip
                            title=
                                {
                                    <div>
                                        <p>Hi, I worked hard on this.<br/>
                                            If u r interested in me and my work, feel free to explore the links by clicking on me. <br/>
                                            Hope y&#39;all enjoy your stay~</p>
                                    </div>
                                }
                        >
                            <IconButton
                                sx={{p: 0}}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenMenu}
                            >
                                <Avatar alt="Mie" src="src/assets/author_icon.png" sx={{width: 50, height: 50}}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElMenu)}
                            onClose={handleCloseMenu}
                            sx={{
                                mt: '60px',
                                '& .MuiPaper-root': {
                                    backgroundColor: 'transparent', // Set background to transparent
                                    width: '50%',
                                    minWidth: '250px',
                                    overflowY: 'auto',
                                    maxHeight: '80vh',
                                },
                            }}
                        >
                            <Grid2 container spacing={2}
                                   sx={{
                                       display: 'flex',
                                       justifyContent: 'center',
                                       flexWrap: 'wrap'}}
                            >
                                {pages.map((item) => (
                                    <Grid2 item xs={6} key={item.label}>
                                        <MenuItem
                                            onClick={() => window.open(item.link, '_blank')}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                        </MenuItem>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Menu>
                    </Box>

                        {/*    {menuState === "open" ? (*/}
                        {/*    <Menu*/}
                        {/*        anchorEl={anchorElMenu}*/}
                        {/*        anchorOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'right',*/}
                        {/*        }}*/}
                        {/*        keepMounted*/}
                        {/*        transformOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'right',*/}
                        {/*        }}*/}
                        {/*        open={Boolean(anchorElMenu)}*/}
                        {/*        onClose={handleCloseMenu}*/}
                        {/*        sx={{*/}
                        {/*            mt: '80px',*/}
                        {/*            '& .MuiPaper-root': {*/}
                        {/*                backgroundColor: 'white', // 50% black transparency*/}
                        {/*                width: '50%', // Set width to 50% of screen*/}
                        {/*                minWidth: '250px', // Minimum width to ensure readability*/}
                        {/*                overflowY: 'auto', // Enable vertical scrolling*/}
                        {/*                maxHeight: '80vh', // Set maximum height to 80% of viewport height*/}
                        {/*            },*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <Grid2 container spacing={2}>*/}
                        {/*            <MenuItem>*/}
                        {/*                <IconButton*/}
                        {/*                    color="primary"*/}
                        {/*                    aria-label="Facebook"*/}
                        {/*                    onClick={() => window.open('https://www.facebook.com/mie.tran.397293/')}*/}
                        {/*                >*/}
                        {/*                    <FacebookIcon />*/}
                        {/*                </IconButton>*/}
                        {/*            </MenuItem>*/}
                        {/*            <MenuItem>*/}
                        {/*                <IconButton*/}
                        {/*                    color="primary"*/}
                        {/*                    aria-label="Twitter"*/}
                        {/*                    onClick={() => window.open('https://x.com/yuu_mie0612')}*/}
                        {/*                >*/}
                        {/*                    <TwitterIcon />*/}
                        {/*                </IconButton>*/}
                        {/*            </MenuItem>*/}
                        {/*        </Grid2>*/}
                        {/*    </Menu>*/}
                        {/*) : (*/}
                        {/*    <Box*/}
                        {/*        sx={{*/}
                        {/*            flexGrow: 1,*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*)*/}
                        {/*}*/}


                </Toolbar>
            </Container>
        </Box>
);
}