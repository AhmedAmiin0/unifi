import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

export default function SidebarItems({ handleDrawerToggle,navItems }) {
    return (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                The Nice App
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
