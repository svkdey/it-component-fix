import {UPDATE_LOG,SEARCH_LOGS,GET_LOGS,CLEAR_CURRENT,SET_LOADING,LOGS_ERROR,ADD_LOG,DELETE_LOG, SET_CURRENT} from './types';
import axios from 'axios';

export const getLogs=()=>{
    //redux thunk returns a functon that contains dispatch
    return async (dispatch)=>{
        try {
            setLoading();
            const res = await axios.get('/logs');
            dispatch({
                type: GET_LOGS,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }
       
    }
}
export const searchLogs = (text) => {
    //redux thunk returns a functon that contains dispatch
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.get(`/logs?q=${text}`);
            dispatch({
                type: SEARCH_LOGS,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }

    }
}
export const setLoading=()=>{
    return {
        type:SET_LOADING
    }
}
export const setCurrent=(log)=>{
    return {
        type:SET_CURRENT,
        payload:log
    }
}
export const clearCurrent = (log) => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const updateLog=(log)=>{
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.put(`/logs/${log.id}`, log);
            dispatch({
                type: UPDATE_LOG,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }

    }
}
export const addLog=(log)=>{
    return async (dispatch)=>{
        try {
            setLoading();
            const res = await axios.post('/logs',log);
            dispatch({
                type: ADD_LOG,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }

    }
}
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
           await axios.delete(`/logs/${id}`);
            dispatch({
                type: DELETE_LOG,
                payload: id
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }

    }
}
