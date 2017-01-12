$("document").ready(function() {
  $("form").submit(function(event) {

    var animal1 = parseInt($("#animal").val());
    console.log(animal1);
    if (animal1 === 1) {
      location.href="kitten.html";
    } else if (animal1 === 2) {
      location.href="hedgehog.html";
    } else {
      location.href="puppy.html";
    }

    event.preventDefault();
  });
});
