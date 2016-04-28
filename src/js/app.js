'use strict';

import riot from 'riot'
import router from 'riot-router'

import home from './components/home.jade'
import app from './components/app.jade'
import notfound from './components/not-found.jade'

riot.mount('*');

const	Route = riot.router.Route,
		DefaultRoute = riot.router.DefaultRoute,
		NotFoundRoute = riot.router.NotFoundRoute,
		RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
	new DefaultRoute({tag: 'test1'}),
	new NotFoundRoute({tag: 'not-found'}),
	new Route({tag: 'home'})
]);

riot.router.start();









