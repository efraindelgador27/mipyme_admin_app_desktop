a=new Date();
class Fecha extends Date{
    correntDate;

    constructor(){
        super();
        this.correntDate =new Date();
    }

    geteFullDate(timeZone='America/Bogota'){
        return this.correntDate.toLocaleString('en-US', { timeZone: 'America/Bogota' })
    }
}