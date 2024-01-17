import { Alerta } from '../src/Alerta/Alerta';
import { Tema } from '../src/Tema/Tema';
import { Usuario } from '../src/Usuario/Usuario';
import { TipoAlerta } from '../src/Tipos/TipoAlerta';
import { SistemaAlertas } from '../src/Sistema/Sistema';

describe('Alerta', () => {
  it('debería crear una alerta correctamente', () => {
    const tema = new Tema('Noticias');
    const usuario = new Usuario('Juan');
    const fechaExpiracion = new Date();

    const alerta = new Alerta(TipoAlerta.urgente, 'Mensaje urgente', tema, usuario, fechaExpiracion);

    expect(alerta.tipo).toBe(TipoAlerta.urgente);
    expect(alerta.mensaje).toBe('Mensaje urgente');
    expect(alerta.tema).toBe(tema);
    expect(alerta.destinatario).toBe(usuario);
    expect(alerta.fechaExpiracion).toBe(fechaExpiracion);
    expect(alerta.isLeido).toBeFalsy();
  });

  it('debería marcar una alerta como leída', () => {
    const alerta = new Alerta(TipoAlerta.informativo, 'Mensaje informativo', new Tema('Deportes'), null);

    alerta.isLeido = true;

    expect(alerta.isLeido).toBeTruthy();
  });
 
});
