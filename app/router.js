/* eslint-disable arrow-parens */
/* eslint-disable quotes */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/add", controller.home.add);
  router.get("/user", controller.home.user);
};
