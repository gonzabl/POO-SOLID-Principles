// de uno a uno

// ej: un usuario tiene asociado una direccion:

class User{
    public address?: AddressErrors; // aqui se da la asociacion 1x1

    public phones : Array<PhoneNumber> = []; // uno a muchos

    public jobs : Array<Job> = []; // muchos a muchos

    constructor( 
        public userId: number,
        public name: string,
        public profession: string){}
}

class Address{
    constructor(
        public addressId:number,
        public addressLine1: string,
        public addressLine2: string,
        public city:string,
        public postCode:string){}
}

// de uno a muchos 
// una clase mantiene una asociacion con otra clase a traves de una coleccion

class PhoneNumber{
    constructor(
        public phoneNumberId: number,
        public number : string
    ){}
}

// de muchos a muchos 
// La asociacion se da en ambos lados a traves de una coleccion

class Job{
    public users: Array<User> = [];// muchos a muchos relacionado con User
    constructor(
        public jobId : number,
        public name : string
    ){}
}