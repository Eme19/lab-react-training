import { useState } from 'react';
import './FaceBook.css'



function FaceBook ({profile}) {
    const [check, setCheck] = useState(false) 
    const [selectCountry, setSelectCountry] = useState("ALL")


const handlerCheck = (country) => {
    setSelectCountry(country)
}


const eachCountry = profile.map((profile) => profile.country).filter((country, index, mapcurrentValue) => mapcurrentValue.indexOf(country) === index)



const handlcClick = ()=> {
    setCheck(!check)
}
 

    return (
        <div>
        <div> 
            <button onClick={()=> handlerCheck("All")}>ALL</button>
            {eachCountry.map((country, index) => {
               return <button key={index} onClick={()=> handlerCheck(country)}>{country}</button>
            })}
        </div>
             <div>
            {profile.filter((profiledata)=> (selectCountry === "All" ? profile : profiledata.country === selectCountry))
            .map((profiledata, index) => (
                    <div key={index}>
                        <img className="img-style" src={profiledata.img} alt={`${profiledata.firstName} ${profile.lastName}`} onClick={handlcClick}/>
                        <h2>{profiledata.firstName}</h2>
                        <h2 >{profiledata.lastName}</h2>
                        <h2>{profiledata.country}</h2>
                        <h2>Type: {profiledata.isStudent ? "Student" : "Teacher"} </h2>
                    </div>
                ) )}
                </div>
        </div>
             )
}

export default FaceBook; 