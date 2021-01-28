'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UsersSchema = new Schema(
    {
      username: String, // 用户名
      pwd: String, // 密码
      role: String, // 权限
    },
    app.config.mongoose.schemaOptions
  );

  return mongoose.model('Users', UsersSchema, 'users');
};
