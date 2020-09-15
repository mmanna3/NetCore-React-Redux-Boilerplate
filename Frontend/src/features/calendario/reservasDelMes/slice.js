import { createSlice } from '@reduxjs/toolkit'
import { selectedOptions } from './consts'

export const initialState = {
  calendario: [],
  selectionHasStarded: false,
  primeraCeldaSeleccionada: {},
  ultimaCeldaSeleccionada: {}
}

const reservasDelMesSlice = createSlice({
  name: 'reservasDelMes',
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      state.calendario = payload
    },
    seleccionarPrimeraCeldaAction: (state, {payload}) => {
      var celda = state.calendario[payload.row][payload.col];
      
      if (celda.selected === selectedOptions.NO) {
        celda.selected = selectedOptions.FIRST;
                
        siNoEstaSeleccionadaMarcarComoSeleccionable(state, payload.row+1, payload.col); //la de abajo
        siNoEstaSeleccionadaMarcarComoSeleccionable(state, payload.row, payload.col+1); // la de la derecha

        state.primeraCeldaSeleccionada = {row: payload.row, col: payload.col};
        
        state.selectionHasStarded = true;
      }
    },
    seleccionarUltimaCeldaAction: (state, {payload}) => {
      state.calendario[payload.row][payload.col] = crearCelda(selectedOptions.LAST);
      state.selectionHasStarded = false;
      state.primeraCeldaSeleccionada = {};
      state.ultimaCeldaSeleccionada = {};
    },
    seleccionarCeldaUnicaAction: (state, {payload}) => {
      state.calendario[payload.row][payload.col] = crearCelda(selectedOptions.UNIQUE);
    },
    seleccionarCeldaIntermediaAction: (state, {payload}) => {
      var celda = state.calendario[payload.row][payload.col];
      
      if (state.selectionHasStarded && celda.canBeSelected) {
        celda.selected = selectedOptions.YES;
        celda.canBeSelected = false;        
        
        siNoEstaSeleccionadaMarcarComoSeleccionable(state, payload.row+1, payload.col); //la de abajo
        siNoEstaSeleccionadaMarcarComoSeleccionable(state, payload.row, payload.col+1); // la de la derecha

        state.ultimaCeldaSeleccionada = {row: payload.row, col: payload.col};
      }      
    }
  },
})

function crearCelda(selected, canBeSelected = false) {
  return {
    selected: selected,
    canBeSelected: canBeSelected
  }
}

function siNoEstaSeleccionadaMarcarComoSeleccionable(state, row, col) {
  var celdaDeAbajo = state.calendario[row][col];
  if (celdaDeAbajo.selected === selectedOptions.NO)
    celdaDeAbajo.canBeSelected = true;
}


export const { setState, seleccionarCeldaUnicaAction, seleccionarPrimeraCeldaAction, seleccionarUltimaCeldaAction, seleccionarCeldaIntermediaAction } = reservasDelMesSlice.actions
export const reservasDelMesSelector = state => state.reservasDelMes
export default reservasDelMesSlice.reducer

export function setInitialState(data) {
  return async dispatch => {
    dispatch(setState(data));
  }
}

export function seleccionarCeldaUnica(row, col) {
  return async dispatch => {
    dispatch(seleccionarCeldaUnicaAction({row, col}));
  }
}

export function seleccionarPrimeraCelda(row, col) {
  return async dispatch => {
    dispatch(seleccionarPrimeraCeldaAction({row, col}));
  }
}

export function seleccionarUltimaCelda(row, col) {
  return async dispatch => {
    dispatch(seleccionarUltimaCeldaAction({row, col}));
  }
}

export function seleccionarCeldaIntermedia(row, col) {
  return async dispatch => {
    dispatch(seleccionarCeldaIntermediaAction({row, col}));
  }
}