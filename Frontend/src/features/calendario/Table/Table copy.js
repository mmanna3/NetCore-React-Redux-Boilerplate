// import React from 'react';
// import Cell from './Cell/Cell.js'
// import Styles from './Table.module.scss'
// import Thead from './Thead/Thead.js'

// const Table = ({camasPorHabitacion}) => {  

//   const [selectionData, setSelected] = React.useState({hasStarted: false, currentColumn: -1, currentSelection: []});
  
//   const selectFirstRow = (columnId, rowId) => {
//     updateSelectionData(true, columnId, rowId);
//   }

//   const endSelection = () => {
//     updateSelectionData(false, -1);
//   }

//   const canBeSelected = (columnId, rowId) => {
    
//     if (selectionData.currentColumn === columnId && isContiguous(rowId) && selectionData.hasStarted) {
//       updateSelectionData(true, columnId, rowId);
//       return true;
//     }

//     return false;
//   }

//   const canBeClickedForEndingSelection = (columnId, rowId) => {
//     return selectionData.currentColumn === columnId && isLastRow(rowId) && selectionData.hasStarted;
//   }

//   const isContiguous = (rowId) => selectionData.currentSelection[selectionData.currentSelection.length - 1] + 1 === rowId;

//   const isLastRow = (rowId) => selectionData.currentSelection[selectionData.currentSelection.length - 1] === rowId;

//   const updateSelectionData = (hasStarted, currentColumn, newSelectedRow) => {
//     var copy = selectionData;
//     copy.hasStarted = hasStarted;
//     copy.currentColumn = currentColumn;
    
//     if (newSelectedRow !== undefined)
//       copy.currentSelection.push(newSelectedRow);
  
//     setSelected(copy);
//   }

//   return (  
//       <table className={`table is-hoverable is-bordered is-fullwidth ${Styles.table}`}>
//         <Thead camasPorHabitacion={camasPorHabitacion} />
//         <tbody>
//           {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e, row) => 
//               <tr key={row}>
//                 <td>{e}/07</td>
//                 {[0,1,2,3,4,5,6].map((e, column) =>
//                     <Cell
//                       key={column}
//                       id={`${row}${column}`}
//                       startSelection={() => selectFirstRow(column, row)}
//                       endSelection={() => endSelection()} 
//                       selectionData={selectionData} 
//                       canBeSelected={() => canBeSelected(column, row)}
//                       canBeClickedForEndingSelection={() => canBeClickedForEndingSelection(column, row)}
//                     />
//                 )}
//               </tr>              
//           )}
//         </tbody>
//     </table>
//   )
// }

// export default Table;