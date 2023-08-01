import { useState } from 'react';



function ClickablePicture({img, imgClick}){
   const [showimage , setShowimage] = useState(img)

console.log(showimage)
    function toggleImage(){
        setShowimage((mainImage) => ( mainImage === img ? imgClick : img ))
      }


    return (
      <div className='clickable-style'>
         <img src={showimage} width={300} onClick={toggleImage} style={{cursor: "pointer"}} alt="clickImage"/> 
    
       </div>
    );
}

export default ClickablePicture;