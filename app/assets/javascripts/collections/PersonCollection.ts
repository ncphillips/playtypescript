interface PersonCollection {
    findAll(success: Function, failure?: Function): void;
    findById(id: Number, success: Function, failure?: Function): void;
}