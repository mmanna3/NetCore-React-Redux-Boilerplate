import React, { useState, useCallback } from 'react';
import Table from 'components/Table'
import { fetchHuespedes, huespedesSelector } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import Crear from './crear/Modal'
import {Button} from 'components/Input'

const HuespedesPage = () => {
  const dispatch = useDispatch();
  const { datos, loading, hasErrors } = useSelector(huespedesSelector);

  const fetchData = useCallback(() => {
    dispatch(fetchHuespedes());
  }, [dispatch]);

  const columnas = [
    {
      Header: 'Nombre',
      accessor: 'nombre',
    }
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
        
        <h1 className="title is-1">Huéspedes</h1>
        <div className="buttons is-fullwidth is-pulled-right">
          <Button onClick={showModal} text="Cargar nuevo" />
        </div>        
        <Table  fetchData={fetchData}
                selector={huespedesSelector}
                columnas={columnas}
                datos={datos}
                loading={loading}
                hasErrors={hasErrors}
        />
    </div>
  )
}

export default HuespedesPage;