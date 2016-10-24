$(document).ready(function() {
  var flavors = ['chocolate', 'mint', 'strawberry'];
  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>");
  });
});
