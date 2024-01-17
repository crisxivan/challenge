import { Alerta } from '../Alerta/Alerta';
import { Tema } from '../Tema/Tema'
import { Usuario } from '../Usuario/Usuario'
import { TipoAlerta } from '../Tipos/TipoAlerta'

export class SistemaAlertas {
    private usuarios: Usuario[] = [];
    private temas: Tema[] = [];

    registrarUsuario(nombre: string): Usuario {
        const user = new Usuario(nombre);
        this.usuarios.push(user);
        return user;
    }

    registrarTema(nombre: string): Tema{
        const tema = new Tema(nombre);
        this.temas.push(tema);
        return tema;
    }

    enviarAlertasATodos(tipo: TipoAlerta, mensaje: string, tema: Tema,fechaExpiracion?: Date) {
        this.usuarios.forEach((usuario) => {
            const alerta = new Alerta(tipo, mensaje, tema, usuario,fechaExpiracion);
            if (usuario.temasSuscribir.has(tema)) {
                usuario.recibirAlerta(alerta);
            }
        });
    }
    

    enviarAlertaAUsuario(tipo: TipoAlerta, mensaje: string, tema: Tema, usuario: Usuario, fechaExpiracion?: Date) {
        const alerta = new Alerta(tipo, mensaje, tema, usuario, fechaExpiracion);
        usuario.recibirAlerta(alerta);
      }

    getAlertasNoExpiradasUsuario(usuario: Usuario): Alerta[] {
    return usuario.alertasSinLeer().filter((alerta) => !this.expiroAlerta(alerta));
    }

    getAlertasNoExpiradasTema(tema: Tema): Alerta[] {
    const alertas = this.usuarios.flatMap((usuario) => usuario.alertasSinLeer());
    return alertas.filter((alerta) => alerta.tema === tema && !this.expiroAlerta(alerta));
    }

    expiroAlerta(alerta: Alerta): boolean {
    return alerta.fechaExpiracion ? (alerta.fechaExpiracion < new Date()) : false;
    }
    
}

