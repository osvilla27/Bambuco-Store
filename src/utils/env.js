//const SERVER_IP = "127.0.0.1:8000"; 
const SERVER_IP = "bambuco.onrender.com"; 

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_TOKEN: "auth/refresh_token",
    PRODUCTS: "products",
    LANDINGS: "landings",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
