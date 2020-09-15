import React from "react";

export function Input({ register, label, name, ...otrosAtributos }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" name={name} ref={register} {...otrosAtributos} />
        {/* <input class="input is-danger has-icons-right" name={name} ref={register} type="text"/>
         <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>           
        </span> */}
      </div>
      {/* <p class="help is-danger">This email is invalid</p> */}
      
    </div>
  )
}

export function Label({ text, ...otrosAtributos }) {
  return (
      <label className="label" {...otrosAtributos}>{text}</label>
  )
}

export function InputWithoutLabel({ register, name, ...otrosAtributos }) {
  return (
      <input className="input" name={name} ref={register} {...otrosAtributos} />
  )
}

export function NumericInput({ register, label, name, ...otrosAtributos }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" name={name} ref={register} {...otrosAtributos} type="number" defaultValue="0"/>
        {/* <input class="input is-danger has-icons-right" name={name} ref={register} type="text"/>
         <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>           
        </span> */}
      </div>
      {/* <p class="help is-danger">This email is invalid</p> */}
      
    </div>
  )
}

export function SubmitButton({ text, loading }) {
  if (!loading)
    return <button className="button is-primary" type="submit">{text}</button>
  else
    return <button className="button is-primary is-loading" type="button">{text}</button>
}

export function Button({ text, ...otrosAtributos }) {
  return <button className="button is-primary has-text-weight-medium" type="button" {...otrosAtributos}>{text}</button>
}

export function Select({ register, name, children, onChange, ccsClass, ...otrosAtributos }) {
  return (
    <div className={`select ${ccsClass}`}>
      <select name={name} ref={register} onChange={onChange} {...otrosAtributos}>
        {children}
      </select>
    </div>
  );
}

export const ValidationSummary = ({errors}) => {
  
  function errorsList(){
    var result = [];

    for (var key in errors)
      result.push(<li key={key}>{errors[key]}</li>);

    return result;
  }
  
  if (errors !== undefined)
    return (
        <div className="notification is-danger is-light">
          <div className="content">
              {errorsList()}
          </div>
        </div>
    );
    
  return null;
}