var templates = {};
templates.movie = [
  // "<article data-id='<%= movie.id %>'>",
  "<div class='picBox'><img class='pic' src='<%= coverImg %>'/></div>",
  "<div class='stuff'><h2><%= title %></h2>",
  "<h4>Staring: <%= star %></h4>",
  "<p>Synopsis: <%= desc %></p>",
  "<h5>Run Time: <%= runTime %></h5><button class='delete'>delete</button>",
  "<button class='edit'>edit</button>",
  "</div>"
  // "</article>"

].join('');

templates.edit = [
  '<div class= "editSection">',
  '<input class="editTitle" type="text" name="title" value="<%= title %>" placeholder="Movie Title">',
  '<input class="editDesc" type="text" name="desc" value="<%= desc %>" placeholder="Synopsis">',
  '<input class="editImg" type="text" name="coverImg" value="<%= coverImg %>" placeholder="Image URL">',
  '<input class="editStar" type="text" name="star" value="<%= star %>" placeholder="Stars">',
  '<input class="editRun" type="text" name="runTime" value="<%= runTime %>" placeholder="Run Time">',
  "<button class='create'>resubmit</button></div>"
].join('');
