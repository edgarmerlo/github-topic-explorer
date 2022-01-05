import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { useParams } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

// General header with topic search function
function Header() {
    const params = useParams();
    const searchTopic = (event) => {
        // Search function will be triggered on press Enter Key
        if(event.keyCode === 13 && event.target.value !== '') {  
            document.location = `/${event.target.value}`
        }
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, width: { xs: '100%' } }}
                >
                    {params.topicName}
                </Typography>
                <Input
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    startAdornment={
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                    }
                    onKeyDown={searchTopic}
                    type="search"
                />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
