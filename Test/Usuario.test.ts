import { Usuario } from '../src/Usuario/Usuario';
import { Tema } from '../src/Tema/Tema';
import { Alerta } from '../src/Alerta/Alerta';

describe('Usuario', () => {
  it('debería registrar usuarios correctamente', () => {
    const usuario = new Usuario('Juan');
    expect(usuario.nombre).toBe('Juan');
  });

  it('debería suscribirse a un tema correctamente', () => {
    const usuario = new Usuario('Juan');
    const tema = new Tema('Deportes');
    usuario.suscribirATema(tema);
    expect(usuario.temasSuscribir.has(tema)).toBe(true);
  });
  
  it('debería recibir alertas correctamente', () => {
    const usuario = new Usuario('Juan');
    const tema = new Tema('Deportes');
    usuario.suscribirATema(tema);

    const alerta = new Alerta('Informativa', 'Mensaje de prueba', tema, usuario);
    usuario.recibirAlerta(alerta);

    expect(usuario.alertas.length).toBe(1);
  });

  it('debería marcar una alerta como leída correctamente', () => {
    const usuario = new Usuario('Juan');
    const tema = new Tema('Deportes');
    usuario.suscribirATema(tema);

    const alerta = new Alerta('Informativa', 'Mensaje de prueba', tema, usuario);
    usuario.recibirAlerta(alerta);

    expect(usuario.alertas[0].isLeido).toBe(false);
    usuario.alertaLeida(usuario.alertas[0]);
    expect(usuario.alertas[0].isLeido).toBe(true);
  });
});

 