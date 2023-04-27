import { useState } from "react";
import { createUserWithEmailAndPassword ,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut} from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import "../signup/signup.css"



function Signup ()  {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const [user, setUser] = useState({});
  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword( auth,
        registerEmail,
        registerPassword);
      console.log(user)
    } catch (error ) {
      console.log(error.message)
    }

  }
  const login =  async() =>{
    try {
      const user = await signInWithEmailAndPassword( auth,
        loginEmail,
        loginPassword);
      console.log(user)
    } catch (error ) {
      console.log(error.message)
    }

  }
  const logout =  async() => {
    await signOut(auth);

  }
  return (
    <div className="Signup  bg-">
      <div className="fields">
        <h3>Register User</h3>
        <input placeholder='email'
        className="input"
        onChange={(event)=>{
          setRegisterEmail(event.target.value);
        }}/>
        <input placeholder='password'
        className="input" onChange={(event)=>{
          setRegisterPassword(event.target.value);
        }}/>

        <button className=" btn btn-success" onClick={register}>Create User</button>

      </div>
      <div className="fields">
        <h3>Login</h3>
        <input placeholder="email"
        className="input"
         onChange={(event) => {
          setLoginEmail(event.target.value);
        }}/>
        <input placeholder="Password"
        className="input"
         onChange={(event)=>{
          setLoginPassword(event.target.value);
        }}/>
        <button className=" btn btn-success" onClick={login}>Login in</button>
      </div>
      <div>
        <h3> user loged in</h3>
        {user?.email}
        {/* <input placeholder="email"/>
        <input placeholder="Password"/> */}
        <button className=" btn btn-danger"onClick={logout}>sign out</button></div>

    </div>
  );
}
export default Signup;

