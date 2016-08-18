import angular from 'angular';

import {embed} from './vr-embed/embed';
import {player} from './vr-player/player';

export const vrModule = 'embed';

angular
  .module(vrModule, [])
  .component('vrEmbed', embed)
  .component('vrPlayer', player);
