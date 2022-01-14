import React, { useState } from 'react'
import Form from './Form';

function AddTicket() {
    const [showTicket, setshowTicket] = useState(true);
    //jab true ho to ticket show hojaye mtlb form;
    function handleForm() {
        // setshowTicket(Form)
        console.log('clicked');
        setshowTicket(preState => !preState)
        console.log(showTicket);
    }

    return (
        <div className='ticket-show'>
            <div onClick={handleForm}>Add Ticket</div>
            <div className='form-show'>
                {showTicket ? <Form /> : ''}
            </div>
        </div>
    )
}

export default AddTicket
