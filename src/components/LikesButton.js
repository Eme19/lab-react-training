import './LikesButton.css'


function LikesButton({nextColor, selectedColorIndex, like, colors}){

    return (
      <div>
       <button className='btn-likebutton' style={{backgroundColor: colors[selectedColorIndex]}}
       onClick={nextColor}>
      {like} likes
       </button>
      
      </div>
    );
}

export default LikesButton;