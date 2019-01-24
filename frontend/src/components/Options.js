import React from 'react';
import { Input } from 'react-materialize';

const Options = (props) => {  
  let options = props.data.map((option, index) => {
    return (
      <option value={index} key={option.id}>{option.name}</option>
    )
  });
  
  if(!props.required) {
    let line = <option value={null} key={null}></option>
    options = [line, options]
  }

  return (
    <Input s={3} type='select' label={props.fieldLabel} name={props.fieldName} onChange={props.onChange}>
      {options}
    </Input>
  )
}

export default Options;