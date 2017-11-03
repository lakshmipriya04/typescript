interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    public age: number;
/* spl func tat runs wen u create an obj for tis class */
    constructor(name: string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+this.name);
    }

     register(){
        console.log(this.name+' is now registered');
    }

    payInvoice() {
        console.log(this.name+' paid invoice');
    }
}

class Member extends User {
    id: number;

    constructor(id: number,name: string,email: string,age: number){
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice()
    }
}

let priya = new User('priya lp', 'pi95', 22);
priya.register();
console.log(priya.age);/*will produce error for private*/ 
let priyan: User = new Member(1, 'priyan', 'gmail', 24);
priyan.payInvoice();