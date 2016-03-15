var MovieView = Backbone.View.extend({
  tagName: 'article',
  template: _.template(templates.movie),
  templateEdit: _.template(templates.edit),
  events: {
    'click .delete': 'deleteMovie',
    'click .edit': 'editMovie',
    'click .create': 'submitEdit'
  },
submitEdit: function (event){
  event.preventDefault();

  this.model.set({
    title: this.$el.find('.editTitle').val(),
    star: this.$el.find('.editStar').val(),
    desc: this.$el.find('.editDesc').val(),
    runTime: this.$el.find('.editRun').val(),
    coverImg: this.$el.find('.editImg').val()
  });
},

editMovie: function () {
  var data = this.model.toJSON();
  this.$el.append(this.templateEdit(data));
},
deleteMovie: function () {
  this.model.destroy();

},
alertMe: function (event) {
  // event.preventDefault();
  alert(this.model.toJSON().title);
},

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render:function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var CollectionView = Backbone.View.extend({
  el: '.container',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
addOne: function(element){
  var modelView = new MovieView({model: element});
  this.$el.append(modelView.render().el);

},
addAll:function(){
  $('.container').html('');
  _.each(this.collection.models, this.addOne, this);
}
});
