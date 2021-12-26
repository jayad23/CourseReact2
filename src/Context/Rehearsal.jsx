import axios from 'axios'
import React, { createContext, useReducer } from 'react'
import { GeneralData } from '../GeneralData/GeneralData'
import quotes from '../GeneralData/Quotes.json'

const RehearsalContext = createContext()
const reducer = (state, action)=>{
    switch (action.type) {
        case "FORM-COLLECTION":
            
            return{
                ...state,
                cardsInfo: [...state.cardsInfo, action.payload]
            };
        case "API-CALL":
        
            return{
                ...state,
                userData: [...state.userData, action.payload]
            };
        case "API-ERROR":
        
            return{
                ...state,
                noUserData: [...state.noUserData, action.payload]
            };
        default:
            return state;
    }
}
const RehearsalContextProvider = ({children}) => {
   
    // useEffect(() => {
    //     const urlRq = 'https://jsonplaceholder.typicode.com/users'
    //     axios.get(urlRq)
    //     .then(res => dispatch({ type: 'API-CALL', payload: res.data}))
    //     .catch(err => dispatch({ type:"API-ERROR", payload: err}))
    // }, [])
    
    const objectConsumption = {
        usersData: [],
        noUsersData: [],
        generalData: GeneralData,
        quoteObj: quotes,
        cardsInfo: [],
    }
    const [ state, dispatch ] = useReducer(reducer, objectConsumption)
    
    const Data = {
        state,
        dispatch
    }
    console.log(state.quoteObj)
    return (
        <RehearsalContext.Provider value={Data}>
            {children}
        </RehearsalContext.Provider>
    )
}

export { RehearsalContextProvider }
export default RehearsalContext
