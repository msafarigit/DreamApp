interface IEntity {
  id: number;
}

export class Entity implements IEntity {
  id: number;

  protected constructor(id: number) { this.id = id; }
}
