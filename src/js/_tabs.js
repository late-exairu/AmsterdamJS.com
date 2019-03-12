import {CLASSES} from './_classes';

export default function tabs() {
  const link = $(CLASSES.tabLink);
  const tabs = $(CLASSES.tab);
  link.on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass(CLASSES.active)) {
      const name = $(this).data('tab-name');
      const tab = $(`.js-tab[data-tab=${name}]`);
      link.removeClass(CLASSES.active);
      $(this).addClass(CLASSES.active);
      tabs.removeClass(CLASSES.active);
      tab.addClass(CLASSES.active);
    }
  });
}
