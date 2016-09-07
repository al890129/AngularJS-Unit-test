describe('Testing AngularJS test suite',function(){
	describe('Testing AngularJS Controller',function(){
		
		it('should be intialize the title in the scope',function(){
			module('myAppModule'); //provided by angular-mocks
			var scope = {};  //initialize empty scope object
			var ctrl;

			//provided by angular-mocks used to inject angular
			//component to our test,in this case we only inject
			// controller
			inject(function($controller){		
				//link the scope variable to $scope in order to access all variables
				//defined in our angular app.
				ctrl = $controller('testingController',{$scope:scope})
			}) 
			//each expectation is made of the value you want to check
			// and some conditions you want to check against(matcher in Jasmine)
			expect(scope.title).toBeDefined();
			//check what is the title actually be
			expect(scope.title).toBe('Testing');

		})

	})
})