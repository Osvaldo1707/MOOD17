
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


return (
    <div className="container"> 

        <input onChange = {handleChange} name="email" value={state.email} type="text" placeholder="email"/>
        <input type="password" placeholder="123456" />

        <button>Login</button> 

    </div>
)
