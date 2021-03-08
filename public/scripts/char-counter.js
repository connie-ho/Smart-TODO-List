$(document).ready(function() {
  $('form.item').on('input', function(event) {
    const totalChars = 100;
    const currentChars = $(event.target).val().length
    const remainingChars = totalChars - currentChars;

    // get the element that shows the character count
    const inputCounter = $('#input-counter');

    // turn the counter red if the user has typed too much
    // do this by adding the class 'error'
    if (remainingChars < 0) {
      $(inputCounter).addClass('error');
    } else {
      $(inputCounter).removeClass('error');
    }

    $(inputCounter).text(remainingChars);
  });
});
