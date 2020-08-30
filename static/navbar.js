$(function(){
    $('body').on('click', '.navbar-toggler', function(e){
      e.preventDefault();
      var target_selector = $(this).data('target');

      if (!$(target_selector).hasClass('show')) {
        $(target_selector).removeClass('collapse');
        $(target_selector).addClass('collapsing');
        $(target_selector).addClass('show');
      } else {
        $(target_selector).removeClass('collapsing');
        $(target_selector).removeClass('show');
        $(target_selector).addClass('collapse');
      }
    });
  });