$(document).ready(function(){
  $('.input-box').on('keyup', function(e){
    var count = $('.input-box').val().length;

    $('.char-count').text(count + ' chars');
    
    if (count <= 140)
      $('.response').text('Tweetable!');
    else if (count < 160)
      $('.response').text('Textable!');
    else
      $('.response').text('Just send an email!!!');
  
  });
});
