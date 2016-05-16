'use strict';

import riot     from 'riot'
import router   from 'riot-router'
import form     from 'riot-form-mixin'

import home     from './components/home.jade'
import app      from './components/app.jade'
import test1    from './components/test1.jade'
import test2    from './components/test2.jade'
import list 	from './components/list.jade'
import notfound from './components/notfound.jade'

riot.mount('*');

const	Route = riot.router.Route,
		DefaultRoute = riot.router.DefaultRoute,
		NotFoundRoute = riot.router.NotFoundRoute,
		RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
	new DefaultRoute({tag: 'home'}),
	new NotFoundRoute({tag: 'notfound'}),
	new Route({tag: 'test1'}),
	new Route({tag: 'test2'})
]);

riot.router.start();


/*下記でfunctionをimport,module以下にmoduleを持つ*/
import test from './module/testFnc';
test();

import timeout from './module/setTimeOut';

//var p = timeout(1000).then(() => {
//	return timeout(2000);
//}).then(() => {
//	throw new Error("hmm");
//}).catch(err => {
//	return Promise.all([timeout(100), timeout(200)]);
//});


riot.mixin('form', form);

//function IdMixin() {
//	this.getId = function() {
//		return this._id
//	}
//}
//
//var id_mixin_instance = new IdMixin()






