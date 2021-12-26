import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RehearsalContext from '../../Context/Rehearsal'

//Sub-Components
import PersonalInfoCard from '../../Components/PersonalInfoCard'
import FreeTimeCard from '../../Components/FreeTimeCard'
import HobbiesCard from '../../Components/HobbiesCard'
import FoodCard from '../../Components/FoodCard'

//Styles
import '../../Styles/Cards.css'

const Cards = () => {
    const { state } = useContext(RehearsalContext);
    const { cardsInfo } = state;
    console.log(cardsInfo)
    return (
        <div className='container-cards'>
            <Link to="/personal">Add another User</Link>
            <div className='subcontainer-cards'>
                {
                    cardsInfo?.map( personal =>
                        <PersonalInfoCard
                            key = {personal.name}
                            name = {personal.name}
                            age = {personal.age}
                            movie = {personal.movie}
                            music = {personal.music}
                        />
                    )
                }
                {
                    cardsInfo?.map( free =>
                        <FreeTimeCard
                            key = {free.name}
                            free1 = {free.free1}
                            free2 = {free.free2}
                            free3 = {free.free3}
                        />
                    )
                }
                {
                    cardsInfo?.map( hobbie =>
                        <HobbiesCard
                            key = {hobbie.name}
                            hob1 = {hobbie.hob1}
                            hob2 = {hobbie.hob2}
                            hob3 = {hobbie.hob3}
                        />
                    )
                }
                {
                    cardsInfo?.map( food =>
                        <FoodCard
                            key = {food.name}
                            food1 = {food.food1}
                            food2 = {food.food2}
                            food3 = {food.food3}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Cards
