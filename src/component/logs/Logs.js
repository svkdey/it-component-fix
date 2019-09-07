import React,{useEffect} from 'react'
import LogItem from './LogItem';
import {getLogs} from '../../actions/logAction'
import Preloader from '../layout/Preloader';
import {connect} from 'react-redux'
const Logs=(props)=> {
    const {logs:{logs,loading}}=props
    // console.log(logs, loading)

    useEffect(()=>{
        props.dispatch(getLogs());
        //eslint-disable-next-line
    }, [])
   
    if(loading||logs===null){
        return <Preloader/>
    }
    return (
       <ul className="collection with-header">
           <li className="collection-header">
           <h4 className="center">System logs</h4></li>
            {!loading && logs.length === 0?<p className="center">Nothing to show ...</p>
                : (logs.reverse().map(log => <LogItem log={log} key={log.id} />))}
       </ul>
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        logs: state.logs
    }
}
export default connect(mapStateToProps,)(Logs)
