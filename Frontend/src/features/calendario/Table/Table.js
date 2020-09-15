import React, {useEffect} from 'react';
import Cell from './Cell/Cell.js'
import Styles from './Table.module.scss'
import Thead from './Thead/Thead.js'
import {init} from 'features/calendario/reservasDelMes/helper'

const Table = ({camasPorHabitacion, diasDelMes}) => {

  var camas = camasPorHabitacion.map((habitacion) => 
  habitacion.camas.map((cama) => {
      return {
        habitacion: habitacion.nombre,
        cama
      }
  })).flat();
  
  useEffect(() => init(diasDelMes, camas), [camasPorHabitacion, diasDelMes, camas]);

  return (
      <table className={`table is-hoverable is-bordered is-fullwidth ${Styles.table}`}>
        <Thead camasPorHabitacion={camasPorHabitacion} />
        <tbody>
          {diasDelMes.map((dia, row) => 
              <tr key={row}>
                <td>{dia}/07</td>
                {camas.map((cama, column) =>
                      <Cell
                        key={column}
                        row={row}
                        column={column}
                      />
                )}
              </tr>              
          )}
        </tbody>
    </table>
  )
}

export default Table;