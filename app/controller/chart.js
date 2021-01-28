const Controller = require('egg').Controller;

class ChartController extends Controller {
  async getChartData() {
    this.ctx.body = [10,20,30,40,50,60];
  }
}

module.exports = ChartController;