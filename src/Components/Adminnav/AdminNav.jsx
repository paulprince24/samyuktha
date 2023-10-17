import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { AdminNavSelectContext } from '../../Context/AdminNavSelectContext';

const pages = ['Home', 'Event', 'Admin', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { selectedAdminNavMenu, setSelectedAdminNavMenu } = React.useContext(AdminNavSelectContext)
    console.log(selectedAdminNavMenu);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuItemClick = (page) => {
        setSelectedAdminNavMenu(page)
        handleCloseNavMenu();
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(25 22 76)' }}>
            <div className="container-md">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                SAMYUKTHA Admin
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        mx: 1,
                                        color: 'white',
                                        borderRadius: '0',
                                        borderBottom: selectedAdminNavMenu === page ? '1px solid white' : 'none',
                                    }}
                                    onClick={() => handleMenuItemClick(page)}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ borderBottom: selectedAdminNavMenu === page ? '2px solid white' : 'none' }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </Container>
            </div>
        </AppBar>
    );
}

export default ResponsiveAppBar;
