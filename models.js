var MovieModel = Backbone.Model.extend({

  initialize: function(){
    window.glob = this;
    console.log("new movie model created");
  }
});
