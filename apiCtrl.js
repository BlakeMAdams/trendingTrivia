angular.module('tt').controller('apiCtrl', function ($scope, apiSrvc, qSrvc) {
	$scope.currentPage = 0;
	$scope.buttonShow = false;
	$scope.lastbuttonShow = false;
	$scope.modalShow = false;


	$scope.newQuestion = {
		question: '',
		animal: '',
		difficulty: '',
		options: {
			1: '',
			2: '',
			3: '',
			4: ''
		},
		correct_answer: 0,
		date_entered: new Date()

	};
	//component did mount 'ish' function


	apiSrvc.getApi().then((response) => {
		console.log('api response', response)
		$scope.apiResults = response.data;

		$scope.currentPage = 0;
		
		$scope.buttonShow = qSrvc.resultsLength(response.data);
		$scope.lastbuttonShow = false;
	})

	$scope.modalOpen = function () {
		$scope.modalShow = true;
	}
	$scope.modalClose = function () {
		$scope.modalShow = false;
	}
	$scope.saveQ = function () {
		console.log('saveQ clicked', $scope.newQuestion);
		apiSrvc.postQ($scope.newQuestion).then('sent').catch((err) => console.log('err', err))
	}
	$scope.radioClick = function(val) {
		$scope.newQuestion.correct_answer = val;
	}
	$scope.giveUsRadioId = function() {
		
	}

	$scope.getEasyQ = function () {
		$scope.currentPage = 0;
		console.log('easyQ click & currentPage', $scope.currentPage)
		apiSrvc.getEasyQ().then((response) => {
			console.log('api response', response)
			$scope.apiResults = response.data;

			$scope.difficulty = 1;
			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = false;

		})
	}

	$scope.getMedQ = function () {

		$scope.currentPage = 0;
		console.log('medQ click & currentPage', $scope.currentPage)
		apiSrvc.getMedQ().then((response) => {
			console.log('api response', response)
			$scope.apiResults = response.data;

			$scope.difficulty = 2;
			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = false;
		})
	}

	$scope.getHardQ = function () {
		$scope.currentPage = 0;
		console.log('hardQ click & currentPage', $scope.currentPage)

		apiSrvc.getHardQ().then((response) => {
			console.log('api response', response)
			$scope.apiResults = response.data;

			$scope.difficulty = 3;
			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = false;
		})
	}

	$scope.getApiQ = function () {
		console.log('allQ click')
		$scope.currentPage = 0;
		apiSrvc.getApi().then((response) => {
			console.log('api response', response)
			$scope.apiResults = response.data;

			$scope.difficulty = 0;
			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = false;
		})
	}

	$scope.getNextPageResults = function () {
		console.log('nextPage click')

		console.log('curr page #', $scope.currentPage)
		$scope.currentPage++;
		console.log('curr page++', $scope.currentPage)

		apiSrvc.nextApi($scope.currentPage, $scope.difficulty).then((response) => {
			console.log('next api response', response)
			$scope.apiResults = response.data;

			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = qSrvc.prevLength(response.data, $scope.currentPage);
		})
	}

	$scope.getLastPageResults = function () {
		console.log('lastPage click')

		console.log('curr page #', $scope.currentPage)
		$scope.currentPage--;
		console.log('curr page--', $scope.currentPage)

		apiSrvc.nextApi($scope.currentPage, $scope.difficulty).then((response) => {
			console.log('next api response', response)

			$scope.apiResults = response.data;
			$scope.buttonShow = qSrvc.resultsLength(response.data);
			$scope.lastbuttonShow = qSrvc.prevLength(response.data, $scope.currentPage);

		})
	}

})