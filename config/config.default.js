/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_demo';

  // add your middleware config here
  config.middleware = [];

// /product/create] missing csrf token. See https://eggjs.org/zh-cn/core/security.html#安全威胁csrf的防范
// 暂时关闭csf  
config.security = {
    csrf: {
      enable: false,
    },
  };


  // ejs模板
  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
