import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogogSection from "./logoSection.component";
import NavigationSection from "./naviagtionSection.component";
import ApplicationArea from "./applicationArea.component";
import Classes from "./_appNavigation.module.scss";
import Profile from "./Profile";

const AppNavigation = () => {
  const [getToken, setGetToken] = useState("");
  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("studentLogin"))?.token;
    if (token) {
      setGetToken(token);
    } else {
      setGetToken("");
    }
  }, [window.location.pathname]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={Classes.navigationBar}
          sx={{ backgroundColor: "#ffff" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              <div className={Classes.Banner}>
                <LogogSection />
              </div>
            </Typography>
            {getToken != "" ? (
              <div className="Profile">
                <Profile />
              </div>
            ) : null}
            {/* <NavigationSection /> */}
            {/* <ApplicationArea /> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppNavigation;
