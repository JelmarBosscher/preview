class EmbedController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/modules/startup-vr/vr-embed/embed.json')
      .then(response => {
        this.embed = response.data;
      });
  }
}

export const embed = {
  templateUrl: 'app/modules/startup-vr/vr-embed/embed.html',
  controller: EmbedController
};
