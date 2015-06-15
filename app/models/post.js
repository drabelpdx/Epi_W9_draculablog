import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  comments: DS.hasMany('comment'),
  title: DS.attr('string'),
  body: DS.attr('string')
});
