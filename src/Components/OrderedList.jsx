import React from 'react'
import { useNavigate } from 'react-router'
const OrderedList = ({ id, projectName, projectDescription, link }) => {

    const navigate = useNavigate()
    
    return (
        <div className='sub-container'>
            <div className='sub-in'>
                <span>Project: {id}</span>
                <p>Name: {projectName}</p>
                <p>Description: {projectDescription}</p>
            </div>
            <div className='container-button'>
                <button onClick={()=> navigate(`/${link}`)}> <span>Go to Project</span> {id}</button>
            </div>
        </div>
    )
}

export default OrderedList
