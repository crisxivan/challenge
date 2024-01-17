import { Tema } from '../Tema/Tema'
import { Usuario } from '../Usuario/Usuario'

export class Alerta {
    tipo : string;
    mensaje :string;
    tema: Tema;
    destinatario: Usuario | null;
    isLeido: boolean = false;
    fechaExpiracion?: Date;

    constructor(tipo: string, mensaje: string, tema: Tema, destinatario: Usuario | null, fechaExpiracion?: Date){
        this.tipo = tipo;
        this.mensaje = mensaje;
        this.tema = tema;
        this.destinatario = destinatario;
        this.fechaExpiracion = fechaExpiracion;
    }
}
