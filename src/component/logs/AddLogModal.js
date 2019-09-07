import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logAction';
import SelectTechnician from './SelectTechnician'

const AddLogModal = (props) => {
    // const {techs,loading}=props.techs;
    // console.log(techs)
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("");
  
    const onSubmitForm=()=>{
        if(message===''||tech===''){
           M.toast({html:'Please enter msg and tech'});
        }else{
  
            props.dispatch(addLog({ message, tech, attention, date: new Date() }))
            // console.log(message, tech, attention)
            M.toast({html:`Log added by ${tech}`})
            setMessage('');
            setTech('');
            setAttention(false);
        }
       
    }
    // const fetchOption=()=>{
    //     console.log(techs)
    //     return 
    // }
    // if(loading){
    //     return <Preloader/>
    // }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4> Add System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active"> Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)} >
                            <option value="" disabled>Select Technician</option>
                          <SelectTechnician/>
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label> <input type="checkbox" className="filled-in" checked={attention} value={attention} 
                                onChange={e=>setAttention(!attention)}/>
                                <span>Needs Attention</span>
                                </label>
                        </p>

                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn"
                onClick={()=>{onSubmitForm()}}
                >Enter</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    heigth: '75%'
}

export default connect(null,null)(AddLogModal);
