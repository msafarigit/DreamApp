interface IEntity {
  // Variables use const whereas properties use readonly.
  readonly id: number;
  // new (id: number);
  getID(): number;
}

export class Entity implements IEntity {
  id: number;

  protected constructor(id: number) { this.id = id; }

  getID(): number {
    return this.id;
  }
}

/*
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

****************************************

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
*/
