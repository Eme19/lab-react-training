import { useState } from 'react';
import './FaceBook.css'



function FaceBook ({profile,  sortByCountry}) {
    const [check, setCheck] = useState(false) 
    const [checkType, setCheckType] = useState(false) 

const handlcClick = ()=> {
    setCheck(!check)
}
 

    return (
        <div >
             <div className="btn-styFacebook" >
             <button  onClick={sortByCountry} >Sort by Country</button>
                 <button  onClick={null }  >England</button>
                 <button  onClick={null }  >USA</button>
                 <button  onClick={null }  >Malaysia</button>
                 <button  onClick={null }  >Germany</button>
             </div>
            
      
        <table>
           <tbody>
            { profile.map((profiledata, indx)=> {
                return (
                    <tr key={indx}>
                        <td><img className="img-style" src={profiledata.img} alt="" onClick={handlcClick}/>
                        {check && 
                        <ul>
                            <li> <span>First Name:</span> <i>{profiledata.firstName}</i></li>
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