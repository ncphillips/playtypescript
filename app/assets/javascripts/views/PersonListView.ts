import PersonCollection = require("collections/PersonCollection");
import observe = require("lib/observe");

class PersonListView {
    public persons: Array;
    public title: String;
    public collection: PersonCollection;

    public constructor(title: String, collection: PersonCollection) {
        this.title = title;
        this.collection = collection;

        collection.findAll(this.loadPersons.bind(this));
    }

    private loadPersons(persons: Array): void {
        this.persons = observe.array(persons);
    }
}

export = PersonListView;