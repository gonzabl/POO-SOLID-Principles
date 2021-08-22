// L: Principio de Sustitucion de Liskov

// Las **clases subtipos** deberian ser reemplazables por sus clases Padres.

// Rompe el principio ya que al tener dos metodos que no puedo usar
// para una de sus clases lo normal es arojar un error o excepcion lo cual 
// afecta el comportamieto del sistema. El usuario no necesita saber la implementacion
// solamente usarlo, al no proveer buenos metodos estariamos proveyendo un pesimo diseño.

class Animal{
    run():void{}
    walk():void{}
    hunt():void{}
}

class Tiger extends Animal{}

class Turtle extends Animal{
    run(){
        throw new Error('No puede correr')
    }

    hunt(){
        throw new Error('No puede cazar')
    }
}

//SOLUCION: definir interfaces independientes para cada comportamiento del animal 
// dependiendo de solo lo que necesiten

interface IHunt{
    hunt():void
}

interface IRun{
    run():void
}

interface IWalk{
    walk():void
}

class Tiger2 implements IHunt,IRun,IWalk{
    hunt(): void {}
    run(): void {}
    walk(): void {}
}

class Turtle2 implements IWalk{
    walk():void{}
}