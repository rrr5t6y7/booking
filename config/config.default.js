/* eslint-disable quotes */
/* eslint-disable arrow-parens */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1629440685060_1315";

  // add your middleware config here
  // config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: "app/public/upload",
  };

  // config.view = {
  //   defaultViewEngine: "nunjucks",
  //   mapping: {
  //     ".tpl": "nunjucks",
  //   },
  //   pageSize: 5,
  //   serverUrl: "https://hacker-news.firebaseio.com/v0",
  // };

  // config.robot = {
  //   ua: [/Baiduspider/i],
  //   // ua: [/curl/i, /Baiduspider/i],
  // };

  // config.middleware = ["robot"];

  // config.news = {
  //   pageSize: 5,
  //   serverUrl: "https://hacker-news.firebaseio.com/v0",
  // };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"], // 配置白名单
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "175.24.112.44",
      // 端口号
      port: "3306",
      // 用户名
      user: "wjj",
      // 密码
      password: "wjj123456", // 初始化密码，没设置的可以不写
      // 数据库名
      database: "jj", // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.jwt = {
    secret: "Nick",
  };

  config.multipart = {
    mode: "file",
  };

  config.cors = {
    origin: "*", // 允许所有跨域访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  return {
    ...config,
    ...userConfig,
  };
};
