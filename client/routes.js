Router.configure({
  layoutTemplate: 'app'
});

//Here the :channel is a variable. So if our request URL is example.com/helloworld, the :channel variable will have the value helloworld. 
//As you’ll see later, we can access this variable using this.params.channel.
Router.route('/:channel', function () {
	Session.set('channel', this.params.channel);  
	this.render('messages');
});

Router.route('/', function () {
	this.redirect('/general');
});