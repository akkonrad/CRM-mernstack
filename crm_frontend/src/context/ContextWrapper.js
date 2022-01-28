import React, { createContext, useState } from 'react';
import FormContext from './FormContext';
const Contextwrapper = ({ children }) => {
    
    const FormData = [{
        subject: "",
        status: "",
        date:""
    }]
    const [data, setData] = useState("");
    const [status, setstatus] = useState("");
    const [date, setDate] = useState("");
    const [validate,setValidate]=useState(true)
    const [form,setform] = useState(FormData);
    const handlechange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        if (name == 'subject') {
            setData(value);
           
        
            
        } else if (name == 'status') {
            setstatus(value);
        } else if (name == 'date') {
            setDate(value);
        }
        
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setform([...form, { subject: data, status: status, date: date }])
      
        
            
      
       
        
    }
    return (
        
        <FormContext.Provider value={{handleSubmit,handlechange,data, setData,status,setstatus,date,setDate,form}}>
            {children}
        </FormContext.Provider>
    );
}

export default Contextwrapper;
