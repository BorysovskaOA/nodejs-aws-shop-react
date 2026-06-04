type NotificationListener = (state: NotificationState) => void;

interface NotificationState {
  open: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
}

let state: NotificationState = { open: false, message: "", severity: "error" };
const listeners = new Set<NotificationListener>();

export const notificationStore = {
  showAlert(message: string, severity: "error" | "warning" = "error") {
    state = { open: true, message, severity };
    listeners.forEach((listener) => listener(state));
  },
  hideAlert() {
    state = { ...state, open: false };
    listeners.forEach((listener) => listener(state));
  },
  subscribe(listener: NotificationListener) {
    listeners.add(listener);
    listener(state);
    return () => {
      listeners.delete(listener);
    };
  },
};
