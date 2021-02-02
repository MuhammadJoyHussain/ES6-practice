class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimullah"
    }
}

const student1 = new Student(12, "jafrul");
const student2 = new Student(34, "joynul");
console.log(student1, student2);