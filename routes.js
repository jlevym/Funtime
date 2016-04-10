Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home', {
    to:"main"
  });
});

Router.route('/home1', function () { // added this for working on home page
  this.render('home1', {
    to:"main"
  });
});

Router.route('/news', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('news', {
    to:"main"
  });
});

Router.route('/kids', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('kids', {
    to:"main"
  });
});

Router.route('/this_year', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('this_year', {
    to:"main"
  });
});

Router.route('/blog', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('myBlogIndexTemplate', {
    to:"main"
  });
});

// i am trying to make a button for creating posts



