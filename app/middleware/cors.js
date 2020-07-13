import cors from "cors";
import config from "../config";

const CorsMiddleware = {};

let whiteListUI;

if (process.env.NODE_ENV === "production") {
  whiteListUI = [config.clientHost];
} else if (process.env.NODE_ENV === "development") {
  whiteListUI = ["http://localhost:3000", config.clientHost];
}

const isDev = process.env.NODE_ENV === "development";

const optionsUI = {
  credentials: true,
  origin: (origin, cb) => {
    if (isDev) {
      return cb(null, true);
    }

    if (!origin) return cb(null, true);
    if (whiteListUI.indexOf(origin) !== -1) {
      return cb(null, true);
    } else {
      cb("Not allowed by CORS");
    }
  },
};

CorsMiddleware.base = (...args) => cors(...args);

CorsMiddleware.fromUI = cors(optionsUI);

export default CorsMiddleware;
