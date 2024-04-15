declare global {
  interface Window {
    configs: {
      serviceURL: string;
    };
  }
}

export const serviceURL = window?.configs?.serviceURL ? window.configs.serviceURL : "http://localhost:3000/api/reservations";
