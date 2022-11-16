
class Correo {

    constructor(){
        this.headers = {};
        this.from = '';
        this.to = '';
        this.cc = '';
        this.bcc = '';
        this.subject = '';
        this.text = '';
        this.html = '';
        this.attachments = [];
    }
    
}

module.exports = Correo;