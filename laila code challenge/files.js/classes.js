// classes
class personal{
    constructor(name,id,residence,nationality){
        this.name =name;
        this.id = id;
        this.residence = residence;
        this.nationality = nationality
    }


}
let firstPersonal = new Personal("nakimbugwe rose", "ug204782", "makindye", "Ugandan");
console.log(firstPersonal);

// classes with constructors
class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getInformation(){
        console.log("your username is ", this.username )
    }

    getPersonalDetails(){
        console.log("your email is ", this.email, " and password is", this.password  )
    }
}

let mik = new User("lail", "laila@gmail.com", "67klu@");
mik.getInformation()
mik.getPersonalDetails()

// classes
class Employees{
    constructor(gmail,passWord){
        this.gmail = gmail;
        this.passWord = passWord;
    }

    getInformation(){
        console.log("your email is ", this.gmail )
    }

    getPersonalDetails(){
        console.log("your email is ", this.gmail, " and password is", this.passWord  )
    }
}

let aron = new Employees( "aron@gmail.com", "jweklu@");
aron.getInformation()
aron.getPersonalDetails()


// classed 
function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.monthlyBonus = 60000;

    this.getFinalSalary = function(){
        let finalSalary = this.salary + this.monthlyBonus;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
    }

}

let details = new Employee("Ronald", 24, 30000)
// someone can change the monthly the monthly bonus
details.monthlyBonus = 20000;

details.getDetails()

details.getFinalSalary()