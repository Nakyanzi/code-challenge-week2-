abstraction

function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    let monthlyBonus = 90000;

    let getFinalSalary = function(){
        let finalSalary = salary + monthlyBonus;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
        getFinalSalary()
    }

}

let details = new Employee("laila", 94, 90000)
details.monthlyBonus = 6000
details.getDetails()