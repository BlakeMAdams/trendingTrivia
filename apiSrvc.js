angular.module('tt').service('apiSrvc', function ($http) {
	this.getApi = function (pageNumber) {
		return $http({
			method: 'GET',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions/'
		})
	}

	this.getEasyQ = function (pageNumber) {
		return $http({
			method: 'GET',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/1'
		})
	}

	this.getMedQ = function (pageNumber) {
		return $http({
			method: 'GET',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/2'
		})

	}

	this.getHardQ = function (pageNumber) {
		return $http({
			method: 'GET',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/3'
		})

	}

	this.nextApi = function (pageNumber, difficulty) {

		if (difficulty) {
			return 
				$http({
					method: 'GET',
					url: 'https://practiceapi.devmountain.com/api/trivia/questions/?page=' + pageNumber + 'difficulty/' + difficulty
				}) 
			
		} else {
			return $http({
				method: 'GET',
				url: 'https://practiceapi.devmountain.com/api/trivia/questions/?page=' + pageNumber
			})
		}
	}
	
	this.postQ = function (newQuestion){
		return $http({
			method: 'POST',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions',
			data: newQuestion
		})
	}
})