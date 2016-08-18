import angular from 'angular';
import 'angular-mocks';
import {embed} from './embed';

const embedJson = [
  {
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('embed component', () => {
  beforeEach(() => {
    angular
      .module('fountainembed', ['app/embed/embed.html'])
      .component('fountainembed', embed);
    angular.mock.module('fountainembed');
  });
  it('should render 3 elements <fountain-tech>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/embed/embed.json').respond(embedJson);
    const element = $compile('<fountain-embed></fountain-embed>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const embed = element.find('fountain-tech');
    expect(embed.length).toEqual(3);
  }));
});
