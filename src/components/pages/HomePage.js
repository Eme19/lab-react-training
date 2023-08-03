import * as React from 'react';
import { Link } from 'react-router-dom';




function HomePage () {
    return (
        <>
<h1>Hellow world</h1>
<p>Something fishy is going down lol<br>
</br>Check out my rough lab hullayyy</p>

<Link to="/about">Click + Smile</Link>
        </>
    )
}


export default HomePage;