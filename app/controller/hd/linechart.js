const Controller = require('egg').Controller;

class CountryController extends Controller {
  async list() {
    const { begin, end } = this.ctx.request.body;
    this.ctx.body = {
      errcode: 200,
      data: {
        '销量': [120, 200, 150, 80, 70, 110, 130].splice(begin, end + 1),
        '销量1': [20, 100, 100, 180, 170, 10, 30].splice(begin, end + 1)
      }
    }
  }
}

module.exports = CountryController;