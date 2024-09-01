import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalsProps {
    name: string;
    pic: string;
    description: string;
    timeline: string;
    title: string;
    bullets: string[];
}

const Modals: React.FC<ModalsProps> = ({ name, pic, description, timeline, title, bullets }) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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
                    <img className="modsize" src={pic} alt={name} />
                    <div className="exp-text-container">
                        <p className="exp">
                            {description}
                            <p className="title">
                                {title} - {timeline}
                            </p>
                        </p>
                        <ul>{bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    <button className="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Modals;
