const House = require("./models").house;
const Student = require("./models").student;
const Book = require("./models").book;

async function getStudentWithHouse() {
  const students = await Student.findAll({ include: House });
  return students.map((data) => data.get({ plain: true }));
}

// getStudentWithHouse().then((data) => console.log(data));

async function getHousesWithStudents() {
  const houses = await House.findAll({ include: [Student] });
  return houses.map((data) => data.get({ plain: true }));
  // const myHouse = houses.map((data) => data.toJSON());
  // return myHouse[0];
}

// getHousesWithStudents().then((data) => console.log(data));

async function getStudentWithBooks() {
  const students = await Student.findAll({ include: [Book] });
  // return students.map((data) => data.get({ plain: true }));
  const myBook = students.map((data) => data.toJSON());
  return myBook[0];
}

getStudentWithBooks().then((data) => console.log(data));
