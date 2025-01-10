import React, { useContext, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Switch,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { SettingsContext } from '../contexts/SettingsProvider';

const Header = () => {
    const { darkMode, toggleTheme } = useContext(SettingsContext);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Toggle mobile drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Link styles
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        margin: '0 15px',
    };

    const activeStyle = {
        fontWeight: 'bold',
        borderBottom: '2px solid currentColor',
    };

    // Drawer content for mobile view
    const drawer = (
        <Box sx={{ width: 250 }}>
            <IconButton
                onClick={handleDrawerToggle}
                sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}
            >
                <CloseIcon />
            </IconButton>
            <List>
                {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
                    <ListItem
                        button
                        key={index}
                        onClick={handleDrawerToggle} // Close drawer on navigation
                    >
                        <NavLink
                            to={`/${text.toLowerCase()}`}
                            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
                        >
                            <ListItemText primary={text} />
                        </NavLink>
                    </ListItem>
                ))}
            </List>
            <ListItem>
                <Typography variant="body1">{darkMode ? 'Light Mode' : 'Dark Mode'}</Typography>
                <Switch checked={darkMode} onChange={toggleTheme} />
            </ListItem>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Typography variant="h6">
                    <NavLink to="/" style={linkStyle}>
                        <img src={darkMode ?"#":"#"} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                    </NavLink>
                </Typography>


                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' }, // Hide links on small screens
                        gap: 2,
                    }}
                >
                    <NavLink
                        to="/"
                        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
                    >
                        Contact
                    </NavLink>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0
                        }}
                    >
                        <Switch checked={darkMode} onChange={toggleTheme} />
                        <Typography variant="body1">{darkMode ? 'Light Mode' : 'Dark Mode'}</Typography>
                    </Box>


                </Box>

                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>


            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Header;
