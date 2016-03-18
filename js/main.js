var $input = $('#colour-input');
var $div = $('div');

$('form').on('change', function (e) {
  $div.css('background-color', $input.val());
});
