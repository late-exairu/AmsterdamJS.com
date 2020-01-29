import {CLASSES} from './_classes';
export default function scrollTo() {
  $(CLASSES.scrollLink).on('click', function() {
    function close() {
      $(CLASSES.burger).removeClass(CLASSES.active);
      $(CLASSES.header).removeClass(CLASSES.active);
    }
    close();
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });
}
