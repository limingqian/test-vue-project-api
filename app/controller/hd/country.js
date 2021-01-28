const Controller = require('egg').Controller;

class CountryController extends Controller {
  async list() {
    const { id } = this.ctx.request.body;
    this.ctx.body = {
      id: id + 1
    }
    // const { label, value } = this.ctx.request.body;
    // if (label === 'label') {
    //   this.ctx.body = {
    //     data: [{
    //       label: '中国',
    //       value: 'zg'
    //     }, {
    //       label: '韩国',
    //       value: 'hg'
    //     }],
    //     errcode: 200,
    //   }
    // } else {
    //   this.ctx.body = {
    //     data: [{
    //       value: '中国',
    //       label: 'zg'
    //     }, {
    //       value: '韩国',
    //       label: 'hg'
    //     }],
    //     errcode: 200,
    //   }
    // }


  }
}

module.exports = CountryController;