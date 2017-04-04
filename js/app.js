var initialCats = [{
			name: "tom",
			imgSrc: "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg",
			clickCount: 0,
			imgAttribution: "bla bla",
			nickNames: ["t-boy", "tabber", "table"]
		},
		{
			name: "colt",
			imgSrc: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/140.jpg",
			clickCount: 0,
			imgAttribution: "bla bla",
			nickNames: ["colty"]
		},
		{
			name: "pete",
			imgSrc: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg",
			clickCount: 0,
			imgAttribution: "bla bla",
			nickNames: ["petey"]
		},
		{
			name: "scott",
			imgSrc: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg",
			clickCount: 0,
			imgAttribution: "bla bla",
			nickNames: ["scotty"]
		},
		{
			name: "smith",
			imgSrc: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg",
			clickCount: 0,
			imgAttribution: "bla bla",
			nickNames: ["smoothie"]
		}
	];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
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

	this.nickNames = ko.observableArray(data.nickNames);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(cat) {
		self.catList.push(new Cat(cat));
	})

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		// Alt solution
		// self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		this.clickCount(this.clickCount() + 1);
	}

	this.changeCurrentCat = function(cat) {
		self.currentCat(cat);
	}
};

ko.applyBindings(new ViewModel());