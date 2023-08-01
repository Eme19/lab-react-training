import { useState } from 'react';
import LikesButton from './components/LikesButton';
import Dice from './components/Dice';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook'
import profiles from './data/berlin.json';
import SearchBar from './components/SearchBar';



import './App.css';

function App() {

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
                         
 function sortByCountry(){

  const sortedCountry =[...profile].sort((a,b)=> {
   return a.country.localeCompare(b.country) })
   setProfile(sortedCountry)
  }


 
 

  

  return (
    <div className="App">
      
  
    <LikesButton nextColor={nextColor} colors={colors} selectedColorIndex={selectedColorIndex} like={like}/>
    <ClickablePicture img='maxence.png' imgClick='maxence-glasses.png' />
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
<FaceBook profile={profile}   sortByCountry={sortByCountry} />
    </div>
  );
}

export default App;
