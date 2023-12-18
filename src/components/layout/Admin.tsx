import {Box,} from "@mui/material";
import { Header, Body, Header2, Footer } from 'components/common';

export function AdminLayout() {
    // const classes = useStyles();

    return (
        <Box sx={{ bgcolor: "black", position: "relative" }}>
            <Header />
            <Body />
            <Footer/>
        </Box>
    );
}