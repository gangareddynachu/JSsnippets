//Function Borrowing
const Employee = {
    firstName:"Gangareddy",
    lastName:"Nachu",
    getName: function(city,profile){
        //console.log(this);
        console.log(` name::: ${this.firstName} ${this.lastName}
        and city is ${city} and profile is ${profile}`);
    }
}
const Customer = {
    firstName:"Manohar",
    lastName:"reddy"
}
Employee.getName();

Employee.getName.call(Customer,'Delhi','Instructor'); //argumnets as comma seperated
Employee.getName.apply(Customer,['Goa','Artist']); //arguments are passed as array

//call and apply will execute then and there even it is not called
//They return and call the same func at the time of binding

//so bind is useful in cases where we need it explicitly.
//bind the context of this and execute it later on

const handler = Employee.getName.bind(Customer);

handler("Goa","Instructor ");
handler("Goa1","Instructor1 ");

