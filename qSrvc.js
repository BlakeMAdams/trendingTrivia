angular.module('tt').service('qSrvc', function(){
	this.resultsLength = function(array){
		if ( array.length === 10) {
			return true
			
		} else { return false}
	}

	this.prevLength = function(array, currentPage){
		if ( currentPage === 0) {
			return false
		} else { return true}
	}
	
})