'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/product", controller.product.index); //127.0.0.1:7001/product
  http: router.get("/product/detail", controller.product.detail); // http://127.0.0.1:7001/product/detail?id=11
  router.get("/product/detail/:id", controller.product.detail2); // http://127.0.0.1:7001/product/detail/111123
  router.post("/product/create", controller.product.create);
  // 2020-10-26 08:14:46,575 WARN 8782 [-/127.0.0.1/-/14ms POST /product/create] missing csrf token. See
  // https://eggjs.org/zh-cn/core/security.html#安全威胁csrf的防范

  // exports.security = {   // 写到config/config.default.js
  //   xframe: {
  //     enable: false,
  //   },
  // };

  // put 修改数据
  router.put("/product/update/:id", controller.product.update);
  router.delete("/product/delete/:id", controller.product.delete); // http://127.0.0.1:7001/product/delete/1001199
};
