App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.route('projects');
  this.route('photos');
  this.route('liz');
  this.route('busby_reunion_2013');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    document.title = 'The bfcoder';
  }
});

App.AboutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    document.title = 'The bfcoder: About me';
  }
});

App.ProjectsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    document.title = 'The bfcoder: Projects';
  }
});

App.PhotosRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    document.title = 'The bfcoder: Photos';
  }
});

App.BusbyReunion2013Route = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    document.title = 'The 2013 Busby Reunion';
  }
});

App.NavView = Ember.View.extend({

    tagName: 'li',
    classNameBindings: 'active'.w(),

    didInsertElement: function () {
        this._super();
        this.notifyPropertyChange('active');
        var _this = this;
        this.get('parentView').on('click', function () {
            _this.notifyPropertyChange('active');
        });
    },

    active: function () {
        return this.get('childViews.firstObject.active');
    }.property()
});

App.TwitterWidgetView = Ember.View.extend({
    didInsertElement: function() {
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.innerHTML= "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');";
      this.$().append(script);
    }
});
