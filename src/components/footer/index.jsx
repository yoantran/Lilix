import {Box, Container, Link, Typography} from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box component="footer" sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: 'black',
            height: '80px' // Set the height of the footer to 80px
        }}>
            <Container maxWidth="sm">
                {/* Your logo or icon here */}
                {/* Example: */}
                <Typography variant="h6" align="center">
                    Your Logo
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}