// Se dan a traves de una referencia de una clase
// con el fin de logran un cometido

// una o mas clases se ponen de acuerdo para lograr un cometido

// para manipular las clase del dominio se crea otra adicional que manejara 
// las operaciones de CRUD para separar las responsabilidades.

class UserRepository{
    private users: Array<User> = [
        new User(1,"Daniel","Artist"),
        new User(2,"Immanuel","CEO"),
    ]

    // Para obtener un usuario hace referencia al usuario pero como retorno del metodo
    // es decir una instancia 
    retriever(userId : number):User{
        return this.users.find(x => x.userId == userId) as User;
    }

    // en este caso hace referencia a la clase pero como parametro de entrada
    add(user:User) :void{
        this.users.push(user);
    }
}

// asi funciona la colaboracion!