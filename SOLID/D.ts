// Principio de Inversion de dependencia

// Clases de *alto nivel* no deben depender de las clases *bajo nivel*

// Caso que rompe:

// Si se decide cambiar la clase de envio de Mail, en este caso MailChimpService, por otra,
// se debera modificar las dependecia de todo el codigo donde se haga uso de esta clase. 

class MailChimpService{
    send(message:Message):void{}
}

class OrderService{
    constructor(private readonly mailchimpService: MailChimpService){}

    create():void{
        //  codigo para crear la orden

        // Enviar notificacion de la order creada

        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@email.com";
        message.body="...";

        this.mailchimpService.send(message);
    }
}

class Message{
    public to :string;
    public from :string;
    public body: string;
}

// Solucion:

interface IMailService{
    send(message:Message):void;
}

class MailChimpService2 implements IMailService{
    send(message: Message): void {/* Todo */}
}

class SendBlueService implements IMailService{
    send(message: Message): void {/* Todo */}
}

class SendGridService implements IMailService{
    send(message: Message): void {/* Todo */}
}

class OrderService2{
    constructor(private readonly mailService: IMailService){}

    create():void{
        //  codigo para crear la orden

        // Enviar notificacion de la order creada

        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@email.com";
        message.body="...";

        this.mailService.send(message);
    }
}

// ejemplos:
// Ahora puedo cambiar facilmente de tipo de servicio sin tener que 
// alterar la clase de alto nivel, simplemente le paso la clase que va a usar.

let orderService = new OrderService2(new MailChimpService2());

let orderService2 = new OrderService2(new SendGridService());
