// // javascript object
// // Array Example
// const userArray = ["Adrita", "Adhikary", 2017, "One"];
// console.log(userArray);
// console.log(userArray[0]);

// // object Example
// const userObjact = {
//   firstName: "Adrita",
//   lastName: "Adhikary",
//   birthYear: 2017,
//   className: "One",
// };
// console.log(userObjact);
// console.log(userObjact["firstName"]);
// console.log(userObjact["birthYear"]);

// // Add new item
// // Example One
// userObjact.hobby = "Drowing";
// console.log(userObjact);
// console.log(userObjact.hobby);

// // Example tow
// userObjact["birthPlace"] = "khulna";
// console.log(userObjact["birthPlace"]);

// // Another Object Example
// const userObjectTow = {
//   firstName: "Biswajit",
//   lastName: "Adhikary",
//   isJob: true,
//   calculateAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// console.log(userObjectTow.isJob);
// console.log(userObjectTow.calculateAge(1998));
// console.log(userObjectTow["calculateAge"](1995));

// This keyword
// const userObjectTow = {
//   firstName: "Biswajit",
//   lastName: "Adhikary",
//   birthYear: 1988,
//   isJob: true,
//   calculateAge: function () {
//     return 2022 - this.birthYear;
//   },
//   userDetails: function () {
//     return `This is user ${this.firstName}, ${this.lastName}, born in ${this.birthYear}!`;
//   },
// };

// // This is user Biswajit Adhikary born in 1988!

// console.log(userObjectTow.calculateAge());
// console.log(userObjectTow.userDetails());

// javascript loop
// for loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for (let Task = 1; Task <= 8; Task++) {
//   console.log(`task ${Task}`);
// }

// for (let i = 1; i <= 8; i++) {
//   console.log(`task ${i}`);
// }

//while loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// let i = 1;
// while (i <= 6) {
//   console.log(`task ${i}`);
//   i++;
// }

// // Arry
// const newArray = [
//   "Data 1",
//   "Data 2",
//   "Data 3",
//   "Data 4",
//   "Data 5",
//   "Data 6",
//   "Data 7",
//   "Data 8",
// ];
// console.log(newArray);
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// for (let i = newArray.length - 1; i >= 0; i--) {
//   console.log(newArray[i]);
// }

// Loop break
// for (let i = 0; i < newArray.length; i++) {
//   if (i == 4) break;
//   console.log(newArray[i]);
// }

// loop continue
// for (let i = 0; i < newArray.length; i++) {
//   if (i == 4) continue;
//   console.log(newArray[i]);
// }

// Arry
const newArray = [
  "Data 1",
  "Data 2",
  "Data 3",
  "Data 4",
  "Data 5",
  "Data 6",
  "Data 7",
  "Data 8",
];
console.log(newArray);

// indexOf
console.log(newArray.indexOf("Data 6"));
console.log(newArray.indexOf("Data 3"));
console.log(newArray.indexOf("Data 9"));

// includes
console.log(newArray.includes("Data 6"));
console.log(newArray.includes("Data 9"));
