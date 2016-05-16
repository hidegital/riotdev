'use strict';

import riot     from 'riot'
import router   from 'riot-router'

import home     from './components/home.jade'
import app      from './components/app.jade'
import test1    from './components/test1.jade'
import test2    from './components/test2.jade'
import notfound from './components/notfound.jade'
import list     from './components/list.jade'
import testform from './components/testform.jade'

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

var p = timeout(1000).then(() => {
	return timeout(2000);
}).then(() => {
	throw new Error("hmm");
}).catch(err => {
	return Promise.all([timeout(100), timeout(200)]);
});








