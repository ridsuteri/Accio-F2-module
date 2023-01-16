function printInfo(data) {
    console.log(this.fname + " " + this.lname + " " + data)
}

let instructor = {
    fname: "Riddhi",
    lname: "Suteri",
    module: "JS",
}
// instructor.printInfo = printInfo;
console.log(instructor)
let student = {
    fname: "Alpha",
    lname: "Kumar",
    marks: 30,
    // printInfo () {
    //     console.log(this.fname + " " + this.lname)
    // }
}

let team = {
    fname: "Beta",
    lname: "Kumar",
    department: "Sales",
}

// borrowing the method from instructor
// student.printInfo = instructor.printInfo
// student.printInfo()

// syntax of writing a call function
// <method_you_want_to_borrow>.call(<object_where_you_want_to_borrow_it>,arguments)
printInfo.call(student, 1000)


// syntax of writing a apply function
// <method_you_want_to_borrow>.apply(<object_where_you_want_to_borrow_it>, [arguments])
printInfo.apply(student, [student.marks])


// syntax of writing a bind function
// bind will not directly call the borrowed function instead it will return a new function that has can be called later 
//  <method_you_want_to_borrow>.bind(<object_where_you_want_to_borrow_it>, arguments)
// let bindedFun = printInfo.bind(student, student.marks);
// bindedFun()
printInfo.bind(student, student.marks)()
