// how to us a constructor function
class studentName{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    getAge(){
        return this.age
    }
    
}
let newstudent = new studentName("doreen", 20);
console.log(newstudent.getAge())