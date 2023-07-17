"use client"
import { useState } from "react";
import{TextField, Stack} from '@mui/material';
import { login } from "../services/firebase/auth";




export default function Login() {
const [state, setState] = useState({
    email:"",
    password,
});



const handleChange = (event) => {
    const { name, value } = event.target;
    setState ({
        ...state,
        [name]: value 
        })    
        
}

const onLogin = () => {
    const { email, password} = state;
    login(email, password);
}

}


return (
    <Stack
        width="500px"
        spacing={2} // int 1 = donde 1 es 8px
        py="10px"
        m={4}
    
    > 

        <TextField onChange = {handleChange} 
        name="email" 
        value={state.email} 
        type="text" 
        placeholder="email"/>
        <TextField type="password"
         placeholder="123456" 
         />
        <TextField
        name="password"
        onChange={handleChange}
        type="password"
        label="123456"
        />
        <button variant="outlined" onClick={onLogin}>Login</button> 

    </Stack>
)
