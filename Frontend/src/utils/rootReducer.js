import { combineReducers } from 'redux'

import habitacionesReducer from 'features/habitaciones/slice'
import crearHabitacionReducer from 'features/habitaciones/crear/slice'

import huespedesReducer from 'features/huespedes/slice'
import crearHuespedReducer from 'features/huespedes/crear/slice'

import reservasDelMesReducer from 'features/calendario/reservasDelMes/slice'

import loginReducer from 'features/login/slice'


const rootReducer = combineReducers({
  login: loginReducer,
  
  habitaciones: habitacionesReducer,
  crearHabitacion : crearHabitacionReducer,
  
  huespedes: huespedesReducer,
  crearHuesped: crearHuespedReducer,

  reservasDelMes: reservasDelMesReducer,
});

export default rootReducer;
