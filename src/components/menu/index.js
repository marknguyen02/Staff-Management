import './index.css'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Modal from 'react-modal'

function Menu() {

    return (
        <div className='menu-container'>
            <div>
                <FontAwesomeIcon icon={faBars} color="#4d4d4e" width={'30px'}/>
            </div>
        </div>
    )
}

export default Menu;