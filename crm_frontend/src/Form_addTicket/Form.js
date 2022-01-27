import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='form-container'>
            <form>
                <label for="fname">Enter your Subject here:</label><br />
                <input type="text" id="subject"/><br />
                <label for="lname">Enter your Status here:</label><br />
                <input type="text" id="status"  /><br/>
                <label for="lname">Enter your Opened Date:</label><br />
                <input type="text" id="status" /><br />
                <button type='submit'>Submit Form</button>
                
            </form>
        </div>
    )
}

export default Form
