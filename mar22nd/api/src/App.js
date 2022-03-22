import React, { useState } from "react";
import { login } from "./api";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault()
    console.log(email,password)
    try{
        const result = await login({email,password})
        console.log(result)
    }catch(err){
        console.log(err)
        setError(err.error)
    }
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
          <small>
              {
                  error && error.email ?
                  error.email : null
              }
          </small>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={changePassword} />
          <small>
              {
                  error && error.password ?
                  error.password : null
              }
          </small>
        </div>
        <div>
            <button onClick={submit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
