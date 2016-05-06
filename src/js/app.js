'use strict';

import riot     from 'riot'
import router   from 'riot-router'

import home     from './components/home.jade'
import app      from './components/app.jade'
import test1    from './components/test1.jade'
import test2    from './components/test2.jade'
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











