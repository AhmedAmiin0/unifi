import { Box, Drawer } from '@mui/material'
import React from 'react'
import SidebarItems from './SidebarItems'
const drawerWidth = 240;

export default function SideBar({mobileOpen,handleDrawerToggle,navItems}) {

    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                open={mobileOpen}

                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <SidebarItems handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
            </Drawer>
        </Box>
    )
}
