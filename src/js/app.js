import { CLASSES } from './_classes';

import tabs from './_tabs';
import noTouch from './_noTouch';
import header from './_header';
import breakpointChangeImage from './_breakpointChangeImage';
import 'svgxuse';
import scrollTo from './_scrollTo';
import GoogleMap from './_map';
import Video from './_video';

tabs();
noTouch();
header();
breakpointChangeImage();
scrollTo();
new GoogleMap();
new Video({
  btn: CLASSES.videoBtn
});
