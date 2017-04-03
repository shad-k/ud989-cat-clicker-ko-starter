var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/9648464288_2516b35537_z.jpg");
	this.imgAttribution = ko.observable("bla bla");

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
};

ko.applyBindings(new ViewModel());