describe('MainController', function() {
	
	var MainCtrlPage = function() {
		this.greet = element(by.binding('firstName()'));
		this.input = element(by.model('name'));

		this.get = function() {
			browser.get('/');
		};
		return this;
	};

	beforeEach(function() {
		MainCtrlPage().get();
	});

	it('should initially greet with Yo!', function() {
		console.log(MainCtrlPage);
		expect(MainCtrlPage().greet.getText()).toBe('Yo!');
	});

	it('should greet with first name of input', function() {
		var text = MainCtrlPage().input.sendKeys('Anders petrus');
		expect(MainCtrlPage().greet.getText()).toBe('Yo, Anders');
	});
});