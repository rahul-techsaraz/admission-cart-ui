import React from 'react'

export default function CustomeInputRadio({divlable, style, options, onChange}) {
  return (
    <div className="gender">
        <span style={style}>{divlable}</span>
        <div className="input-group">
            <div className="ui form">
                <div className="inline-fields">
                    
                    <div className="field">
                        <div className="ui radio checkbox">
                        {options.map((value, index)=>
                        <>
                            <input type="radio" name="frequency" value={value} onChange={(e)=>onChange(e)}/>
                            <label>{value}</label>
                            </>
                        )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
