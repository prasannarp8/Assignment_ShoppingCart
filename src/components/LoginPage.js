import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function LoginPage() {
 const [inputval,setnputval]= useState({
    email :"",
    password:""
 })

 const [data,setData] = useState([])
 const history = useHistory()

const getdata =(e)=>{
    const {value,name}=e.target
    setnputval(()=>{
        return {
            ...inputval,
            [name]:value
        }
    })
}

  
const adddata= (e) =>{
e.preventDefault()

const {email,password} = inputval
if(email === ""){
    alert("email required")
}else if(!email.includes("@gmail.com")){
    alert("invalid email")
}else if(!password.includes("@") ){
    alert("invalid password")
}else if(password.length < 5){
    alert("invalid password")
}
 else {
   localStorage.setItem("user",JSON.stringify([...data,inputval]));
   history.push("/Products")
} 
}


  return (
    <div class="maincontainer">
    <div class='container'>
        <h1>Login</h1>
         
        <input type="email" name='email' placeholder="Enter email" onChange={getdata} />
        
        
<input type="password" name='password' placeholder="Enter password" onChange={getdata} /> 


<button class="login-btn" onClick={adddata}>Submit</button>

    </div>
    </div>
  )
}

export default LoginPage