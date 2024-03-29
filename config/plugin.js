"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  jwt: {
    enable: true,
    package: "egg-jwt",
  },
  ejs: {
    enable: true,
    package: "egg-view-ejs",
  },
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
};
