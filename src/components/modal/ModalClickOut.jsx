import React from 'react'

const ModalClickOut = (props) => {
    const {modalMessage,modalHeader,modalButtonText,modelShow, modelSetShow} = props
    
  return (
    <div>
        {/* Open the modal using ID.showModal() method */}
        <button className="btn" onClick={()=> modelSetShow()}>{modalButtonText??'Button'}</button>

        <dialog id="my_modal_2" className="modal" open={(modelShow==1)}>
          <div className="modal-box">
              <h3 className="font-bold text-lg">{modalHeader??'Header'}</h3>
              <p className="py-4">{modalMessage??'This is message'}</p>
          </div>
          <form method="dialog" className="modal-backdrop"
          onClick={()=>{modelSetShow()
          console.log(modelShow)}}>
              <button></button>
          </form>
        </dialog>
    </div>
  )
}

export default ModalClickOut