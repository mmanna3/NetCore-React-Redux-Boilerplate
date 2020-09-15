import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';
import Thead from './Thead';

configure({ adapter: new Adapter() });

describe('Thead', () => {
    
  var camasPorHabitacion = [
      {
        nombre: 'Azul',
        camas: ['Individual: A', 'Individual: B']
      },
      {
        nombre: 'Roja',
        camas: ['Matrimonial: 1', 'Mar. Arriba: 2', 'Mar. Abajo: 3']
      },
      {
        nombre: 'Verde',
        camas: ['Matrimonial: Matri', 'Individual: Indi']
      }
    ];

  it('tiene dos filas', () => {
      const wrapper = shallow(<Thead camasPorHabitacion={camasPorHabitacion} />);
      const theadHtml = wrapper.find('thead');
      const rows = theadHtml.find('tr');
      expect(rows).toHaveLength(2);
  })

  it('muestra habitaciones correctamente', () => {
    const wrapper = shallow(<Thead camasPorHabitacion={camasPorHabitacion} />);
    const theadHtml = wrapper.find('thead');
    const habitacionesTr = theadHtml.find('tr').first();
    const habitaciones = habitacionesTr.find('th');
    expect(habitaciones).toHaveLength(4);
    
    const texts = habitaciones.map((node) => node.text());
    expect(texts).toEqual(['', 'Habitación Azul', 'Habitación Roja', 'Habitación Verde']);
  })

  it('muestra camas correctamente', () => {
    const wrapper = shallow(<Thead camasPorHabitacion={camasPorHabitacion} />);
    const theadHtml = wrapper.find('thead');
    const habitacionesTr = theadHtml.find('tr').at(1);
    const habitaciones = habitacionesTr.find('th');
    expect(habitaciones).toHaveLength(7);
    
    const texts = habitaciones.map((node) => node.text());
    expect(texts).toEqual(['Individual: A', 'Individual: B', 'Matrimonial: 1', 'Mar. Arriba: 2', 'Mar. Abajo: 3', 'Matrimonial: Matri', 'Individual: Indi']);
  })
})