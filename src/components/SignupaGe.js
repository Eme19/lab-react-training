import React, { useState } from 'react';


function SignupPage (){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [nationality, setNationality] = useState("");
const [confirmPassword, setConfirmPassword] =useState("")


const inputChangeHandler= (e) => {
    const {id, value} = e.target;

    if(id === "email" ){
        setEmail(value)
    }

    if(id === "password"){
        setPassword(value)

    }

    if(id === "confirmPassword"){
        setConfirmPassword(value)

    }

    if(id === "nationality"){
        setNationality(value)

    }

}

    const handleunSbmit = (e)=> {
        e.preventDefault();
    }



    return (
        <div>
            <form onSubmit={handleunSbmit}>
                <div>
                <lable for="email">Email</lable>
                <input type="email" 
                id="email"
                value={email}
                onChange={(e) => inputChangeHandler(e)} placeholder="example@gmail.com"
                />

                </div>

                <div>
                <label for="password" >password</label>
                <input type="password" 
                id="password"
                 placeholder="********"
                 value={password}
                onChange={(e) => inputChangeHandler(e)}
                 
                 />

                </div>


                <div>
                <label for="confirmPassword" >Confirm Password</label>
                <input type="Password" 
                id="confirmPassword"
                 placeholder="********"
                 value={confirmPassword}
                onChange={(e) => inputChangeHandler(e)}
                 
                 />

                </div>



                <div>
                <label for="nationality" >nationality</label>
                <input type="nationality" 
                id="nationality"
                 placeholder="Nigeria"
                 value={nationality}
                onChange={(e) => inputChangeHandler(e)}
                 />
                 
                </div>
                <button type="submit" >submit</button>
            </form>

        </div>
    )
}

export default SignupPage; 