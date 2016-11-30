initListeners();
var students = [];

function Student(id, name, email, module1, module2, module3) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.module1 = module1;
    this.module2 = module2;
    this.module3 = module3;
    this.averageAttendance = function () {
        return ((this.module1 + this.module2 + this.module3) / 3).toFixed(2) + "%";
    }
}

function initListeners() {
    document.getElementById("add").addEventListener("click", addStudent, false);
    document.getElementById("remove").addEventListener("click", deleteStudent, false);
    document.getElementById("list").addEventListener("click", listStudents, false);
}

function addStudent() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var module1 = parseInt(document.getElementById("att-scripting").value);
    var module2 = parseInt(document.getElementById("att-foop").value);
    var module3 = parseInt(document.getElementById("att-database").value);

    if (checkStudent(id) === -1) {
        var student = new Student(id, name, email, module1, module2, module3);
        students.push(student);
    }
    else {
        alert("Student with ID" + id + " already exists in the list");
    }
}

function deleteStudent() {
    var id = document.getElementById("id").value;
    var position = checkStudent(id);
    if (position != -1) {
        students.splice(position, 1);
        alert("Student with id " + id + " has been removed");
    }
    else {
        alert("Student with id " + id + " does not exist in the list");
    }

}

function checkStudent(id) {
    //Check if a student exists in the array via their id
    for (var i = 0; i < students.length; i++) {
        if (id === students[i].id) {
            return i;
        }
    }
    return -1;
}

function listStudents() {
    var message = "";
    if (students.length === 0) {
        message = "No Students stored";
    }
    else {
        for (var i = 0; i < students.length; i++) {
            var s = students[i];
            message += "ID: " + s.id + " Name: " + s.name + " Email: " + s.email + " Attendance 1: " + s.module1
                + " Attendance2: " + s.module2 + " Attendance 3: " + s.module3 + " Average Attendance: " +
                s.averageAttendance() + "\n";
        }
    }
    alert(message);
}
