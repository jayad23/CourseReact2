import React, { useContext } from 'react'
import RehearsalContext from '../Context/Rehearsal'
import OrderedList from '../Components/OrderedList'

//Styles
import '../Styles/Main.css'

const Home = () => {
    const { state } = useContext(RehearsalContext)
    console.log(state)
    return (
        <div className='main-container'>
            <h1>{state.generalData.presenter.course}</h1>
            <h2>Dev: {state.generalData.presenter.name}</h2>
            <h4>Teacher: {state.generalData.courseInfo.host}</h4>
            <div className='container-list'>
                {
                    state?.generalData?.projects.map(project =>
                        <OrderedList
                            key = {project.id}
                            id = {project.id}
                            projectName = {project.name}
                            projectDescription = {project.description}
                            link = {project.link}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home
