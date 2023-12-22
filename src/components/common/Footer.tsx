import { AppBar, Avatar, Box, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export function Footer() {
    return (
        <Box alignItems="center" display="flex" alignContent="center" sx={{ flexGrow: 1, width: '50%', p: 3, margin: 'auto', ml: '40%' }}>
            <AppBar position="static" sx={{
                backgroundColor: "black", borderRadius: '10px',
                opacity: '-moz-initial'
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1 }} >
                        Made with
                        <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75" />
                        by
                        <Avatar alt="Remy Sharp" src="https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" />
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );

}