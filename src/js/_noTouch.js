import {CLASSES} from './_classes';
export default function noTouch() {
  if (!('ontouchstart' in document.documentElement)) {
    document.documentElement.className += CLASSES.noTouch;
  }
}
