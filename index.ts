// Example 1:
let username: string = "John";
let age: number = 25;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Alice", 30];

// Example 2:
let data: any = "Hello";
let value: unknown;

function logMessage(): void {
  console.log("This function has no return value");
}
function throwError(): never {
  throw new Error("Something went wrong!");
}

// Example 3:
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user1: User = { name: "David", age: 30, isAdmin: false };

interface IEmployee {
  id: number;
  name: string;
  position: string;
}
let emp1: IEmployee = { id: 101, name: "Alice", position: "Developer" };

type ID = string | number; // Union
let userID: ID = 101;
userID = "abc123"; // Cả số và chuỗi đều hợp lệ

type Admin = { role: string };
type Developer = { skills: string[] };
type TeamLead = Admin & Developer; // Intersection
let lead: TeamLead = { role: "Manager", skills: ["React", "Node.js"] };
