import React from 'react'

const FoodCard = ({ food1, food2, food3 }) => {
    return (
        <ul style={{background: "#370665", color: "#fff"}}>
            <span><b>Fav. Food</b></span>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3}</li>
        </ul>
    )
}

export default FoodCard
