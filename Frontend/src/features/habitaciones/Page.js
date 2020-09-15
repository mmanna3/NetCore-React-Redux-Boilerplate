import React, { useState, useCallback } from 'react';
import Table from 'components/Table'
import { fetchHabitaciones, habitacionesSelector } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import Crear from './crear/Modal'
import {Button} from 'components/Input'

const HabitacionesPage = () => {
  const dispatch = useDispatch();
  const { datos, loading, hasErrors } = useSelector(habitacionesSelector);

  const fetchData = useCallback(() => {
    dispatch(fetchHabitaciones());
  }, [dispatch]);

  const columnas = [
    {
      Header: 'Nombre',
      accessor: 'nombre',
    },
    {
      Header: 'Camas matrimoniales',
      accessor: 'camasMatrimoniales.length',
    },
    {
      Header: 'Camas marineras',
      accessor: 'camasMarineras.length',
    },
    {
      Header: 'Camas individuales',
      accessor: 'camasIndividuales.length',
    },
  ]
  
  const [IsModalVisible, setModalVisibility] = useState(false);

  function closeModalAndRefreshTable() {
    hideModal();
    fetchData();
  }

  function hideModal(){
    setModalVisibility(false);
  }

  function showModal(){
    setModalVisibility(true);
  }  

  return (
    <div className="container">
        <Crear isVisible={IsModalVisible} onHide={hideModal} onSuccessfulSubmit={closeModalAndRefreshTable}></Crear>
        
        <h1 className="title is-1">Habitaciones</h1>
        <div className="buttons is-fullwidth is-pulled-right">
          <Button onClick={showModal} text="Cargar nueva" />
        </div>        
        <Table  fetchData={fetchData} 
                selector={habitacionesSelector} 
                columnas={columnas}
                datos={datos}
                loading={loading}
                hasErrors={hasErrors}
        />
    </div>
  )
}

export default HabitacionesPage