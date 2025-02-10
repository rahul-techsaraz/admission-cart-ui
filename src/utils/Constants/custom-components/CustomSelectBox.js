import React from 'react'

export default function CustomSelectBox({selectname, arialInvalid, onChange, style, divlable, values, inputValue}) {
  
  return (
    <div className={"social-category"}>
        <span style={style}>{divlable}</span>
        <select name={selectname} aria-invalid={arialInvalid} onChange={(e)=>onChange(e)} defaultValue={inputValue?inputValue:divlable}>
            {values.map((options)=>
            <option value={options === divlable ? '' : options}>{options}</option>
            )}
        </select>
    </div>
  )
}
