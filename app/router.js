// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/dashboard/chart', controller.chart.getChartData);
  router.post('/api/form', controller.form.setForm);
  router.post('/user/login', controller.user.login);
  // 类型
  router.post('/type/create', controller.type.create);
  router.get('/type/list', controller.type.list);
  router.post('/type/delete', controller.type.delete);
  router.post('/type/update', controller.type.update);
  // 物品
  router.post('/good/create', controller.good.create);
  router.get('/good/list', controller.good.list);
  router.post('/good/delete', controller.good.delete);
  router.post('/good/update', controller.good.update);
  // 测试 for 慧鼎
  router.post('/country/list', controller.hd.country.list);
  router.post('/barchart/list', controller.hd.barchart.list);
  router.post('/linechart/list', controller.hd.linechart.list);
  router.post('/piechart/list', controller.hd.piechart.list);
  router.post('/timeline/list', controller.hd.timeline.list);
};