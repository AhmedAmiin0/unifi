import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useState } from 'react';
import SidebarItems from './SidebarItems';
import { navItems } from './navItems'
import NavBar from './NavBar';
import SideBar from './SideBar';
export const ModeContext = createContext();

function Layout(props) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mode, setMode] = useState('dark')
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const theme = createTheme({
        palette: { mode },
    });



    return (
        <ModeContext.Provider value={{ mode, setMode }}>

            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <NavBar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
                    <SideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
                    <Box component="main" sx={{ p: 3, width: '100%' }}>
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </ThemeProvider >

        </ModeContext.Provider>
    );
}



export default Layout;