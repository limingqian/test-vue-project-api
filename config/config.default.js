exports.keys = 'test-vue-project-lmq';

exports.cluster = {
  listen: {
    port: 8080,
    hostname: '127.0.0.1' // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    // path: '/var/run/egg.sock',
  }
};

exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  }
  // domainWhiteList: ['http://localhost:8083']
};

exports.cors = {
  origin: '*',
  // origin: 'http://localhost:8084',
  // origin: 'http://localhost',
  // origin: ['http://localhost:8084', 'http://localhost'],
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};

exports.mongoose = {
  url: 'mongodb://root:123456@127.0.0.1:27017/test-vue-project',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
