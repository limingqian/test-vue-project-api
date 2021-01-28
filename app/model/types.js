'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TypesSchema = new Schema(
    {
      name: String, // 分类名
      default_safe_date: Number // 默认保质期天数
    },
    app.config.mongoose.schemaOptions
  );

  return mongoose.model('Types', TypesSchema, 'types');
};