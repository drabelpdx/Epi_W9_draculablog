import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.resource('posts', {path: '/'}, function() {
    this.resource('post', {path: ':post_id'}, function() {
      this.resource('new-comment');
      this.resource('comment', {path: ':comment_id'});      
    });
  });
});

export default Router;
