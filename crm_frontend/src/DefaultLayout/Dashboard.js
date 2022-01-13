import React from 'react'
import './Dashboard.css'
import TableDashboard from './TableDashboard'

function Dashboard() {
    return (
        <>
            <div className='dashboard-container'>
                <div className='add-ticket'>
                    Add Ticket
                </div>
                <div>Total tickets:50</div>
                <div>Pending tickets:7</div>

            </div>  
            <div className='table-header'>My Recently Added Tickets</div>
            <div className='table-container'>
            {/* table here */}
            <TableDashboard/>
            </div>
        </>
    )
}

export default Dashboard
