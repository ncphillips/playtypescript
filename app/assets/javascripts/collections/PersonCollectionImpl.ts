import Person = require("models/Person");
import PersonCollection = require("collections/PersonCollection");

class PersonCollectionImpl implements PersonCollection {
    public constructor() { }

    public findAll(success: Function, failure?: Function): void {
        var persons: Array = [];

        persons.push(new Person({ name: "Nolan", yearOfBirth: 1992 }));
        persons.push(new Person({ name: "Bob", yearOfBirth: 1952 }));
        persons.push(new Person({ name: "Jordan", yearOfBirth: 1984 }));

        success(persons);
    }

    public findById(id: Number, success: Function, failure?: Function): void {

    }
}

export = PersonCollectionImpl;