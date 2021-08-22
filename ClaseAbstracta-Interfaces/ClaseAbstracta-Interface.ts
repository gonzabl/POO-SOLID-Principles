// Son clases que no se pueden instanciar, solo pueden ser implementadas a traves de la herencia

// Limitadas a una sola implementacion.
// Pueden definir comportamiento base.

abstract class User {
    public profession : String;

    constructor(profession : String){
        this.profession = profession;
    }

    goToWork() : void{
        // pueden hacer uso de este metodos las demas clases
        // pero no instaciar la clase abstracta User
    }
}

class Programer extends User{
    constructor(){
        super('Programer');
    }
}

class Artist extends User{
    constructor(){
        super('Artist');
    }
}



//////////////////////////////////////////////////////////////////
// Son un contrato que obliga a una clase a implementar las propiedades y/o metodos definidos.

// no tienen limitacion de implementacion
// Expone metodos abstractos(sin logica)


interface IUser {
    
    profession : String;
    goToWork() : void;
}

interface IUserInformation{
    phoneNumber : string;
}

class Doctor implements IUser{
    profession: string;
    
    constructor(){
        this.profession = 'Doctor';
    }
    goToWork(): void {
        
    }
}

class Police implements IUser, IUserInformation{

    profession: string;
    phoneNumber: string;

    constructor(phoneNumber){
        this.profession= 'Police';
        this.phoneNumber = phoneNumber;
    }

    goToWork(): void {
        
    }
}

function printProfession(model:IUser) : void{
    console.log(model.profession);
}

let police = new Police('911');
let doctor = new Doctor();

printProfession(police);
printProfession(doctor);


// clase que extiende de una clase abstracta e implementa una interfaz
class DobleAgent extends User implements IUserInformation{
    phoneNumber: string;
    
    constructor(phone){
        super('Agent')
        this.phoneNumber = phone;
    }
}