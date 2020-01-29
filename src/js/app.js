import { CLASSES } from './_classes';

import tabs from './_tabs';
import noTouch from './_noTouch';
import header from './_header';
import breakpointChangeImage from './_breakpointChangeImage';
import 'svgxuse';
import scrollTo from './_scrollTo';
import videosSlider from './_videosSlider';
import GoogleMap from './_map';
import Video from './_video';

$('.faq__question').click(function() {
  $(this).parent('.faq__item').toggleClass('open');
  $(this).siblings('.faq__ansver').slideToggle();
});

tabs();
noTouch();
header();
breakpointChangeImage();
scrollTo();
videosSlider();
new GoogleMap();
new Video({
  btn: CLASSES.videoBtn
});
