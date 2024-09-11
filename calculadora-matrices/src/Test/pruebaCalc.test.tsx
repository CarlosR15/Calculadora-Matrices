import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Calculadora from '../Calculadora';

describe('Calculadora', () => {
  it('debería mostrar los títulos correctamente', () => {
    render(<Calculadora />);
    
    // Verifica que aparezcan los textos que indican que es cada parte de la calculadora
    expect(screen.getByText('Calculadora de matrices')).toBeInTheDocument();
    expect(screen.getByText('Matriz A')).toBeInTheDocument();
    expect(screen.getByText('Matriz B')).toBeInTheDocument();
    expect(screen.getByText('Resultado')).toBeInTheDocument();
  });
});