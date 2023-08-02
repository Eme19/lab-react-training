import { useState } from 'react';
import './FaceBook.css'



function FaceBook ({profile,  sortByCountry, sortByName}) {
    const [check, setCheck] = useState(false) 
    const [indicator, setIndicator] = useState("") 


const handlcClick = ()=> {
    setCheck(!check)
}
 


    return (
        <div >
             <div className="btn-styFacebook" >
             <button  onClick={sortByName} >Sort by Name</button>
                 <button onClick={(e)=> {sortByCountry("England"); setIndicator("England")}} className={indicator} >England</button>
                 <button  onClick={(e) => {sortByCountry("USA"); setIndicator("USA")}} className={indicator}>USA</button>
                 <button onClick={(e) => {sortByCountry("Malaysia"); setIndicator("Malaysia")}} className={indicator} >Malaysia</button>
                 <button  onClick={(e) => {sortByCountry("Germany"); setIndicator("Malaysia")}} className={indicator}>Germany</button>
             </div>
            
      
        <table>
           <tbody >
            { profile.map((profiledata, indx)=> {
                return (
                    <tr key={indx}>
                        <td><img className="img-style" src={profiledata.img} alt="" onClick={handlcClick}/>
                        {check && 
                        <ul>
                            <li className={indicator}> <span>First Name:</span> <i>{profiledata.firstName}</i></li>
                            <li> <span>Last Name:</span> {profiledata.lastName}</li>
                            <li><span>Country:</span> {profiledata.country}</li>
                            <li className='Teacher'> 
                                <span>Type: </span> </li>
                        </ul>
            }
                        </td>
                    
                    </tr>
                    
                )
            })}
           </tbody>
        </table>
       
        
        </div>
    )
}

export default FaceBook; 