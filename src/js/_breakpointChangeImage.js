export default function breakpointChangeImage() {

  function changeImage(block, img) {
    $(block).attr('src', img);
  }
  function checkAndChange(block, breakpoint, commonImg, breakpointImg) {
    const w = $(window).width();
    const img = $(block).attr('src');
    if (w > breakpoint && img.indexOf(commonImg) === -1) {
      changeImage(block, commonImg);
    } else if(w <= breakpoint && img.indexOf(breakpointImg) === -1) {
      changeImage(block, breakpointImg);
    }
  }
  $('[data-breakpoint-change-image]').each(function(i, el) {
    const self = this;
    const breakpoint = $(el).data('breakpoint-change-image');
    const commonImg = $(el).data('common-image');
    const breakpointImg = $(el).data('breakpoint-image');
    $(window).on('resize', () => {
      checkAndChange(self, breakpoint, commonImg, breakpointImg);
    });
    $(document).ready(function() {
      checkAndChange(self, breakpoint, commonImg, breakpointImg);
    });
  });
}
