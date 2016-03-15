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
  '<form><label for="title">Title: <label><input class="editTitle" type="text" name="title" value="<%= title %>" placeholder="Movie Title">',
  '<label for="desc">Synopsis: </label><input class="editDesc" type="text" name="desc" value="<%= desc %>" placeholder="Synopsis">',
  '<label for="coverImg">Image URL: </label><input class="editImg" type="text" name="coverImg" value="<%= coverImg %>" placeholder="Image URL">',
  '<label for="star">Main Stars: </label><input class="editStar" type="text" name="star" value="<%= star %>" placeholder="Stars">',
  '<label for="runTime">Run Time: </label><input class="editRun" type="text" name="runTime" value="<%= runTime %>" placeholder="Run Time">',
  "<button class='create'>resubmit</button></form></div>"
].join('');

templates.add = [
  `<form class="addNewMovie" action="index.html">
    <input name='title' type="text" placeholder="Movie Title"><br>
    <textarea name='desc' rows="4" cols="50" placeholder="Synopsis"></textarea><br>
    <input name='star' type="text" placeholder="Main Stars">
    <input name='runTime' type="text" placeholder="Run Time">
    <input name='coverImg' type="text" placeholder="Poster URL">
    <input class="button" type="submit" value="Submit">
  </form>`
].join('');
