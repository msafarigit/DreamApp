export class Person {
    id?: number;
    name: string;
    lastName: string;
    age?: number;

    constructor()
    constructor(id: number, name: string, lastName: string, age?: number)
    constructor(id?: number, name?: string, lastName?: string, age?: number) {
        this.id = id || null;
        this.name = name || '';
        this.lastName = lastName || '';
        this.age = age || null;
    }
}

export const PERSONS = [
    new Person(1, 'asghar', 'bichare', 60),
    new Person(2, 'mohsen', 'adele', 25),
    new Person(3, 'taher', 'sade', 45),
    new Person(4, 'shahin', 'mohammadi', 12)
];
