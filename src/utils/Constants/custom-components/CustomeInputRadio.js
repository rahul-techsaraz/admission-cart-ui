import React from 'react'

export default function CustomeInputRadio({divlable, style, options, name, onChange, inputValue}) {
  return (
    <div className="gender">
        <span style={style}>{divlable}</span>
        <div className="input-group">
            <div className="ui form">
                <div className="inline-fields">
                {options.map((value)=>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name={name} value={value} onChange={(e)=>onChange(e)} checked={value === inputValue ? true : false}/>
                            <label>{value}</label>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}
