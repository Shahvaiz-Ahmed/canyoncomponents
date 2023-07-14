import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { UserContext } from '../../UserContext';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../Static/Images/logo.png';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const { setsideMenuBar } = useContext(UserContext);
  const { cartCountBtn, setcartCountBtn,
    cartArray, setcartArray} = useContext(UserContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(24, 46, 73, 1)' }}>
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              component="div"
              alt="logo"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            />
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuSharpIcon
                style={{ fontSize: '2rem' }}
                onClick={() => {
                  setsideMenuBar(true);
                }}
              />
            </IconButton>
            <Link to="/request-quote">
              <Button
                variant="contained"
                sx={{ backgroundColor: '#F4976C', fontWeight: '600', marginTop: 1.4 }}
              >
                Get A Quote
              </Button>
            </Link>
            <IconButton size="large" edge="end" color="inherit">
              <AccountCircle style={{ color: '#fff', fontSize: '2rem' }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: '#F4976C', position: 'relative', left: '0.8rem' }}
              >
                <Link to="/Signin" style={{ color: '#F4976C' }}>
                  Login/Register
                </Link>
              </Typography>
            </IconButton>
          </Box>
          <Link to='/CartPopup' style={{display: 'flex', justifyContent: 'center', position: "relative", padding: "1rem"}}><div><ShoppingCartIcon  style={{ marginLeft: 25,  color: '#fff',  border: '#F4976C', cursor: 'pointer', scale: 2 }} /><div style={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "50%",
            backgroundColor: 'red',
            padding: "0.1rem",
            width: "1.5rem",
            textAlign: "center",
            color: 'white',
            fontWeight: 700
          }} >{cartCountBtn}</div></div> </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              onClick={() => {
                setsideMenuBar(true);
              }}
              color="inherit"
            >
              <MenuSharpIcon style={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
