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
  config.keys = appInfo.name + '_1591450884553_1070';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 连接数据库
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '1234',
      // database
      database: 'react-blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

    //跨域
    config.security = {
　　　　csrf: {enable: false},
　　　　domainWhiteList: [ '*' ]
　　};
    config.cors = {
      origin: 'http://localhost:3000',
      credentials: true,  //允许Cook可以跨域
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };

  return {
    ...config,
    ...userConfig,
  };
};
