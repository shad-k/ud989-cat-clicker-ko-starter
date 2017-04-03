var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/9648464288_2516b35537_z.jpg");
	this.imgAttribution = ko.observable("bla bla");
	this.catLevel = ko.computed(function() {
		if(this.clickCount() < 10) {
			return "Newborn";
		}
		else {
			return "Infant";
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
};

ko.applyBindings(new ViewModel());