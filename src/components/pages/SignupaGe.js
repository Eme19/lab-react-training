import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useNavigate } from 'react-router-dom';
import '../SignUp.css'




function SignupPage ({newProfile, handleValidation,handlePasswordChange, passwordValue, passwordError , confirmPasswordValue , confirmPasswordError}){
const [registered, setRegistered]= useState(newProfile)
console.log("please show yourself pro pro lol")


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [nationality, setNationality] = useState("");
const [confirmPassword, setConfirmPassword] =useState("")


const Navigate = useNavigate()

    const handleunSbmit = (e)=> {
        e.preventDefault();

  
        const _id = uuidv4()
        const registeredMember = {
            _id, 
            email,
            password,
            nationality,
           confirmPassword
        }

        const updateRegisterForm = [...newProfile];
        updateRegisterForm.push(registeredMember)
        setRegistered(updateRegisterForm)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setNationality("")

        console.log("i know something is in there haha", registeredMember)

        Navigate("/signup-form")
       
    }


    return (
        <div className='.signup-style'>
            <form onSubmit={handleunSbmit} >
                <div>
                <lable  for="email">Email</lable>
                <input type="email" id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value) } placeholder="example@gmail.com"
                />

                </div>

                <div>
                <label for="password" >password</label>
                <input type="password" 
                 id="password"
                 placeholder="*******"
                 value={passwordValue}
                onChange={ handlePasswordChange} onKeyUp={handleValidation} name="password"
               
                 />
                   <p>{passwordError}</p>
 
                </div>


                <div>
                <label for="confirmPassword" >Confirm Password</label>
                <input type="Password"
                id="confirmPassword"
                 placeholder="********"
                 value={confirmPasswordValue}
                onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmpassword"
                 
                 />
                 <p>{confirmPasswordError}</p>

                </div>



                <div>
                <label for="nationality" >nationality</label>
                <input type="nationality" 
                id="nationality"
                 placeholder="Nigeria"
                 value={nationality}
                onChange={(e) =>  setNationality(e.target.value)}
                 />
                 
                </div>
                <button type="sumbit">submit</button>
            </form>

        </div>
    )
}

export default SignupPage; 