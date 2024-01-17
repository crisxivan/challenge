import { Tema } from '../Tema/Tema'
import { Alerta } from '../Alerta/Alerta'

export class Usuario {
    nombre: string;
    temasSuscribir: Set<Tema> = new Set();
    alertas : Alerta[] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    suscribirATema(tema: Tema){
        this.temasSuscribir.add(tema);
    }

    recibirAlerta(alerta: Alerta){
        this.alertas.push(alerta);
    }

    alertaLeida(alerta: Alerta){
        alerta.isLeido = true;
    }

    alertasSinLeer(){
        const hayAlertasNoLeidas = this.alertas.some((alerta) => !alerta.isLeido);
        if (hayAlertasNoLeidas) {
            return this.alertas.filter((alerta) => !alerta.isLeido);
        } else {
            return [];
        }
    }
} 