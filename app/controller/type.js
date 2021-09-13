"use strict";

const Controller = require("egg").Controller;

class TypeController extends Controller {
  // 获取用户信息
  async list() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    // 通过 app.jwt.verify 方法，解析出 token 内的用户信息
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    if (!decode) return;
    // 通过 getUserByName 方法，以用户名 decode.username 为参数，从数据库获取到该用户名下的相关信息
    const list = await ctx.service.type.list();
    // userInfo 中应该有密码信息，所以我们指定下面四项返回给客户端
    ctx.body = {
      code: 200,
      msg: "请求成功",
      data: { list },
    };
  }
}
module.exports = TypeController;
