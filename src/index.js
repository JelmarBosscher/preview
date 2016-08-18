import angular from 'angular';

import {vrModule} from './app/modules/startup-vr/index';

import 'angular-ui-router';
import routesConfig from './routes';

// Views
import {main} from './app/views/main/main';

// Components
import {headerComponent} from './app/components/startup/su-header/header';
import {titleComponent} from './app/components/startup/su-title/title';
import {footerComponent} from './app/components/startup/su-footer/footer';

import {suParticipantsComponent} from './app/components/startup/su-participants/suParticipants';

// main scss
import './index.scss';

angular
  .module('app', [vrModule, 'ui.router'])
  .config(routesConfig)

  // Views
  .component('app', main)

  // Components
  .component('suHeader', headerComponent)
  .component('suTitle', titleComponent)
  .component('suFooter', footerComponent)

  .component('suParticipants', suParticipantsComponent);
