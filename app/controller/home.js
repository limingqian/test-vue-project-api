const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = [10,20,30,40,50,60];
  }
}

module.exports = HomeController;