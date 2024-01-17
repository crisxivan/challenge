import { Tema } from '../src/Tema/Tema';

describe('Tema', () => {
  it('debería registrar temas correctamente', () => {
    const tema = new Tema('Deportes');
    expect(tema.nombre).toBe('Deportes');
  });
});  