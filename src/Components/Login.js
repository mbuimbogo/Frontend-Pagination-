import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
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
    <div className='container ml-3 mt-4'>
        <h1 className='text-primary mb-3'>Login</h1>
        
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name="password" value= {formData.password} onChange={handleChange}className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login