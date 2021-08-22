// I: Principio de Segregacion de interfaz

// Varias interfaces funcionan mejor que una sola.
// "Dividir y conquistar"

// No confundir con el principio de sustitucion de liskov que es mas orientado a las 
// clases subtipos.

// Problema:

interface IRepositoy<T>{
    update(model:T):void;
    create(model:T):void;
    get(id:number):void;
    getAll():Array<T>;
    remove(id:number):void;
}

class UserRepository implements IRepositoy<User>{
    update(model: any): void {}
    create(model: any): void{}
    get(id: number): void{}
    getAll(): Array<User>{
        return
    }
    remove(id: number): void{}
}


// Esta clase esta obligada a definir metodos que no necesita
class UserReportRepository implements IRepositoy<UserReport>{
    
    get(id: number): void {
        // implementa
    }
    getAll(): UserReport[] {
        return // Implementa
    }



    update(model: UserReport): void {
        throw new Error("No se puede implementar.");
    }
    create(model: UserReport): void {
        throw new Error("No se puede implementar.");
    }
    remove(id: number): void {
        throw new Error("No se puede implementar.");
    }
}

class User{}
class UserReport{}

// *****************************************************************

// SOLUCION: 

interface IReadable<T>{
    get(id:number) :T;
    getAll():Array<T>;
}

interface IWritable<T>{
    update(model:T);
    create(model:T);
}

interface IRemovable{
    remove(id:number);
}

// AHORA:

class UserReportRepository2 implements IReadable<UserReport>{
    
    get(id: number): UserReport {
        return // implementa
    }
    getAll(): UserReport[] {
        return // Implementa
    }
}