require("dotenv").config();

const config = {
  apiPrefix: "/",
  port: process.env.PORT,
  clientHost: process.env.CLIENT_HOST,
  waitMsec: process.env.WAIT_MSEC ?? 0,
};

export default config;
