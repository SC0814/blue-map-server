const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const ret = await ctx.service.product.index()
    // ctx.body = "tyui";
    ctx.body = ret;
  }

  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = `info---${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = `info2----${ctx.query.id}`;
  }

  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { name } = ctx.request.body;
    ctx.body = {
      name,
    };
  }

  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id: ctx.params.id,
    };
  }

  async delete() {
    const { ctx } = this;
    console.log(ctx.params);

    ctx.body = {
      id: ctx.params.id,
    };
  }
}

module.exports = ProductController;