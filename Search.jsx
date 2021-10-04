import React, { useState } from 'react';
import './find.css';
import Sresult from './Sresult';






const Search = () =>{

    // const [value, setValue] = useState();
    const [img, setImg] = useState("");
     const searchChange = (event)=>{
        console.log( event.target.value);
        // setValue( event.target.value);
        setImg(event.target.value)
        
    }
   

    return(
        <>
            
            <div className="search-bar">
                <input type="text" placeholder="Search Anything "  onChange={searchChange} value={img}/>
               {img=== "" ? null :  <Sresult name={img}/> }  
            </div>  
        </>
    )
}
export default Search;  