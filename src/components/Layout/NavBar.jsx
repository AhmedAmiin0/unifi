import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ModeContext } from './Layout';

export default function NavBar({ handleDrawerToggle, navItems }) {
    const navigate = useNavigate();
    const { mode, setMode } = useContext(ModeContext)
    const handleModeChange = () => {
        const newMode = mode === 'light' ? 'dark' : 'light'
        localStorage.setItem(newMode)
        setMode(newMode)
    }
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.name} sx={{ color: '#fff' }}
                            onClick={() => navigate(item.path)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
                <IconButton onClick={handleModeChange}>
                    <Brightness4Icon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
