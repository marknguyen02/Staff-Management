import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar'
import Menu from '../menu';
import './index.css'


function Layout() {
    return (
        <div>
            <Sidebar />
            <Menu />
            <Outlet />
        </div>
    );
}

export default Layout;