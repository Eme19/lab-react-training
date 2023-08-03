import { useState } from "react";


const inComingProfile = [{}]

function ProfilepaGe(){
    const [newProfile, setNewProfile] = useState(inComingProfile)

    return (


        <div>


            {newProfile.map((updateProfile, index)=> {
                return(
<div key={index}>
    
    <h5>Welcome to your  profile</h5>
    <p>{updateProfile.email}</p>
    <p>{updateProfile.nationality}</p>


    </div>
            
          )  })}

        </div>
    )

}

export default ProfilepaGe;