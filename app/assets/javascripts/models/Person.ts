import observe = require("lib/observe");

class Person {
    public name: Function;
    public yearOfBirth: Function;

    public constructor(data) {
        this.name = observe.prop(data.name);
        this.yearOfBirth = observe.prop(data.yearOfBirth);
    }

    public age(): Number {
        return 2016 - this.yearOfBirth();
    }
}

export = Person;