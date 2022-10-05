import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
function handleChange(e){
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    })
}

function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push("/")
}

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}> 
        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        <input type="password" name="password" value= {formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
        </form>
        </div>
  )
}

export default Login