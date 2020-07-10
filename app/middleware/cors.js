import cors from "cors";

const CorsMiddleware = {};

let whiteListUI;

if (process.env.NODE_ENV === "production") {
  whiteListUI = ["http://localhost:3701"];
} else if (process.env.NODE_ENV === "development") {
  whiteListUI = [
    "http://localhost:3501",
    "http://127.0.0.1:3501",
    "http://192.168.1.27:3701",
    "http://192.168.1.47:3501",
    "http://localhost:3701",

  ];
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
  }
};

CorsMiddleware.base = (...args) => cors(...args);

CorsMiddleware.fromUI = cors(optionsUI);

export default CorsMiddleware;
