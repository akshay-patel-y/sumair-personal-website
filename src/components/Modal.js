import Modal from 'react-modal'
import React, { useState } from 'react'

Modal.setAppElement('#root')

const Modals = ({ name, pic, description, timeline, title, bullets }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="grid-item" onClick={() => setModalIsOpen(!modalIsOpen)}>
            <img className="experience-images" src={pic} alt="" />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(!modalIsOpen)}
                style={{
                    overlay: {
                        // backgroundColor: 'grey',
                    },
                }}
                // shouldCloseOnOverlayClick={false}
            >
                <div className="modal-container">

                <h1 className="test">{name}</h1>
                <img className="modsize" src={pic} alt="Ross" />
                {/** THis is my Exp Section */}
                
                    <div className="exp-text-container">
                        <p className="exp">
                            {description} <p className="title">{title} - {timeline}</p>
                        </p>
                        <ul >{bullets.map(item=><li key={item}>{item}</li>)}</ul>
                    </div>
               
           
                    <button className="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
                        Close
                    </button>
              
                </div>
            </Modal>
        </div>
    )
}

export default Modals
