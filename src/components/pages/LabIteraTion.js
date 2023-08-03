import { useState } from 'react';
import LikesButton from '../LikesButton';
import Dice from '../Dice';
import ClickablePicture from '../ClickablePicture';
import Carousel from '../Carousel';
import NumbersTable from '../NumbersTable';
import FaceBook from '../FaceBook'
import profiles from '../data/berlin.json';
import SearchBar from '../SearchBar';
import { Link} from 'react-router-dom';






function LabIteraTion() {

  const colors = ['purple','blue','green','yellow','orange','red'] 

 

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [like, setLike] = useState(0);
  const [profile, setProfile] = useState(profiles)
  
 


  
  function SearchHandler(e){
    const allUser = profiles.filter((users)=> {
      return users.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setProfile(allUser)
  }



  function nextColor () {
    const newColorIndex = selectedColorIndex + 1;
    setLike(like + 1)
    if (colors[newColorIndex])
    setSelectedColorIndex(newColorIndex) 
    else setSelectedColorIndex(0)

  }
                         
 function sortByCountry(countryName){
  const sortedCountry =[...profile].filter((person)=> {
   return person.country.toLowerCase() === countryName.toLowerCase()})
   console.log( "sorted country", sortedCountry)
   setProfile(sortedCountry)
console.log(countryName)
  }


  function sortByName() {
    const sortByName = [...profile].sort((a,b)=> {
      return a.firstName.localeCompare(b.lastName)})
      setProfile(sortByName) 
  }


 

  return (
    <div className="App">
  <h4>Welcome curious Cat lol<br></br>Click on the button wink!
  </h4>

    <LikesButton nextColor={nextColor} colors={colors} selectedColorIndex={selectedColorIndex} like={like}/>
    <ClickablePicture img='maxence.png' imgClick='maxence-glasses.png' />
    <div>
    <Link to="/signup-form">Signup</Link>
    </div>
    <Dice/>
    <Carousel 
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

<NumbersTable limit={12} />
<SearchBar SearchHandler={SearchHandler}/>
<FaceBook profile={profile}   sortByCountry={sortByCountry} sortByName={sortByName} /> 

    </div>
  );
}

export default LabIteraTion;
