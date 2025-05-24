
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Now Playing", path: "/now_playing" },
    { label: "Popular", path: "/popular" },
    { label: "Top Rated", path: "/top_rated" },
    { label: "Upcoming", path: "/upcoming" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Watchlist", path: "/watchlist" },
  ];
  

  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
     <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Rentables
          </Typography>

          
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">
              All you ever wanted to know about Movies!
            </Typography>
          </Box>
{isMobile ? (
  <>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={(e) => setAnchorEl(e.currentTarget)}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
    >
      {menuOptions.map((opt) => (
        <MenuItem key={opt.label} onClick={() => handleMenuSelect(opt.path)}>
          {opt.label}
        </MenuItem>
      ))}
    </Menu>
  </>
) : (
  <>
    {menuOptions.map((opt) => (
      <Button
        key={opt.label}
        color="inherit"
        onClick={() => handleMenuSelect(opt.path)}
      >
        {opt.label}
      </Button>
    ))}
  </>
)}

        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
