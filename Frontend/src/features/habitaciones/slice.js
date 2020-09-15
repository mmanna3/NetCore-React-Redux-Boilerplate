import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  datos: [],
}

const habitacionesSlice = createSlice({
  name: 'habitaciones',
  initialState,
  reducers: {
    fetchInit: state => {
      state.loading = true
    },
    fetchSuccess: (state, { payload }) => {
      state.datos = payload
      state.loading = false
      state.hasErrors = false
    },
    fetchFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { fetchInit, fetchSuccess, fetchFailure } = habitacionesSlice.actions
export const habitacionesSelector = state => state.habitaciones
export default habitacionesSlice.reducer

export function fetchHabitaciones() {
  
  return async dispatch => {
    dispatch(fetchInit());

    axios.get('/api/habitaciones')
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((error) => {
        dispatch(fetchFailure(error.response.data));
    })
  }
}
