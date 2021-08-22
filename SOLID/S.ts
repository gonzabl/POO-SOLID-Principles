// S: Principio de resposabilidad unica

// Una clase debe tener *una razon* para cambiar


// ***********************************************************************

// La clase en el siguiente codigo muestra como se rompe este principio al designarle al metodo
// add() dos responsabilidades, la de crear la orden y notificar al cliente.

// class OrderService {
//     constructor(private readonly _client : SmtpClient){}

//     add(order:Order){

//         // 01. Codigo para crear la orden

//         // 02. Notificar al cliente

//         var message = new MessageChannel();
//         // message.to = "customer@email.com";
//         // message.from = "admin@emial.com";
//         // message.body = "se le asigno un curso";
//        // message.body = "Estimado, su orden ..";

//         this.sendCustomerNotification(message);
//     }

//     sendCustomerNotification(message:Message){
//         this._client.send(message);
//     }
// }

//********************************************************************** */

// SOLUCION : crear una colaboracion entre clases.

class OrderService {
    constructor(private readonly _mailService : MailService){}

    add(order:Order){

        // 01. Codigo para crear la orden

        // 02. Notificar al cliente

        var message = new MessageChannel();
        // message.to = "customer@email.com";
        // message.from = "admin@emial.com";
        // message.body = "se le asigno un curso";
        // message.body = "Estimado, su orden ..";

        this._mailService.send(message);
    }
}

class MailService{
    constructor(private readonly _smptClient: SmtpClient) { }

    send(message: Message): void{
        this._smptClient.send(message);
    }
}


// para que no rompa:

class SmtpClient{
    send(message : Message){}
}

class Message{}
class Order{}