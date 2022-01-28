import React, {useContext }from 'react'
import './Dashboard.css'
import TableDashboard from './TableDashboard'
import Object from '../Data/Object'
import AddTicket from '../Form_addTicket/AddTicket';
import FormContext from '../context/FormContext';


function Dashboard() {
    const { form } = useContext(FormContext);
    console.log(Object);
    return (
        <>
            <div className='dashboard-container'>
                <div className='add-ticket'>
                    <AddTicket/>
                </div>
                <div>Total tickets:{form.length}</div>
                <div>Pending tickets:7</div>

            </div>
            <div className='table-header'>My Recently Added Tickets</div>
            <div className='table-container'>

                {/* table dahsboard  here --we can pass data to table from here */}
                <TableDashboard form={form}/>

                
            </div>
        </>
    )
}

export default Dashboard
