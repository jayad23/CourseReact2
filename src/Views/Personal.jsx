import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import '../Styles/PersonalForm.css'
import RehearsalContext from '../Context/Rehearsal'

const Personal = () => {

    const { dispatch } = useContext(RehearsalContext)
    const navigate = useNavigate()
    const [ watcher, setWatcher ] = useState({error:''})
    const [ infObject, setInfObject ] = useState({
        name: '', 
        age:'',
        movie:'',
        music:'',
        free1:'',
        free2:'',
        free3:'',
        hob1:'',
        hob2:'',
        hob3:'',
        food1:'',
        food2:'',
        food3:'' 
    })

    const answersCollection = (e)=>{
        e.preventDefault()
        if( infObject.name.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.age.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.free1.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.free2.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.free3.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.hob1.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.hob2.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.hob3.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.movie.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.music.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.food1.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.food2.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else if( infObject.food3.length === 0){
            setWatcher({...watcher, error:'Please, complete this field.'})
        }else{
            alert('submitted')
            dispatch({type: "FORM-COLLECTION", payload: infObject})
            e.target.reset()
            navigate('/cards')
            setWatcher({error:''})
        }
    }

    

    return (
        <div className='div-form'>
            <h1>Tell me about you!</h1>
            <i  style = {{ cursor: 'pointer', color: 'blue'}} className="fas fa-home" onClick={()=> navigate('/')}/>
            <form className='container-form' onSubmit={(e)=> answersCollection(e)}>
                <input type="text" placeholder={ watcher.error.length === 0 ? "What's your name?" : watcher.error } onChange={(e)=> setInfObject({...infObject, name: e.target.value})}/>
                <input type="number" placeholder={ watcher.error.length === 0 ? "How old are you?" : watcher.error } onChange={(e)=> setInfObject({...infObject, age: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? "What's your fav. movie?"  : watcher.error }onChange={(e)=> setInfObject({...infObject, movie: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? "What's your fav. music?" : watcher.error } onChange={(e)=> setInfObject({...infObject, music: e.target.value})}/>
                <span>Complete the sentences...</span>
                <span>In my freetime, I like to...</span>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'complete here' : watcher.error } onChange={(e)=> setInfObject({...infObject, free1: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'complete here' : watcher.error } onChange={(e)=> setInfObject({...infObject, free2: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'complete here' : watcher.error } onChange={(e)=> setInfObject({...infObject, free3: e.target.value})}/>
                <span>Your hobbies</span>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'First Hobbie' : watcher.error } onChange={(e)=> setInfObject({...infObject, hob1: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'Second Hobbie' : watcher.error } onChange={(e)=> setInfObject({...infObject, hob2: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? 'Third Hobbie' : watcher.error } onChange={(e)=> setInfObject({...infObject, hob3: e.target.value})}/>
                <span>Tell me three of your favorite dish!</span>
                <input type="text" placeholder={ watcher.error.length === 0 ? "Fav. Dish 1" : watcher.error } onChange={(e)=> setInfObject({...infObject, food1: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? "Fav. Dish 2" : watcher.error } onChange={(e)=> setInfObject({...infObject, food2: e.target.value})}/>
                <input type="text" placeholder={ watcher.error.length === 0 ? "Fav. Dish 3" : watcher.error } onChange={(e)=> setInfObject({...infObject, food3: e.target.value})}/>
                <button type='submit'><span>Submit</span></button>
            </form>
        </div>
    )
}

export default Personal
