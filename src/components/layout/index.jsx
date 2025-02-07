import Header from "../header/index.jsx";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

export default function Layout() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: 'black',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ height: 'auto' }}>
                {/*render Header component*/}
                <Header />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    overflow: 'hidden',
                    minHeight: 'calc(100vh - 80px)'
                }}
            >
                <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}