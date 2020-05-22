import { Entity } from './core/Entity';

export class Hero extends Entity {
  name: string;
  emotion?: string; // ? safe operator

  constructor(id: number) {
    super(id);
  }
}

export const heroes: Hero[] = [
  Object.assign(new Hero(1), { name: 'Dr Nice', emotion: 'happy' }),
  Object.assign(new Hero(2), { name: 'Narco', emotion: 'sad' }),
  Object.assign(new Hero(3), { name: 'Windstorm', emotion: 'confused' }),
  Object.assign(new Hero(3), { name: 'Magneta' })
];
