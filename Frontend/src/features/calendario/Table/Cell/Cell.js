import React, { useEffect } from 'react';
import Styles from './Cell.module.scss'
import { selectedOptions } from 'features/calendario/reservasDelMes/consts'
import { reservasDelMesSelector } from 'features/calendario/reservasDelMes/slice'
import { useSelector } from 'react-redux'
import { seleccionarUnSoloDiaEnUnaSolaCama, seleccionarDiaIntermedio, iniciarSeleccion, terminarSeleccion } from 'features/calendario/reservasDelMes/helper'

const Cell = ({row, column}) => {

  const [style, setStyle] = React.useState('');
  const {calendario} = useSelector(reservasDelMesSelector);

  var selectedCssClassesMap = {};
  selectedCssClassesMap[selectedOptions.NO] = Styles.unselected;
  selectedCssClassesMap[selectedOptions.YES] = Styles.selected;
  selectedCssClassesMap[selectedOptions.UNIQUE] = `${Styles.selected} ${Styles.firstSelected} ${Styles.lastSelected}`;
  selectedCssClassesMap[selectedOptions.FIRST] = `${Styles.selected} ${Styles.firstSelected}`;
  selectedCssClassesMap[selectedOptions.LAST] = `${Styles.selected} ${Styles.lastSelected}`;

    useEffect(() => {
        if (calendario && calendario.length > 0){
          var info = calendario[row][column];  
          setStyle(selectedCssClassesMap[info.selected]);
        }

    }, [calendario, row, column, selectedCssClassesMap]);  
  
  const onClick = () => {
    
    seleccionarUnSoloDiaEnUnaSolaCama(row, column);
  }

  const onMouseDown = (e) => {    
    e.preventDefault();
    iniciarSeleccion(row, column);  
  }

  const onMouseUp = (e) => {
    e.preventDefault();
    terminarSeleccion(row, column);
  }

  const onMouseEnter = (e) => {
    e.preventDefault();    
        
    // if (calendario && calendario[row][column].canBeSelected) {
      seleccionarDiaIntermedio(row, column);
    // }      
  }

  return (
    <td className={style} 
        row={row}
        column={column}
        onClick={onClick}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown} 
        onMouseEnter={onMouseEnter}>
    </td>
  )
}

export default Cell;