'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const GoodsSchema = new Schema(
    {
      name: String, // 物品名称
      type_id: { type: Schema.Types.ObjectId, ref: 'Type' }, // 类型id
      type_name:String, // 类型名称
      safe_date: Number // 保质期天数
    },

    app.config.mongoose.schemaOptions
  );

  return mongoose.model('Goods', GoodsSchema, 'goods');
};