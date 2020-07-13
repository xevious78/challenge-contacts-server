require("dotenv").config();

const config = {
  apiPrefix: "/",
  port: process.env.PORT,
  clientHost: process.env.CLIENT_HOST,
  waitMsec: process.env.WAIT_MSEC ?? 0,
  nbFakeContacts: process.env.NB_FAKE_CONTACTS ?? 0
};

export default config;
