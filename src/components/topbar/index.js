import './index.css';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {useLocation} from 'react-router-dom';

function Topbar() {
    const location = useLocation();
    const lastSegment = location.pathname.split('/').pop();
    let pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    if (pageName === "") {
        pageName = "Home";
    }
    return (
        <div className="topbar-container">
            <p id='page-name'> {pageName}</p>
        </div>
    );
}

export default Topbar;