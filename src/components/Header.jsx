import { AppBar, Toolbar, Typography } from "@mui/material";
import DrawIcon from '@mui/icons-material/Draw';

const Header = () =>{
    return (
        <AppBar position='relative'>
            <Toolbar>
                <DrawIcon />
                <Typography variant='h6'>Sketch</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;