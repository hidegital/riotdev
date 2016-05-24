'use strict';

import riot     from 'riot'
import router   from 'riot-router'
//import riotForm from 'riot-form'
//import home     from './components/home.jade'
//import test1    from './components/test1.jade'
//import test2    from './components/test2.jade'
//import notfound from './components/notfound.jade'
//import list     from './components/list.jade'
//import testform from './components/testform.jade'
//import picker   from './components/picker.tag'
//import application from './components/application.tag'
import home     from './tag/home.tag'
import test1    from './tag/test1.tag'
import test2    from './tag/test2.tag'
import notfound from './tag/notfound.tag'
import htmltest from './tag/htmltest.tag'
import myform   from './tag/myform.tag'


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



var arrayhelper = {
	filterByLabels : function(items, labels, filter)
	{
		for (var item in items)
		{
			item = items[item]
			// We need a combinedvalue, consisting out of the itemvalues with the labels that exist
			// We search in a string that combines the value of each data row.
			var combinedValue = ''
			for (var label in labels)
			{
				label = labels[label]
				// concatenating the item value
				combinedValue += item[label]
			}
			// !~ means: If NOT -1, we lowercase everything so searching is easier.
			item.filtered = !~combinedValue.toLowerCase().indexOf(filter.toLowerCase())
		}
	}
}





