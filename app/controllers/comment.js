import Ember from 'ember';

var ComentController = {
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
      this.transitionToRoute('post');
    }

  }
};

export default Ember.ObjectController.extend(CommentController);
