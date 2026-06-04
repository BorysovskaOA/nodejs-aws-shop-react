import React from "react";
import { createRoot } from "react-dom/client";
import App from "~/components/App/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "~/theme";
import axios from "axios";
import { notificationStore } from "~/services/notificationStore";
import GlobalNotification from "~/components/GlobalNotification/GlobalNotification";

const handleHttpErrors = (error: any) => {
  const status = error?.response?.status || error?.status;

  if (status === 401) {
    notificationStore.showAlert(
      "Session expired. Please log in again.",
      "error"
    );
  } else if (status === 403) {
    notificationStore.showAlert(
      "Access denied. You do not have permission to access this resource.",
      "error"
    );
  }
};

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) handleHttpErrors(err);
    return Promise.reject(err);
  }
);

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => handleHttpErrors(error),
  }),
  mutationCache: new MutationCache({
    onError: (error) => handleHttpErrors(error),
  }),
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: Infinity },
  },
});

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const container = document.getElementById("app");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <GlobalNotification />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
