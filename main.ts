export {};
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

//let x = 30; //this will throw error in tsc; cannot redeclare a block-scoped variable

console.log(x);

let isBeginner: boolean = true; //declared, initialized and typed
let total: number; //declared and just typed
let name: string = 'Austin'; //declared, initialized and typed

let sentence: string = `My name is ${name}.`;

console.log(sentence);

//why types?
//-static type checking
//-'intellisense' autocomplete when typing variable

//not particularly useful:
let n: null = null;
let u: undefined = undefined;

//can be used as subtypes:
let isNew: boolean = null;
let myName: string = undefined;

//use your preferred syntax
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple: allows an array of fixed elements but different types
//must match shape exactly
let person1: [string, number] = ['Chris', 22];

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

console.log(c);
//=> 1

//any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'banana';

//but... you can cause issues with this, compiler won't catch these errors
//errors will be detected at runtime (boo)

//examples:
//console.log(randomValue.name);
//randomValue();
//randomValue.toUpperCase();

//type unknown fixes this:
let anotherValue: unknown = 100;
//anotherValue.toUpperCase(); //will throw error

//type assertion can correct this:
//(anotherValue as string).toUpperCase(); //not working

//inferred types
let a = 10; //number type will be inferred from this declaration and initialization
//a = true; //throws error: 'true' is not assignable to number

//type inference does not work when there is no initialization

//union types
let multiType: number | boolean;
multiType = 11;
multiType = true;

//FUNCTIONS

//can enforce type on parameters
function add(num1: number, num2?: number): number {
  //return type would have been inferred in this case but can be explicitly stated
  return num2 ? num1 + num2 : num1;
}

add(5, 7);
add(9); //this is valid as second parameter is optional by using question mark

//can also use ES2015 default parameters

//why use interface? without:

function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);

//INTERFACE

interface Person {
  firstName: string;
  lastName?: string; //properties can be made optional in interfaces also
}

function interfaceFullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

//CLASSES

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Hello, ${this.employeeName}`);
  }

  private privateString: string = 'No one can see this message!';

  protected protectedString: string = 'bananas';
}

let emp1 = new Employee('Dwight');
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks, and eating ${this.protectedString}`);
  }
}

let m1 = new Manager('Michael');
m1.greet();

//ACCESS MODIFIERS (public, private, protected)

//public

//by default, each class member is public (public keyword can make this explicit)

//private

//console.log(m1.privateString); //will throw error in compiler ONLY, but WILL still get logged if run

//note that derived classes, they cannot access private items from parent class

//protected

//similar to private, does not grant access outside of class, but does give access to derived classes

//console.log(m1.protectedString); //will throw error in compiler ONLY b/c it is protected, however...
m1.delegateWork(); //class has access and can return the contents of this string!
