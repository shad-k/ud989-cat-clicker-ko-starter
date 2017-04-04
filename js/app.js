var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/9648464288_2516b35537_z.jpg");
	this.imgAttribution = ko.observable("bla bla");
	this.catLevel = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if(clicks < 10) {
			title = "Newborn";
		} else if(clicks < 50) {
			title = "Infant";
		} else if(clicks < 100) {
			title = "Child";
		} else if(clicks < 200) {
			title = "Teen";
		} else if(clicks < 500) {
			title = "Adult";
		} else {
			title = "Ninja";
		}
		return title;
	}, this);

	this.nickNames = ko.observableArray(["t-boy", "tabs", "tabber", "table"]);
}

var ViewModel = function() {
	// Alt solution
	// var self = this;
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		// Alt solution
		// self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		this.clickCount(this.clickCount() + 1);
	}
};

ko.applyBindings(new ViewModel());