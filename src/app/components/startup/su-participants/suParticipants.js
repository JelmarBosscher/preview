class SuParticipantsController {
  constructor($http) {

  	let $this = this;

    this.text = 'Startup participants - get call, JSON example';

    $http
		.get('app/components/startup/su-participants/participants.json')
		.then(response => {
			$this.participants = response.data;
			console.log($this.participants);
		});
  }
}

export const suParticipantsComponent = {
  templateUrl: 'app/components/startup/su-participants/suParticipants.html',
  controller: SuParticipantsController
};

