import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [LoginUserName, setLoginUserName] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("studentLogin"))?.token;
    if (token) {
      navigate("/MainHome");
      const UserName = JSON.parse(
        sessionStorage.getItem("studentLogin")
      ).username;
      setLoginUserName(UserName);
    }
  }, [window.location.pathname]);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <div className="Profile_Wrapper">
      <Button
        id="demo-positioned-button"
        className="Profilebtn"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span>{LoginUserName}</span>
        <strong>
          <i class="fas fa-angle-down"></i>
        </strong>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="Menu_Wrap"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={""} onClick={handleLogout}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
