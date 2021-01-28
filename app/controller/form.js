const Controller = require('egg').Controller;

class FormController extends Controller {
  async setForm() {
    this.ctx.body = [10,20,30,40,50,60];
  }
}

module.exports = FormController;