$(document).ready(function() {
  $("#word-play").submit(function(event){
    event.preventDefault();
    var firstName = $("#firstName").val();
    var words = firstName.split(' ');
    var newWords = words.filter(function(word){
      return word.length >= 3;
    });
    newWords.reverse();
    var results = newWords.join(' ');
    $(".test").append(results);
    $("#display").show();
    });
})
