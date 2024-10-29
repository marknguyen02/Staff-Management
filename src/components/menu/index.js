import './index.css';
import { faBars, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';
import {NavLink} from 'react-router-dom'


// Đặt selector cho root element
Modal.setAppElement('#root');

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    // Hàm để mở modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Hàm để đóng modal
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='menu-container'>
            <div onClick={openModal} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faBars} color="#4d4d4e" width={'30px'} />
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="sidebar-menu"
                shouldCloseOnOverlayClick={true} 
     
            >
                <nav>
                    
                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        to="/petition"
                        onClick={closeModal}>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faFileLines} color="#4d4d4e" />
                            <span className='icon-label'> Petition</span>
                        </div>
                    </NavLink>
                </nav>
            </Modal>
        </div>
    );
}

export default Menu;
