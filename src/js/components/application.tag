<application>
	<h2>Select Authors for this lesson</h2>
	<small if={authorFilter.length}>filtered {authorFilter.length}</small>
	<small if={authorPicks.length}>picked {authorPicks.length}</small>
	<picker name="authorPicker" items={lessonUsers} labels={['name', 'email', 'country']}></picker>

	<h2>Select People for hire</h2>
	<picker name="employeePicker" items={lessonUsers} labels={['id', 'name', 'job']}></picker>

	<script>

	this.authorFilter = false
	this.tags.authorPicker.on(
	'filtered', function(data)
	{
	this.authorFilter = data
	this.update()
	}.bind(this)
	)
	this.tags.authorPicker.on(
	'picked', function(data)
	{
	this.authorPicks = data
	this.update()
	}.bind(this)
	)
	this.lessonUsers = [
	{"id":1,"name":"Jack Stevens","email":"jstevens0@cdbaby.com","country":"France","job":"Payment Adjustment Coordinator"},
	{"id":2,"name":"Teresa Lawson","email":"tlawson1@meetup.com","country":"Indonesia","job":"Computer Systems Analyst I"},
	{"id":3,"name":"Timothy Alvarez","email":"talvarez2@chicagotribune.com","country":"Russia","job":"Software Test Engineer I"},
	{"id":4,"name":"Ernest Lawrence","email":"elawrence3@google.com.au","country":"Philippines","job":"Software Engineer II"},
	{"id":5,"name":"Lois Patterson","email":"lpatterson4@forbes.com","country":"Indonesia","job":"Assistant Professor"},
	{"id":6,"name":"Tina Nelson","email":"tnelson5@ihg.com","country":"Myanmar","job":"Occupational Therapist"},
	{"id":7,"name":"Carlos Torres","email":"ctorres6@sfgate.com","country":"Mexico","job":"Analog Circuit Design manager"},
	{"id":8,"name":"Donna Henderson","email":"dhenderson7@liveinternet.ru","country":"China","job":"Safety Technician I"},
	{"id":9,"name":"Randy Grant","email":"rgrant8@blogs.com","country":"Japan","job":"Pharmacist"},
	{"id":10,"name":"Denise Campbell","email":"dcampbell9@illinois.edu","country":"Pakistan","job":"Analyst Programmer"},
	{"id":11,"name":"Pamela Cooper","email":"pcoopera@sitemeter.com","country":"China","job":"Software Engineer I"},
	{"id":12,"name":"Stephen Rogers","email":"srogersb@sogou.com","country":"Netherlands","job":"Payment Adjustment Coordinator"},
	{"id":13,"name":"Helen Powell","email":"hpowellc@accuweather.com","country":"United States","job":"Budget/Accounting Analyst III"},
	{"id":14,"name":"Fred Wheeler","email":"fwheelerd@marketwatch.com","country":"Portugal","job":"Staff Scientist"},
	{"id":15,"name":"Bonnie Bradley","email":"bbradleye@privacy.gov.au","country":"Thailand","job":"Engineer IV"},
	{"id":16,"name":"Michelle Medina","email":"mmedinaf@theguardian.com","country":"Nicaragua","job":"Physical Therapy Assistant"},
	{"id":17,"name":"Henry Howell","email":"hhowellg@mlb.com","country":"France","job":"Recruiting Manager"},
	{"id":18,"name":"Jose Ross","email":"jrossh@livejournal.com","country":"Ukraine","job":"Account Executive"},
	{"id":19,"name":"Jesse Hart","email":"jharti@joomla.org","country":"Republic of the Congo","job":"Community Outreach Specialist"},
	{"id":20,"name":"Margaret Simpson","email":"msimpsonj@de.vu","country":"Russia","job":"Database Administrator III"},
	{"id":21,"name":"Carol Warren","email":"cwarrenk@devhub.com","country":"Japan","job":"Media Manager III"},
	{"id":22,"name":"Shirley Ray","email":"srayl@ca.gov","country":"Russia","job":"Marketing Assistant"},
	{"id":23,"name":"Kenneth Wood","email":"kwoodm@google.fr","country":"Indonesia","job":"Junior Executive"},
	{"id":24,"name":"Ruth Bailey","email":"rbaileyn@zimbio.com","country":"France","job":"Design Engineer"},
	{"id":25,"name":"James Morales","email":"jmoraleso@aol.com","country":"Honduras","job":"Senior Sales Associate"},
	{"id":26,"name":"Bobby Bradley","email":"bbradleyp@webeden.co.uk","country":"Philippines","job":"Environmental Specialist"},
	{"id":27,"name":"Peter Henry","email":"phenryq@printfriendly.com","country":"Vietnam","job":"Budget/Accounting Analyst III"},
	{"id":28,"name":"Benjamin Banks","email":"bbanksr@prlog.org","country":"Peru","job":"Teacher"},
	{"id":29,"name":"Stephanie Kelley","email":"skelleys@mayoclinic.com","country":"China","job":"Recruiting Manager"},
	{"id":30,"name":"Roger Wells","email":"rwellst@google.com.hk","country":"China","job":"Safety Technician III"}
	]
	</script>
</application>