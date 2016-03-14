var templates = {};
templates.movie = [
  "<article data-id='<%= movie.id %>'>",
  "<div class='pic'><img src='<%= movie.coverImg %>'></div>",
  "<div class='stuff'><h2><%= movie.title %></h2>",
  "<h4>Staring: <%= movie.star %></h4>",
  "<p>Synopsis: <%= movie.desc %></p>",
  "<h5>Run Time: <%= movie.runTime %></h5><button class='delete'>delete</button></div>",
  "</article>"
].join('');
$(document).ready(function(){
  page.init();
});

var movieCollection = new MovieCollection(movie);

var page = {
  init: function(){
    page.addAll();
    page.initEvents();
  },
  movieTmpl:
  _.template(templates.movie),
  initEvents: function(){
    $('.container').on('click', '.delete', function(event){
      event.preventDefault();
      var movieId=
      $(this).closest('article').data('id');
      movieCollection.remove(movieId);
      page.addAll();
      console.log('deleted');
    });
    $('.button').on('click', function(event){
      event.preventDefault();
    var newMovie= {
      title: $('input[name="title"]').val(),
      desc:$('textarea[name="desc"]').val(),
      star:$('input[name="star"]').val(),
      runTime:$('input[name="runTime"]').val(),
      coverImg:$('input[name="coverImg"]').val(),
    };
    $('input[name="title"]').val(''),
    $('textarea[name="desc"]').val(''),
    $('input[name="star"]').val(''),
    $('input[name="runTime"]').val(''),
    $('input[name="coverImg"]').val(''),
      console.log(newMovie);
      var myMovie = new MovieModel(newMovie);
      movieCollection.add(myMovie);
      console.log(movieCollection);
      window.glob=movieCollection;
      page.addAll();

    });


  },


  addOne: function(element){
    element.attributes.id=element.cid;
    var markup = page.movieTmpl({movie: element.toJSON()});
    $('.container').append(markup);

  },
  addAll:function(){
    $('.container').html('');
    _.each(movieCollection.models, page.addOne);
  }

}
