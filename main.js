var templates = {};
templates.movie = [
  "<article data-id='<%= movie.id %>'>",
  "<div class='picBox'><img class='pic' src='<%= movie.coverImg %>'/></div>",
  "<div class='stuff'><h2><%= movie.title %></h2>",
  "<h4>Staring: <%= movie.star %></h4>",
  "<p>Synopsis: <%= movie.desc %></p>",
  "<h5>Run Time: <%= movie.runTime %></h5><button class='delete'>delete</button>",
  "<button class='edit'>edit</button>",
  "</div>",
  "</article>"

].join('');

templates.edit = [
  '<input type="text" name="title" value="<%= movie.title %>" placeholder="Movie Title">',
  '<input type="text" name="desc" value="<%= movie.desc %>" placeholder="Synopsis">',
  '<input type="text" name="coverImg" value="<%= movie.coverImg %>" placeholder="Image URL">',
  '<input type="text" name="star" value="<%= movie.star %>" placeholder="Stars">',
  '<input type="text" name="runTime" value="<%= movie.runTime %>" placeholder="Run Time">',
  "<button class='create'>resubmit</button></div>"
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

    $('body').on('click', '.edit', function(evt){
       evt.preventDefault();
       window.glob = $(this);
       var tmpl = _.template(templates.edit);
       var title = $(this).closest('article').find('h2').text();
       var coverImg = $(this).closest('article').find('img').prop('src');
       var desc = $(this).closest('article').find('p').text();
       var star =
       $(this).closest('article').find('h4').text();
       var runTime =
       $(this).closest('article').find('h5').text();
       var tmplObj = {
         title: title,
         coverImg: coverImg,
         desc: desc,
         star: star,
         runTime: runTime,
       }

       $(this).closest('article').append(tmpl({movie: tmplObj}));
     });
     $('body').on('click', '.create', function(event){
       event.preventDefault();
     var newMovie= {
       title: $('input[name="title"]').val(),
       desc:$('textarea[name="desc"]').val(),
       star:$('input[name="star"]').val(),
       runTime:$('input[name="runTime"]').val(),
       coverImg:$('input[name="coverImg"]').val(),
     };
     console.log("HMMM", newMovie);

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
       var movieId=
       $(this).closest('article').data('id');
       movieCollection.remove(movieId);
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
