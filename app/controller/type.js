const Controller = require('egg').Controller;

class TypeController extends Controller {
  async list() {
    this.ctx.body = await this.ctx.model['Types'].find()
  }
  async create() {
    const { name, default_safe_date } = this.ctx.request.body;
    let result = await this.ctx.model['Types'].create({ name, default_safe_date })
    if (result) {
      this.ctx.body = true;
    } else {
      this.ctx.body = false;
    }
  }

  async delete() {
    const { _id } = this.ctx.request.body;
    let result = await this.ctx.model['Types'].remove({ _id })
    if (result) {
      this.ctx.body = true;
    } else {
      this.ctx.body = false;
    }
  }
  async update() {
    let result = await this.ctx.model['Types'].updateOne({ _id: this.ctx.request.body._id }, this.ctx.request.body)
    if (result) {
      this.ctx.body = true;
    } else {
      this.ctx.body = false;
    }
  }
}

module.exports = TypeController;