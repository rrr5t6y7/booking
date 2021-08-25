/* eslint-disable arrow-parens */
/* eslint-disable quotes */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  router.get("/", controller.home.index);
  router.post("/add", controller.home.add);
  router.get("/user", controller.home.user);
  router.post("/add_user", controller.home.addUser);
  router.post("/edit_user", controller.home.editUser);
  router.post("/delete_user", controller.home.deleteUser);
  router.post("/api/user/register", controller.user.register);
  router.post("/api/user/login", controller.user.login);
  router.post("/api/user/edit_userinfo", _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.get("/api/user/test", controller.user.test); // 放入第二个参数，作为中间件过滤项
  router.get("/api/user/get_userinfo", _jwt, controller.user.getUserInfo); // 获取用户信息
};
