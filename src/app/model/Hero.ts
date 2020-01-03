import { Entity } from './core/Entity';

export class Hero extends Entity {
    id: number;
    name: string;
    emotion?: string; // ? safe operator
}

export const heroes: Hero[] = [
    { id: 1, name: 'Dr Nice', emotion: 'happy' },
    { id: 2, name: 'Narco', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confused' },
    { id: 4, name: 'Magneta' }
];
