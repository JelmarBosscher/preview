import angular from 'angular';
import 'angular-mocks';
import {suParticipants} from './suParticipants';

describe('suParticipants component', () => {
  beforeEach(() => {
    angular
      .module('suParticipants', ['app/components/startup/su-participants/suParticipants.html'])
      .component('suParticipants', suParticipants);
    angular.mock.module('suParticipants');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<suParticipants></suParticipants>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
