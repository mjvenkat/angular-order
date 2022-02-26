export interface Person {
  name: string;
  age: number;
}

let adults: Person[] = [
  {
    name: 'Jey',
    age: 40,
  },
  {
    name: 'Sudha',
    age: 35,
  },
];

let seniors: Person[] = [];
seniors = adults;
console.log(seniors.length);
