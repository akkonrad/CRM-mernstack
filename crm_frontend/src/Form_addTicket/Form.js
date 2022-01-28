import React,{useContext} from 'react'
import FormContext from '../context/FormContext';
import './Form.css'



function Form() {
    const { data, setData, status, setstatus, date, setDate } = useContext(FormContext);
    const { handleSubmit, handlechange,FormData} = useContext(FormContext);
    // const [data, setData] = useState("");
    // const [status, setstatus] = useState("");
    // const [date,setDate] = useState("");
    // const FormData ={
    //     subject: "",
    //     status: "",
    //     date:""
    // }
    // const handlechange = (e) => {
    //     let { name, value } = e.target;
    //     if (name == 'subject') {
    //         setData(value);
            
    //     } else if (name == 'status') {
    //         setstatus(value);
    //     } else if (name == 'date') {
    //         setDate(value);
    //     }
        
        
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     FormData.subject = data;
    //     FormData.status = status;
    //     FormData.date = date;
    //     console.log(FormData);
    // }
    return (
        <div className='form-container'>
            <form>
                <label for="fname">Enter your Subject here:</label><br />
                <input type="text" id="subject" onChange={handlechange} name='subject'value={data}/><br />
                <label for="lname">Enter your Status here:</label><br />
                <input type="text" id="status"  onChange={handlechange} name='status' value={status}/><br/>
                <label for="lname">Enter your Opened Date:</label><br />
                <input type="date" id="status" onChange={handlechange} name='date' value={date}/><br />
                <button type='submit' onClick={handleSubmit}>Submit Form</button>
                
            </form>
        </div>
    )
}

export default Form
