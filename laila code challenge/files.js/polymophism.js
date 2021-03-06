// polymophism

class Student{
    constructor(name,index,){

        this.name = name;
        this.index = index;
    }

    getName(){
        console.log("Student's is", this.name)
    }
}

let details = new Student("Rose", "UEU01/332");
details.getName()

// inheritance

class SpecialStudent extends Student{
    constructor(name, index, subject){
        super(name,index)
        this.subject = subject;
    }
    getName(){
        console.log("Student's Name:", this.name)

    }

}
let studentName = new SpecialStudent("Ronald", "UEU02/523", "English");
studentName.getName()



// polymophism
// 
class {
    constructor(animallName){
        this.animallName = animallName;
    }

    nameOfAnimal(){
        return this.animallName;
    }
}
let cats = new Animal ("cat");
console.log(cats.nameOfAnimal())

// inheriting from Aimal class
class Dog extends Animal{
    constructor(animallName,color){
        super(animallName);
        this.color = color;
    }

    nameOfAnimal(){
        return this.animallName;
    }

    getColor(){
        console.log("It's a ", this.color, "dog");
    }
}
let dogDetails = new Dog("Dog", "brown")
console.log(dogDetails.nameOfAnimal())
dogDetails.getColor()

// inheriting from Animal class
class Birds extends Animal{
    constructor(animallName,character){
        super(animallName);
        this.character = character;
    } 

    nameOfAnimal(){
        return this.animallName;
    }
}

let bird = new Birds("Hen", 'flying');
console.log(bird.nameOfAnimal())