import React from 'react';
import { InputWithoutLabel, Select } from "components/Input";    
import { Icon } from "components/Icon";    

const SelectCama = ({cama, setTipoCama, removeCama, setValue}) => {

  const IdentificadorIndividualOMatrimonial = ({cama, setValue}) => {

    return <div className="field">
            <span className="control is-expanded">
              <InputWithoutLabel 
                          name={`camas${cama.tipo}[${cama.index}].nombre`} 
                          placeholder="Identificador"
                          onChange={e => setValue(cama.globalIndex, {nombre: e.target.value})}
                          value={cama.value?.nombre}/>
            </span>
          </div>
  };

  const IdentificadorCamaMarinera = ({cama}) => {
    
    function setValueMarinera(){
      var abajo = document.getElementsByName(`camasMarineras[${cama.index}].nombreAbajo`)[0].value;
      var arriba = document.getElementsByName(`camasMarineras[${cama.index}].nombreArriba`)[0].value;

      setValue(cama.globalIndex, {nombreAbajo: abajo, nombreArriba: arriba});
    }
    
    return <>
            <span className="field">
                <InputWithoutLabel 
                  name={`camasMarineras[${cama.index}].nombreAbajo`} 
                  placeholder="Id. Abajo"
                  onChange={() => setValueMarinera()}
                  value={cama.value?.nombreAbajo}
                  />
              </span>
              <span className="field">
                <InputWithoutLabel 
                  name={`camasMarineras[${cama.index}].nombreArriba`} 
                  placeholder="Id. Arriba"
                  onChange={() => setValueMarinera()}
                  value={cama.value?.nombreArriba}
                />
              </span>
          </>
  };  

  const onTipoCamaChanged = (e) => {
    setTipoCama(cama.index, cama.tipo, e.target.value);
  }

  return (
    <div className="field field-body is-grouped">

        <div className="field is-expanded has-addons" style={{minWidth:"200px"}}>
          <span className="control">
            <span className="button is-static">
              Cama
            </span>
          </span>
          <span className="control is-expanded">
            <Select value={cama.tipo || ''} ccsClass="is-fullwidth" onChange={onTipoCamaChanged}>
              <option value="Individuales">Individual</option>
              <option value="Matrimoniales">Matrimonial</option>
              <option value="Marineras">Marinera</option>
            </Select>
          </span>
        </div>
        
        {cama.tipo !== 'Marineras' ?
          <IdentificadorIndividualOMatrimonial cama={cama} setValue={setValue} /> :
          <IdentificadorCamaMarinera cama={cama} setValue={setValue}/>
        }
        
        <button className="button has-text-grey has-background-light" type="button" onClick={removeCama(cama.globalIndex)}>
            <Icon faCode="trash-alt" />
        </button>

    </div>
  )
}

export default SelectCama;