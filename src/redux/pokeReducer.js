import axios from 'axios'
//Create initial state
const initialState = {
    pokemon: {}
}
//Action creator/ Action Builder
const GET_POKEMON = 'GET_POKEMON';
export function getPokemon(){
    const rand = Math.ceil(Math.random() * 151);
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    return{
        //Actions always have a type a payload property
        type: GET_POKEMON,
        payload: pokemon 
    }
}
//Reducer function, control center for your reducer, is what acutally state in redux
export default function pokeReducer(state = initialState, action){
    const {type, payload} = action;
    //Switch determines which action invoked, and then changes state
    switch(type){
        case GET_POKEMON + '_PENDING': 
            return state;
        case GET_POKEMON + '_FULFILLED':
            return {...state, pokemon:payload}
        case GET_POKEMON + '_REJECTED':
            return state;
        default:
            return state;
    }
}
