// custom directives are cleaner
// custom directives make refactoring easier

angular.module('notebook.directives', ['NoteService'])

.directive('noteList', function() {

	return {
		template: '<div>Times Clicked: {{numberClicked}}</div><my-note index="$index" note="::note" ng-repeat="note in notes"></my-note>',
		scope: {},
		controller: function($scope, NoteFactory) {
			$scope.numberClicked = 0;

			$scope.notes = NoteFactory.getNotes(10);

			$scope.$on('note:clicked', function() {
				$scope.numberClicked++; // child directive communicating to our list and our child updating
				$scope.$apply(); // if your page isn't updating and you don't know why, just throw it in there. kicks off digest schedule
				console.log('noteList heard clicked');
			});
		},
	}
});