import { TECHS_ERROR, ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING } from '../actions/types';

const initialState={
    techs:null,
    current:null,
    loading:false,
    error:null
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case TECHS_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false,
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case DELETE_TECH:
            console.log(action.payload)
            return {
                ...state,
                techs:state.techs.filter(tech=>tech.id!==action.payload)
            }
        default:
            return state;
    }
    
}