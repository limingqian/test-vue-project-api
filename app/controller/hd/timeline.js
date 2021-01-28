const Controller = require('egg').Controller;
var moment = require('moment');

class CountryController extends Controller {
  async list() {
    const { begin } = this.ctx.request.body;
    let a = 1608533219000
    console.log('++++++++++')
    console.log(moment(a).format('yyyy-MM-DD'))
    console.log('++++++++++')

    if (begin === 1) {
      this.ctx.body = {
        data: [{
          time: '2020-06-18',
          content: '双618大促'
        }, {
          time: '2020-06-19',
          content: '双619大促'
        }],
        errcode: 200,
      }
    }
  }
}

module.exports = CountryController;