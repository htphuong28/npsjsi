import React from 'react'

const InputFormLabels = (props) => {
    const {topLeftLabel,
        topRightLabel, 
        bottomLeftLabel, 
        bottomRightLabel, 
        inputType, 
        inputPlaceholder, 
        inputValue, 
        setInputValue,
        onFocus,
        onBlur,
        reStyle} = props;

  return (
    <div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">{topLeftLabel}</span>
    <span className="label-text-alt">{topRightLabel}</span>
  </label>
  <input type={inputType ?? 'text'} placeholder={inputPlaceholder?? 'Please enter text'} value = {inputValue} onChange={(e) => setInputValue(e.target.value)} 
  onFocus={onFocus}
  onBlur={onBlur}
  className={`input input-bordered w-full max-w-xs${reStyle}`}/>
  <label className="label">
    <span className="label-text-alt">{bottomLeftLabel}</span>
    <span className="label-text-alt">{bottomRightLabel}</span>
  </label>
</div>
    </div>
  )
}

export default InputFormLabels