import React, {useContext} from 'react'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext'

export default function Modal(props) {
   const {modal,setModal} = useContext(ModalContext)
    let modalStyle={
display:'block',
backgroundColor:"rgba(0, 0, 0, 0.8)"
    }
    return (
        <div className="modal show fade" style={modalStyle} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button onClick={()=>setModal(0)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{props.content}</p>
            </div>
          
          </div>
        </div>
      </div>
    )
}
