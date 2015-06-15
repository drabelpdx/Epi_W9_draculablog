import Ember from 'ember';

var NewCommentController = {
  actions: {
    save: function() {
      var newComment = this.store.createRecord('comment', {
        text: this.get('text'),
      });
      newComment.save();

      this.transitionToRoute('post');
    }
  }
};

export default Ember.ObjectController.extend(NewCommentController);
