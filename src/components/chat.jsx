import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SmsIcon from "@mui/icons-material/Sms";

export const Chat = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: 50,
        right: 20,
      }}
    >
      <Fab variant="extended">
        <SmsIcon sx={{ mr: 1 }} />
        Chat
      </Fab>
    </Box>
  );
};
