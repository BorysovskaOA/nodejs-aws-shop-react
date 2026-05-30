import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { notificationStore } from "~/services/notificationStore";

export default function GlobalNotification() {
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: "error" as "error" | "warning",
  });

  useEffect(() => {
    const unsubscribe = notificationStore.subscribe((state) => {
      setAlertState({
        open: state.open,
        message: state.message,
        severity: state.severity as "error" | "warning",
      });
    });
    return unsubscribe;
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    notificationStore.hideAlert();
  };

  return (
    <Snackbar
      open={alertState.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={alertState.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}
