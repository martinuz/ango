import testController from '../controller/test-controller';

export default class testRoutes {
  static init(router) {
    router
      .route('/api/test')
      .get(testController.getAll);
  }
}
