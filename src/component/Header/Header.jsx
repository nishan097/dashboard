import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/features/appLayout/applayoutslice";
import RenderInput from "../../global/Reusable/RenderInput";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "white",
}));

export default function Header() {
  const open = useSelector((state) => state.sidebarConfigure.sideBarEnable);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleSideBar());
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer()}
            edge="start"
            sx={{ ...(open && { display: "block" }) }}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
          <RenderInput
            type="dropDown"
            inputLable="आर्थिक वर्ष"
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            minWidth={200}
            dropDownData={[
              {
                id: "7576",
                value: "2075-2076",

              },
              {
                id: "7576",
                value: "2074-2075",

              },
              {
                id: "7576",
                value: "2073-2074",

              },
              {
                id: "7576",
                value: "2072-2073",

              },
              {
                id: "7576",
                value: "2071-2072",

              },
            ]}
          />
        </Box>

        <div style={{ display: 'flex', gap: "4px", color: "#000" }}>
          superadmin
        </div>
      </Toolbar>
    </AppBar>
  );
}
