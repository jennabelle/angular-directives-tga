angular.module('notebook.directives', ['NoteService'])

.directive('noteList', function() {

	return {
		template: '<my-note index="$index" note="note" ng-repeat="note in notes"></my-note>',
		scope: {},
		controller: function($scope, NoteFactory) {

			$scope.notes = NoteFactory.getNotes(10);

			$scope.$on('note:clicked', function() {
				console.log('noteList heard clicked');
			});
		},
	}
});