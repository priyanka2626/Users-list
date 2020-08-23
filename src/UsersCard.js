import React from 'react';
import {useState} from 'react';


const UsersCard =(props)=>{

    const handleRemove=()=>{
        props.RemoveUser(props.users.id)
    }
    const updateuser=()=>{
        props.EditUser(firstName,lastName,props.users.id)
        settoggle(!toggle)
    }
    const edittoggle=()=>{
        settoggle(!toggle)
    }

    const [toggle, settoggle] = useState(true);
    const [firstName, setfirstName] = useState(props.users.first_name);
    const [lastName, setlastName] = useState(props.users.last_name);

    const RenderList=()=>{
        if(props.users.length!==0)
        {
            return (
                <div key={props.users.id}>
                        <div className="card back container fixed">
                            <img className="card-img-top img" src={props.users.avatar} />
                            <div className="card-body">
                                {toggle?<h1 onClick={edittoggle}>{`${props.users.first_name} ${props.users.last_name}`}</h1> :
                                <div>
                                <input type="text" defaultValue={props.users.first_name} onChange={event=>setfirstName(event.target.value)}/>
                                <input type="text" defaultValue={props.users.last_name} onChange={event=>setlastName(event.target.value)}/>
                                
                                <input type="button" value="save" onClick={()=>updateuser()}/>
                               </div>
                                }
                                <img src="https://img.icons8.com/ultraviolet/20/000000/email-open.png" />
                                <span className="size">{props.users.email}</span>
                            </div>
                            <button onClick={()=>handleRemove()}>remove</button>
                            
                        </div>
                    </div>
            )
        }
                
        }
    

    

return(
    <div>
       {RenderList()}
    </div>
)


 }

    
    



export default UsersCard ;