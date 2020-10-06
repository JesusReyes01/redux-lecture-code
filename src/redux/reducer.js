//Create initial state

const initialState = {
    user: {
        username: 'Ash Ketchum',
        age: 12,
        email: "gottacatchemall@gmail.com"
    }
}

//Action creator/ Action Builder
const GET_USER = 'GET_USER';

export function getUser(userObj){
    //return action object
    return{
        //Actions always have a type a payload property
        type: GET_USER,
        payload: userObj
    }
}

//Reducer function, control center for your reducer, is what acutally state in redux
export default function reducer(state = initialState, action){
    const {type, payload} = action;

    //Switch determines which action invoked, and then changes state
    switch(type){
        case GET_USER: 
            return {...state, user: payload};
        default:
            return state;

    }
}
