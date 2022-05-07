import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogogSection from "./logoSection.component";
import Classes from "./_appNavigation.module.scss";

const AppNavigation = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={`${Classes.navigationBar} navigationBar`}
          sx={{ backgroundColor: "#ffff" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              <div className={`${Classes.Banner} Logo_Banner`}>
                <LogogSection />
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppNavigation;
