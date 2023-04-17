export const ENV = {
  BASE_PATH: `${process.env.REACT_APP_API_URL}`,
  BASE_API: `${process.env.REACT_APP_API_URL}/api`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_TOKEN: "auth/refresh_token",
    PRODUCTS: "products",
    LANDINGS: "landings",
  },
  API_WHATSAPP: {
    WHATSAPP: "whatsapp",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
