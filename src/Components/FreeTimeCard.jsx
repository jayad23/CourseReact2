import React from 'react'

const FreeTimeCard = ({ free1, free2, free3 }) => {
    return (
        <ul style={{background: "#F14A16", color: "#fff"}}>
            <span><b>Fav. Activities</b></span>
            <li>{free1}</li>
            <li>{free2}</li>
            <li>{free3}</li>
        </ul>
    )
}

export default FreeTimeCard
