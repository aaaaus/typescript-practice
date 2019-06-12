"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var x = 10;
var y = 20;
//let x = 30; //this will throw error in tsc; cannot redeclare a block-scoped variable
console.log(x);
var isBeginner = true; //declared, initialized and typed
var total; //declared and just typed
var name = 'Austin'; //declared, initialized and typed
var sentence = "My name is " + name + ".";
console.log(sentence);
//why types?
//-static type checking
//-'intellisense' autocomplete when typing variable
//not particularly useful:
var n = null;
var u = undefined;
//can be used as subtypes:
var isNew = null;
var myName = undefined;
//use your preferred syntax
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple: allows an array of fixed elements but different types
//must match shape exactly
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//=> 1
//any type
var randomValue = 10;
randomValue = true;
randomValue = 'banana';
//but... you can cause issues with this, compiler won't catch these errors
//errors will be detected at runtime (boo)
//examples:
//console.log(randomValue.name);
//randomValue();
//randomValue.toUpperCase();
//type unknown fixes this:
var anotherValue = 100;
//anotherValue.toUpperCase(); //will throw error
//type assertion can correct this:
//(anotherValue as string).toUpperCase(); //not working
//inferred types
var a = 10; //number type will be inferred from this declaration and initialization
//a = true; //throws error: 'true' is not assignable to number
//type inference does not work when there is no initialization
//union types
var multiType;
multiType = 11;
multiType = true;
//FUNCTIONS
//can enforce type on parameters
function add(num1, num2) {
    //return type would have been inferred in this case but can be explicitly stated
    return num2 ? num1 + num2 : num1;
}
add(5, 7);
add(9); //this is valid as second parameter is optional by using question mark
//can also use ES2015 default parameters
//why use interface? without:
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function interfaceFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
//CLASSES
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.privateString = 'No one can see this message!';
        this.protectedString = 'bananas';
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Dwight');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks, and eating " + this.protectedString);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Michael');
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
