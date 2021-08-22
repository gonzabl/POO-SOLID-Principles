// O: Principio de Abierto-Cerrado

// Las piezas de software(clase o funcion) deben estar *abiertas para la extencion* pero
// *cerradas para la modificacion*


// Rompe el principio porque de tener que agregar un nuevo canal de notificacion se debera volver a 
// modificar este codigo y todos los lugares donde se vea afectado

// class NotificationService{

//     send(notification: Array<Notification>){
//         notification.forEach(notification => {
//             if(notification.type === "sms"){
//                 this.sendBySMS(notification.PhoneNumber, notification.Subject);
//             }

//             if(notification.type === "email"){
//                 this.sendByEmail(notification.Email, notification.Subject);
//             }
//         });
//     }

//     sendBySMS(phoneNumber : string, subject : string){
//         // logica para el SMS
//     }

//     sendByEmail(to : string, subject : string){
//         // logica para el e-mail
//     }
// }

// SOLUCION: Extender a traves del polimorfismo

class NotificationService {

    send(notificacion:Array<INotification>){
        notificacion.forEach(n => {n.notify()});
    }
}

interface INotification{
    notify():void;
}

class NotificationEmailService implements INotification{

    constructor(
        private readonly to:string,
        private readonly subject:string){}

    notify(): void {
        // Logica para enviar la notificacion por E-mail
    }
}

class NotificationSMSService implements INotification{

    constructor(
        private readonly to:string,
        private readonly subject:string){}

    notify(): void {
        // Logica para enviar la notificacion por SMS
    }
}