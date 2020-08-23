import React from 'react';
import {useState,useEffect} from 'react';

const AddUser =(props)=>{

    const submithandler=()=>{
        
        props.submit(firstName,lastName,email)
    
        setfirstName('')
        setlastName('')
        setemail('')
        setenableEdit(!enableEdit)
    }

   

    useEffect(() => {
        setenableEdit(props.add);
    }, [props.add])
   
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [enableEdit, setenableEdit] = useState(props.add);
    // console.log(props.add)
     console.log(enableEdit)
    const add=()=>{
       
        return <div>
            
            <input type="text" placeholder="Enter first name" value={firstName} onChange={event => setfirstName(event.target.value)}/>
            <input type="text" placeholder="Enter last name" value={lastName} onChange={event => setlastName(event.target.value)}/>
            <input type="email" placeholder="Enter email" value={email} onChange={event => setemail(event.target.value)}/>
            <p>(All the fields are mandatory)</p>
            <button className='btn btn-danger add' onClick={()=>submithandler()}>submit</button>
            <button className='btn btn-danger add' onClick={()=>(setenableEdit(!enableEdit))}>cancel</button>
            
        </div>
    }
   
return(
    <div>
       {enableEdit?add():""}
    </div>
)
 }

export default AddUser ;