import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar'
import Menu from '../menu';
import Topbar from '../topbar';
import './index.css'



function Layout() {
    return (
        <div>
            <Topbar />
            <Sidebar />
            <Menu />
            <Outlet />
        </div>
    );
}

export default Layout;