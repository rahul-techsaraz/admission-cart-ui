import React from 'react'

export default function CustomSelectBox({selectname, arialInvalid, onChange, style, divlable}) {
  return (
    <div className="social-category">
        <span style={style}>{divlable}</span>
        <select name={selectname} aria-invalid={arialInvalid} onChange={(e)=>onChange(e)}>
            <option value="">Social Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="Others">Others</option>
        </select>
    </div>
  )
}
