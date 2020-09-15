import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  datos: [],
}

const huespedesSlice = createSlice({
  name: 'huespedes',
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

export const { fetchInit, fetchSuccess, fetchFailure } = huespedesSlice.actions
export const huespedesSelector = state => state.huespedes
export default huespedesSlice.reducer

export function fetchHuespedes() {
  
  return async dispatch => {
    dispatch(fetchInit());

    axios.get('/api/huespedes')
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((error) => {
        dispatch(fetchFailure(error.response.data));
    })
  }
}
