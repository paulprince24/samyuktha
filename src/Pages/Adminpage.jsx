import React, { useContext } from 'react'
import AdminNav from '../Components/Adminnav/AdminNav'
import { AdminNavSelectContext } from '../Context/AdminNavSelectContext';
import Dashboard from '../Components/Dashboard/DashBoard'
import Events from '../Components/EventManagement/Event';

const Adminpage = () => {
    const { selectedAdminNavMenu } = useContext(AdminNavSelectContext)
    let contentToRender = null;

    switch (selectedAdminNavMenu) {
        case 'Home':
            contentToRender = <Dashboard />;
            break;
        case 'Event':
            contentToRender = <Events />;
            break;
        case 'Admin':
            contentToRender = <p>Create Admin</p>;
            break;
        case 'Logout':
            contentToRender = <p>Logout.</p>;
            break;
        default:
            contentToRender = <p>Selected menu item not recognized.</p>;
            break;
    }
    return (
        <>
            <AdminNav />
            <div className="d-flex align-items-center justify-content-between py-3 container-md">
                <div className='d-flex gap-2 px-3 py-2 justify-content-center align-items-center text-light' style={{
                    borderRadius: '2em',
                    cursor: 'pointer',
                    background: 'rgb(25 22 76)'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5em' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    Events
                </div>
                <p className='h2 text-light'>Core Committee</p>
                <p></p>
            </div>
            <div className="container-md text-light">
                {contentToRender}
            </div>
        </>
    )
}

export default Adminpage