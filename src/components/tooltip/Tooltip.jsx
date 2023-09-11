import React from 'react'

const Tooltip = (props) => {
    const {dataTip, tipButtonText, tooltipState, setTooltipState} = props
  return (
    <div>
        <div className={`${tooltipState?'tooltip':'tooltip'}`} data-tip={dataTip??'Tip'}
        onMouseOver={setTooltipState}
        onMouseLeave={setTooltipState}>
            <div></div>
            <button className="btn">{tipButtonText??'Hover plz'}</button>
        </div>
    </div>
  )
}

export default Tooltip