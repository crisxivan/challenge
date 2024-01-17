import { SistemaAlertas } from "./Sistema/Sistema";
import { TipoAlerta } from '../src/Tipos/TipoAlerta'

const sistema = new SistemaAlertas();
const usuario1 = sistema.registrarUsuario("Juan");
const usuario2 = sistema.registrarUsuario("Maria");
const usuario3 = sistema.registrarUsuario("Mauro");
const usuario4 = sistema.registrarUsuario("Cristina");
const temaDeporte = sistema.registrarTema("Deportes"); 
const temaNoticias = sistema.registrarTema("Noticias"); 
const urgente: TipoAlerta = TipoAlerta.urgente;
const informativo: TipoAlerta = TipoAlerta.urgente;
const fechaActual = new Date();
usuario1.suscribirATema(temaDeporte);
usuario2.suscribirATema(temaNoticias);
usuario3.suscribirATema(temaDeporte);
usuario4.suscribirATema(temaDeporte);

sistema.enviarAlertasATodos(urgente, "¡Noticia urgente!", temaDeporte,fechaActual);
sistema.enviarAlertaAUsuario(informativo, "¡Noticia para ti!", temaNoticias, usuario1,new Date(fechaActual.setDate(fechaActual.getDate() + 3)));
sistema.enviarAlertaAUsuario(informativo, "¡Noticia para ti!", temaNoticias, usuario2,new Date(fechaActual.setDate(fechaActual.getDate() + 3)));
sistema.enviarAlertaAUsuario(informativo, "¡Noticia para ti!", temaNoticias, usuario3,new Date(fechaActual.setDate(fechaActual.getDate() + 3)));
sistema.enviarAlertaAUsuario(informativo, "¡Noticia para ti!", temaNoticias, usuario4,new Date(fechaActual.setDate(fechaActual.getDate() + 3)));

console.log("Alertas de Usuario 1:", sistema.getAlertasNoExpiradasUsuario(usuario1));
console.log("Alertas de Usuario 2:", sistema.getAlertasNoExpiradasUsuario(usuario2));
console.log("Alertas de Usuario 3:", sistema.getAlertasNoExpiradasUsuario(usuario3));
console.log("Alertas de Usuario 4:", sistema.getAlertasNoExpiradasUsuario(usuario4));
console.log("Alertas de Tema Noticias:", sistema.getAlertasNoExpiradasTema(temaNoticias));
console.log("Alertas de Tema Deporte:", sistema.getAlertasNoExpiradasTema(temaDeporte));