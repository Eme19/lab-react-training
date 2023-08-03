import React, { useState } from 'react';
import '../SignUp.css'






function SignupPage (){


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [nationality, setNationality] = useState("");




 
    const handleunSbmit = (e)=> {
        e.preventDefault();
    }
  
    const handleEmailInput = (e)=> {
        setEmail(e.target.value);
    }
     
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleNationality = (e) => {
        setNationality(e.target.value)
    }



    const emailValidation =  /\S+@\S+\.\S+/.test(email);
   let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   let result = regex.test(password);
     


    return (
        <div className='.signup-style'>
            <form onSubmit={handleunSbmit} >
                <div>
                <lable  for="email">Email</lable>
                <input type="email"
                value={email}
                onChange={(e)=>handleEmailInput(e)} className={`form-control ${emailValidation? "valid" : "invalid"}`}
                />
                <div className="valid">Valid emailed</div>

                </div>

                <div>
                <label for="password" >password</label>
                <input type="password"
                 value={password}
                onChange={(e)=>handlePassword(e)} className={`form-control ${result ? 'valid' : 'invalid'}`}
               
                 />
                 <div className='valide-feedback'>Strong Passowrd</div>
                 <div className='invalide-feedback'>Passowrd is weak</div>
                </div>



                <div>
                <label for="nationality" >nationality</label>
                <select>
                <input type="nationality"
                 value={nationality}
                onChange={(e)=>handleNationality(e)}  className="form-control"
                 />
                 <option value="en">English</option>
                 <option value="de">German</option>
                 <option value="fr">French</option>
                 </select>
                </div>
                <div>
                    {/* <p>
                        {nationality === 'en' ? 'Hello': ""}
                        nationality === 'de'? 'Hallo' :  ""
                        nationality === 'fr'? 'Bonjour' : ""
                    </p> */}

                    {nationality === "en" && <p>”Hello”</p>}


                </div>
                <button onClick={null}>Register</button>
                <p>Your email address is: {email}</p>
            </form>

        </div>
    )
}

export default SignupPage; 