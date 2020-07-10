/**********************/
/* IMPORT */
/**********************/
// Config
import config from "~/config";

// Server
import http from "http";
import express from "express";
import bodyParser from "body-parser";

// Utils
import path from "path";
import CorsMiddleware from "~/middleware/cors";
// Routes
import routes from "~/routes";

let app;
let server;

const init = async () => {
  /**********************/
  /* APP */
  /**********************/

  app = express();
  server = http.Server(app);

  /**********************/
  /* EXPRESS APP */
  /**********************/
  app.enable("trust proxy");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(CorsMiddleware.fromUI);

  /**********************/
  /* */
  /**********************/
  app.use(path.join(config.apiPrefix, "."), routes);

  /**********************/
  /* */
  /**********************/
  console.log(`Listening on port ${config.port} - prefix ${config.apiPrefix}`);
  server.listen(config.port, "0.0.0.0");
};

export default init;
