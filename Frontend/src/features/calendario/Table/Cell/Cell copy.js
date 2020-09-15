// import React from 'react';
// import Styles from './Cell.module.scss'

// const Cell = ({id, startSelection, endSelection, selectionData, canBeSelected}) => {

//   const [style, setStyle] = React.useState('');
//   const [isSelected, setIsSelected] = React.useState(false);

//   function onMouseEnter() {    
//     if (canBeSelected() && !isSelected)
//       select();      
//   }

//   const select = () => {
//     setStyle(Styles.selected);
//     setIsSelected(true);
//   }

//   const cancelSelection = () => {
//     endSelection();
//   }

//   const onMouseDown = (e) => {    
//     e.preventDefault();

//     if (isSelected) {
//       cancelSelection();
//     }

//     if (!selectionData.hasStarted) {      
//       setStyle(`${Styles.firstSelected} ${Styles.selected}`);
//       setIsSelected(true);
//       startSelection();     
//     }     
//   }

//   const onMouseUp = (e) => {
//     if (selectionData.hasStarted) {
//       e.preventDefault();
//       setIsSelected(false);
//       endSelection();    
//       setStyle(`${Styles.lastSelected} ${Styles.selected}`);
//     }
//   }

//   return (
//     <td id={id} 
//         className={style} 
//         onMouseUp={(e) => onMouseUp(e)} 
//         onMouseDown={(e) => onMouseDown(e)} 
//         onMouseEnter={onMouseEnter}>
//     </td>
//   )
// }

// export default Cell;