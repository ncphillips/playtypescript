require(["lib/knockout", "views/PersonListView", "collections/PersonCollectionImpl"], function (ko, PersonListView, PersonCollectionImpl) {
    var div = document.getElementById("strong-typescript");
    ko.applyBindings(new PersonListView("Persons", new PersonCollectionImpl()), div);
});


