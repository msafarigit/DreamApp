export class Person {
    id: number;
    name: string;
    lastName: string;
    age: number;

    constructor(id: number, name: string, lastName: string, age: number) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

export const PERSONS = [
    new Person(1, 'asghar', 'bichare', 60),
    new Person(1, 'mohsen', 'adele', 25),
    new Person(1, 'taher', 'sade', 45),
    new Person(1, 'shahin', 'mohammadi', 12)
];
