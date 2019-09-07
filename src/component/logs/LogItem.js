import React from 'react';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import {deleteLog,setCurrent} from '../../actions/logAction';
import {connect} from 'react-redux'
const LogItem = (props) => {
    const {log}=props;
    // console.log(props)
    const onDelete=()=>{
        var result = window.confirm("Do you want to delete logs");
        if(result){props.dispatch(deleteLog(log.id))
        M.toast({html:"Log Deleted!"})}
        else{}
    }
    const settingCurrent=()=>{
        props.dispatch(setCurrent(log));
    }
    return (
        <li className="collection-item" key={log.id}>
           <div>
               <a href="#edit-log-modal" onClick={()=>{settingCurrent()}} className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}>{log.message}</a>
           <br/>
           <span className="grey-text">
           <span className="black-text">ID #{log.id} </span>
           last updated by {' '}
               <span className="black-text">
                   {log.tech}
               </span> on <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
           </span>
           <a className="secondary-content" style={{cursor:"pointer"}}>
               <i className="material-icons grey-text" onClick={()=>{onDelete()}}>delete</i>
           </a>
           </div> 
        </li>
    )
}

export default connect(null,null)(LogItem);
