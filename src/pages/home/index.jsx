import Header from "../../components/header/index.jsx";
import {Box} from "@mui/material";
import Footer from "../../components/footer/index.jsx";

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
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
                    minHeight: 'calc(100vh - 160px)'
                }}
            >
                <Box sx={{
                    flexGrow: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url('src/assets/wallpaper_home1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%'
                }}>
                    {/*<img*/}
                    {/*    src={`src/assets/wallpaper_home1.png`}*/}
                    {/*    alt={"Welcome to Monstro Lounge"}*/}
                    {/*    loading="lazy"*/}
                    {/*/>*/}
                </Box>
            </Box>
            <Box sx={{ height: 'auto' }}>
                {/*render Header component*/}
                <Footer />
            </Box>
        </Box>
    );
}