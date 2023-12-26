import { AppBar, Avatar, Box, Button, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export function Header() {
    let navigate = useNavigate();
    return (

        <Box sx={{ flexGrow: 1, width: '50%', ml: '25%' }}>
            <AppBar position="static" sx={{
                backgroundColor: "gray", borderRadius: '10px',
                opacity: '-moz-initial'
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75"
                            onClick={() => navigate("/")}
                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>

                    <FormControl color="secondary" size="small" fullWidth sx={{ borderColor: 'red' }}>
                        <InputLabel sx={{ color: 'yellow' }}>
                            Mood2Movie
                        </InputLabel>
                        <Select sx={{ color: "white " }} >

                            <MenuItem onClick={() => navigate("/popurarity")}>Top 50 Movie Of The Year</MenuItem>
                            <MenuItem value="name.desc">Name DESC</MenuItem>
                            <MenuItem value="mark.asc">Mark ASC</MenuItem>
                            <MenuItem value="mark.desc">Mark DESC</MenuItem>
                            <MenuItem value="gender.asc">Female</MenuItem>
                            <MenuItem value="gender.desc">Male</MenuItem>
                        </Select>
                    </FormControl>

                    <Button size='large' sx={{
                        backgroundColor: "gray", borderRadius: '10px',
                        opacity: '-moz-initial'
                        , color: 'gray'
                    }}>Edit Mood</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );

}