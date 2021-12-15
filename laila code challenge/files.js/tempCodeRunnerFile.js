function Employee(name ,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.monthlyBonus = 20000;

    this.getFinalSalary = function(){
        let finalSalary = this.salary + this.monthlyBonus;
        console.log(finalSalary)
    }

     this.getDetails = function(){
        console.log("Name: " + this.name  +"\n age: " + this.age)
    }

}

let details = new Employee("laila", 64, 20000)
// someone can change the monthly the monthly bonus
details.monthlyBonus = 20000;

details.getDetails()

details.getFinalSalary()