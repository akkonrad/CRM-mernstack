import React from 'react'

function TableDashboard({tickets}) {
    console.log(tickets.length);
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Opened Date</th>
                    </tr>
                </thead>

                {tickets.length ?
                    tickets.map((ele, id) => {
                        return (
                            <tbody key={id}>
                                <tr >
                                    <td>{ele.Subject}</td>
                                    <td>{ele.Status}</td>
                                    <td>{ele.Date}</td>
                                </tr>
                            </tbody>
                        )
                    })
                    : (
                        <tbody>
                            <tr>
                                no action on tickets
                            </tr>
                        </tbody>
                    )
                    

                }


            </table>


        </div>
    )
}

export default TableDashboard
