import React from 'react'

export default function CustomeInputRadio({divlable, style, options, onChange}) {
  return (
    <div className="gender">
        <span style={style}>{divlable}</span>
        <div className="input-group">
            <div className="ui form">
                <div className="inline-fields">
                    {options.map((value, index)=>
                        <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="" value={value} onChange={(e)=>onChange(e)}/>
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
