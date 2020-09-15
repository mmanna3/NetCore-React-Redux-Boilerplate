import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  requestData: '',
  responseData: '',
  validationErrors: undefined
}

const crearHabitacionSlice = createSlice({
  name: 'crearHabitacion',
  initialState,
  reducers: {
    postInit: (state, { payload }) => {
      state.loading = true
      state.requestData = payload
    },
    postSuccess: state => {
      state.loading = false
      state.validationErrors = undefined
    },
    postFailure: (state, {payload}) => {
      state.loading = false
      state.validationErrors = payload?.errors
    },
    reset: (state) => {
      state.loading = false
      state.responseData = ''
      state.requestData = ''
      state.validationErrors = undefined
    },
  },
})

export const { postInit, postSuccess, postFailure, reset } = crearHabitacionSlice.actions
export const crearHabitacionSelector = state => state.crearHabitacion
export default crearHabitacionSlice.reducer

export function crearHabitacion(data, onSuccess) {  

  return async dispatch => {
    dispatch(postInit(data));

    axios.post('/api/habitaciones', data)
      .then((res) => {
        dispatch(postSuccess(res.data));
        onSuccess();
      })
      .catch((error) => {
          dispatch(postFailure(error.response.data));
      })
  }
}

export function cleanErrors() {
  
  return async dispatch => {
    dispatch(reset());
  }
}
