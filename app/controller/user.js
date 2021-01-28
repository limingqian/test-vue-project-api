const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { username, pwd } = this.ctx.request.body;
    // 根据username查询数据库
    let user = await this.ctx.model['Users'].findOne({ username }).lean();
    if (user && user.pwd === pwd) {
      this.ctx.body = user.role;
    } else {
      this.ctx.body = 'error';
    }
  }
}

module.exports = UserController;