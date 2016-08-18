
import angular from 'angular';
import 'angular-mocks';
import {player} from './player';

describe('player component', () => {
  beforeEach(() => {
    angular
      .module('fountainplayer', ['app/players/player.html'])
      .component('fountainplayer', player);
    angular.mock.module('fountainplayer');
  });

  it('should render Gulp', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    const element = $compile('<fountain-player player="fixture"></fountain-player>')($scope);
    $scope.$digest();
    const player = element.find('h3');
    expect(player.html().trim()).toEqual('Gulp');
  }));
});
