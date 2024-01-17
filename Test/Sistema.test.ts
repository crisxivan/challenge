import { SistemaAlertas } from "../src/Sistema/Sistema";
import { TipoAlerta } from "../src/Tipos/TipoAlerta";

describe('SistemaAlertas', () => {
    // ... (pruebas anteriores)
  
    it('debería enviar alerta a un usuario específico', () => {
      const sistema = new SistemaAlertas();
      const usuario1 = sistema.registrarUsuario('Juan');
      const usuario2 = sistema.registrarUsuario('Maria');
      const temaNoticias = sistema.registrarTema('Noticias');
  
      usuario1.suscribirATema(temaNoticias);
      usuario2.suscribirATema(temaNoticias);
  
      sistema.enviarAlertaAUsuario(TipoAlerta.urgente, '¡Noticia urgente!', temaNoticias, usuario1);
  
      expect(usuario1.alertas.length).toBe(1);
      expect(usuario2.alertas.length).toBe(0);
    });
  });