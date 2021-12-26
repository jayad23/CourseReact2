import React from 'react'

const HobbiesCard = ({ hob1, hob2, hob3 }) => {
    return (
        <ul style={{background: "#EC255A", color: "#fff"}}>
            <span><b>Hobbies...</b></span>
            <li>{hob1}</li>
            <li>{hob2}</li>
            <li>{hob3}</li>
        </ul>
    )
}

export default HobbiesCard
