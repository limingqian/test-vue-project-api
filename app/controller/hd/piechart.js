const Controller = require('egg').Controller;

class CountryController extends Controller {
  async list() {
    const { num } = this.ctx.request.body;
    let a = 300
    if (typeof(num) != "undefined") {
      a = num
    }
    this.ctx.body = {
      errcode: 200,
      data: {
        '搜索引擎': 1048,
        '直接访问': 735,
        '邮件营销': 580,
        '联盟广告': 484,
        '视频广告': a
      }
    }
  }
}

module.exports = CountryController;