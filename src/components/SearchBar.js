import './SearchBar.css'

function SearchBar ({SearchHandler}) {
    return (
        <div >
            <form>
               <span className='span-style'> Search</span> <input
                type="text"
                onChange={(e)=> SearchHandler(e)}/>

            </form>

        </div>
    )
}

export default SearchBar; 