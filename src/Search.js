import React,{Component} from 'react';
import UsersCard from './UsersCard';
import './Layout1.css'
import AddUser from './AddUser';
import uuid from 'uuid/v4';

class Search extends Component{

    state= {
        users:[],
        search: '',
        adduser:false
    }

    componentDidMount() {
        fetch( 'https://reqres.in/api/users/' )
            .then( response => response.json())
            .then(data => this.setState({users: data.data}));
           
    }
    updateSearch=(e)=>{
         this.setState({
             search:e.target.value.substr(0,20)
         })
    }
    refreshPage=()=> {
        window.location.reload(false);
      }

      remove = (id) => {
        this.setState({
            users: this.state.users.filter(t=>t.id !=id)
        })
      }

      Adduser=()=>{
          this.setState({
            adduser:!this.state.adduser
          })
      }

    OnSubmitHandler = (first,last,email) => {

        if(first!=='' && last!=='' && email!=='')
        {
        let obj = {}
        obj.id = uuid()
        obj.first_name = first;
        obj.last_name = last;
        obj.email = email;
        
        this.setState({  
            users:[...this.state.users,obj] 
        
        });
    }
       
    }

    EditUserHandler=(first,last,id)=>{
        const updateduser = this.state.users.map(user => {
            if (user.id == id) {
                return { ...user, first_name: first, last_name: last }
            }
            return user;
        })
        this.setState({ users: updateduser })
    }

    render(){
        let filteredUsers=this.state.users
        const excludeColumns = ["avatar"];
                filteredUsers = this.state.users.filter(item => {
                        return Object.keys(item).some(key =>
                          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(this.state.search.toLowerCase())
                        );
                      });  

        
        return(
            <div>
                {filteredUsers.map(user=>{return <UsersCard users={user} RemoveUser={this.remove} key={user.id} EditUser={this.EditUserHandler}/>})}
               <input  type="text" placeholder="Search" defaultValue={this.state.search} onChange={this.updateSearch}/>
                <button className='btn btn-danger add' onClick={this.refreshPage}>Click to reload!</button>
                 <button className='btn btn-danger add' onClick={this.Adduser}>Add</button> 
                 <AddUser  add={this.state.adduser} submit={this.OnSubmitHandler}/>
                
                
            </div>
        )
    }
}

export default Search ;