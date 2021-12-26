import React from 'react'

const PersonalInfoCard = ({ name, age, movie, music }) => {
    return (
        <div style={{background: "#D4AC2B", color: "#fff"}}>
            <p><b>Name:</b> {name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Favorite Movie:</b> {movie}</p>
            <p><b>Favorite Music:</b> {music}</p>
        </div>
    )
}

export default PersonalInfoCard
