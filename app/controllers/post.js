import Ember from 'ember';

var PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    },

    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('/');
    }

  }
};

export default Ember.ObjectController.extend(PostController);
