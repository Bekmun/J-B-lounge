import './components/just-validate';
import { createSwiper } from './components/swiper';
import { animation } from './components/animation';
import { goTop } from './components/goTop';
import { map } from './components/map';
import { popup } from './components/popup';
import { scrollOnClick } from './components/scrollOnClick';
import { social } from './components/social';

document.addEventListener('DOMContentLoaded', () => {
  createSwiper()
  animation()
  goTop()
  map()
  popup()
  scrollOnClick()
  social()
})

