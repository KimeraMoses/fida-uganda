import React from "react";
import { Alert, IconButton } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

function AlertBanner({ type = "success", error, handleClose }) {
  return (
    <Alert
      severity={type}
      action={
        <IconButton
          onClick={handleClose}
          size="small"
          color="inherit"
          aria-label="close"
        >
          <CloseOutlined fontSize="inherit" />
        </IconButton>
      }
    >
      {error}
    </Alert>
  );
}

export default AlertBanner;
