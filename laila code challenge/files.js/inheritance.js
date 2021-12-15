class owner{
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

let laila = new owner("laila", "trix@gmail.com", "498klu@");
laila.getInformation()
laila.getPersonalDetails()

// inheritance

class SpecialEmployee extends owner{
    constructor(username, email, password, yahoo){
        super(username, email,password)
        this.yahoo = yahoo;
    }

    userYahoo(){
        console.log("your yahoo is ", this.yahoo);
    }
}
let adimn = new SpecialEmployee("laila", "trix@gmail.com", "498klu@", "mike@yahoo.com");
adimn.userYahoo()
adimn.getInformation()
adimn.getPersonalDetails()