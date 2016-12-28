import StaticDispatcher from '../commons/static/index';


export default class Routes {
   static init(app, router) {

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
