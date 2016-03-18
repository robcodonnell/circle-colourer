var $input = $('#colour-input');
var $ball = $('.ball');

$('form').on('change', function (e) {
  $ball.css('background-color', $input.val());
});
