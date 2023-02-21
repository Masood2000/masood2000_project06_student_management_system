#! /usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";
class Student {
    nameOfStudent = "";
    id = 0;
    balance = 0;
    coursesEnrolled = [];
}
;
let students = [];
class Courses {
    coursesName = ["OOPS", "Computer Architecture", "DSA", "TOA", "CFP"];
    coursesPrice = [7500, 8000, 10000, 120000, 4000];
}
start();
async function start() {
    await inquirer.prompt([{
            type: "list",
            name: "option",
            message: ".................. Please Select any One Option .................\n",
            choices: ["New Student", "Current Student", "Exit"],
        }]).then((answers => {
        if (answers.option == "New Student") {
            newStd();
        }
        else if (answers.option == "Current Student") {
            currentStd();
        }
        else if (answers.option == "Exit") {
            exit;
        }
    }));
}
async function currentStd() {
    await inquirer.prompt([{
            type: "list",
            name: "option",
            message: ".................. Please Select any One Option .................\n",
            choices: ["Enroll", "Show Status", "View Balance"],
        }]).then((answers => {
        if (answers.option == "View Balance") {
            viewBalance();
        }
        if (answers.option == "Show Status") {
            showStatus();
        }
        if (answers.option == "Enroll") {
            enrollCurrent();
        }
    }));
}
async function newStd() {
    await inquirer.prompt([{
            type: "list",
            name: "option",
            message: ".................. Please Select any One Option .................\n",
            choices: ["Enroll"],
        }]).then((answers => {
        enrollNewStd();
    }));
}
async function again() {
    start();
}
async function enrollNewStd() {
    let nm, id, bln, crss = [];
    console.log(".................. Please Enter the Following Details .................\n");
    await inquirer.prompt([{
            type: "input",
            name: "option",
            message: "Enter your Name : \n",
        },
        {
            type: "number",
            name: "option3",
            message: "Enter your Intial Balance : \n",
        },
        {
            type: "confirm",
            name: "option4crss1",
            message: "Do you want to enroll in OOPS: \n",
        },
        {
            type: "confirm",
            name: "option4crss2",
            message: "Do you want to enroll in Computer Architecture: \n",
        },
        {
            type: "confirm",
            name: "option4crss3",
            message: "Do you want to enroll in DSA: \n",
        },
        {
            type: "confirm",
            name: "option4crss4",
            message: "Do you want to enroll in TOA: \n",
        },
        {
            type: "confirm",
            name: "option4crss5",
            message: "Do you want to enroll in CFP: \n",
        },
    ]).then((answers => {
        nm = answers.option,
            id = getRandomInt();
        for (let std of students) {
            if (std.id == id) {
                id = getRandomInt();
            }
        }
        bln = answers.option3;
        let fees = 0;
        if (answers.option4crss1 == true) {
            crss.push("OOPS");
            fees = fees + 7500;
        }
        if (answers.option4crss2 == true) {
            crss.push("Computer Architecture");
            fees = fees + 8000;
        }
        if (answers.option4crss3 == true) {
            crss.push("DSA");
            fees = fees + 10000;
        }
        if (answers.option4crss4 == true) {
            crss.push("TOA");
            fees = fees + 120000;
        }
        if (answers.option4crss5 == true) {
            crss.push("CFP");
            fees = fees + 4000;
        }
        let std = new Student();
        std.nameOfStudent = nm;
        std.id = id;
        bln = bln - fees;
        std.balance = bln;
        std.coursesEnrolled = crss;
        students.push(std);
        console.log("............ You are Enrolled ...........\nYour Details are : \n");
        console.log(`Name : ${std.nameOfStudent}`);
        console.log(`ID : ${std.id}`);
        console.log(`Fees : ${fees}`);
        console.log(`Remaing Balance : ${std.balance}`);
        console.log("You are Enrolled in the Following Courses : ");
        console.log(std.coursesEnrolled);
    }));
    again();
}
async function enrollCurrent() {
    await inquirer.prompt([{
            type: "input",
            message: "Enter your ID to Enroll in Courses",
            name: "id"
        }])
        .then((answers) => {
        let flag = false;
        for (let std of students) {
            if (answers.id == std.id) {
                flag = true;
                console.log(`Name : ${std.nameOfStudent}`);
                console.log(`ID : ${std.id}`);
                console.log("You are Enrolled in the Following Courses : ");
                console.log(std.coursesEnrolled);
                enrollCourse(std);
            }
        }
        if (flag == false) {
            console.log(".............. No Student Found ...............");
            again();
        }
    });
}
async function showStatus() {
    await inquirer.prompt([{
            type: "input",
            message: "Enter your ID to show Status: ",
            name: "id"
        }])
        .then((answers) => {
        let flag = false;
        for (let std of students) {
            if (answers.id == std.id) {
                flag = true;
                console.log(`Name : ${std.nameOfStudent}`);
                console.log(`ID : ${std.id}`);
                console.log(`Remaing Balance : ${std.balance}`);
                console.log("You are Enrolled in the Following Courses : ");
                console.log(std.coursesEnrolled);
            }
        }
        if (flag == false) {
            console.log(".............. No Student Found ...............");
        }
    });
    again();
}
async function viewBalance() {
    await inquirer.prompt([{
            type: "input",
            message: "Enter your ID to view Balance: ",
            name: "id"
        }])
        .then((answers) => {
        let flag = false;
        for (let std of students) {
            if (answers.id == std.id) {
                flag = true;
                console.log(`Name : ${std.nameOfStudent}`);
                console.log(`ID : ${std.id}`);
                console.log(`Remaing Balance : ${std.balance}`);
            }
        }
        if (flag == false) {
            console.log(".............. No Student Found ...............");
        }
    });
    again();
}
function getRandomInt() {
    let min = Math.ceil(10000);
    let max = Math.floor(99999);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
async function enrollCourse(std) {
    await inquirer.prompt([
        {
            type: "confirm",
            name: "option4crss1",
            message: "Do you want to enroll in OOPS: \n",
        },
        {
            type: "confirm",
            name: "option4crss2",
            message: "Do you want to enroll in Computer Architecture: \n",
        },
        {
            type: "confirm",
            name: "option4crss3",
            message: "Do you want to enroll in DSA: \n",
        },
        {
            type: "confirm",
            name: "option4crss4",
            message: "Do you want to enroll in TOA: \n",
        },
        {
            type: "confirm",
            name: "option4crss5",
            message: "Do you want to enroll in CFP: \n",
        },
        {}
    ]).then((answers) => {
        let fees = 0;
        if (answers.option4crss1 == true) {
            if (std.coursesEnrolled.includes("OOPS")) {
                console.log("Already Enrolled in OOPS");
            }
            else {
                std.coursesEnrolled.push("OOPS");
                fees = fees + 7500;
            }
        }
        if (answers.option4crss2 == true) {
            if (std.coursesEnrolled.includes("Computer Architecture")) {
                console.log("Already Enrolled in Computer Architecture");
            }
            else {
                std.coursesEnrolled.push("Computer Architecture");
                fees = fees + 8000;
            }
        }
        if (answers.option4crss3 == true) {
            if (std.coursesEnrolled.includes("DSA")) {
                console.log("Already Enrolled in DSA");
            }
            else {
                std.coursesEnrolled.push("DSA");
                fees = fees + 10000;
            }
        }
        if (answers.option4crss4 == true) {
            if (std.coursesEnrolled.includes("TOA")) {
                console.log("Already Enrolled in TOA");
            }
            else {
                std.coursesEnrolled.push("TOA");
                fees = fees + 120000;
            }
        }
        if (answers.option4crss5 == true) {
            if (std.coursesEnrolled.includes("CFP")) {
                console.log("Already Enrolled in CFP");
            }
            else {
                std.coursesEnrolled.push("CFP");
                fees = fees + 4000;
            }
        }
        std.balance = std.balance - fees;
        console.log(`Fees : ${fees}`);
        console.log(`Remaing Balance : ${std.balance}`);
        console.log("You are Enrolled in the Following Courses : ");
        console.log(std.coursesEnrolled);
    });
    again();
}
