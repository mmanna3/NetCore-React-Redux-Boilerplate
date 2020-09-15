import React from 'react';
import { ModalForm, Body, Header, FooterAcceptCancel } from 'components/Modal';
import { Input, ValidationSummary } from "components/Input";
import { crearHuesped, cleanErrors, crearHuespedSelector } from './slice';
import { useDispatch, useSelector } from 'react-redux';

const Crear = ({isVisible, onHide, onSuccessfulSubmit}) => {

  const {loading, validationErrors} = useSelector(crearHuespedSelector);
  const [resetOnChanged, resetForm] = React.useState(0);

  const dispatch = useDispatch();
  const onSubmit = data => dispatch(crearHuesped(data, onSuccess));  
  
  function onSuccess() {
    onSuccessfulSubmit();
    resetForm(resetOnChanged+1);
  }

  function hide() {
    onHide();
    dispatch(cleanErrors());
  }

  return (
    <ModalForm
        isVisible={isVisible}
        onHide={hide}
        onSubmit={onSubmit}
        resetOnChanged={resetOnChanged}
    >
      <Header title="Alta de huésped" onHide={hide} />
      <Body>
        <ValidationSummary errors={validationErrors} />
        <Input label="Nombre" name="nombre" />
      </Body>
      <FooterAcceptCancel onCancel={hide} loading={loading} />
      
    </ModalForm> 
  )
}

export default Crear;