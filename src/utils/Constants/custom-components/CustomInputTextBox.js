import React from 'react';

export default function CustomInputTextBox({
  inputType,
  className,
  placeHolder,
  inputValue,
  onChange,
  style,
  spellcheck,
  inputId,
  inputName,
  inputLabel,
  divlable,
}) {
  return (
    <div className="full-name">
      <span style={style}>{divlable}</span>
      <div className="input-field">
        <input
          type={inputType}
          className={className}
          placeholder={placeHolder}
          value={inputValue}
          onChange={(e) => onChange(e)}
          id={inputId}
          name={inputName}
          spellCheck={spellcheck}
        />
        {/* <label>{inputLabel}</label> */}
      </div>
    </div>
  );
}
