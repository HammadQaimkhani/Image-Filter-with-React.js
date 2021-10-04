import React from 'react'

const Sresult = (props)=>{
    const imgSrc = `https://source.unsplash.com/600x400/?${props.name}`;
    return(
        <>
            <div>
                <img src={imgSrc} alt="search" />
            </div>
        </>
    )

}   

export default Sresult;