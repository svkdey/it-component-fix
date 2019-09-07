import React, { useState,useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import { updateLog,clearCurrent} from '../../actions/logAction';
const EditLogModal = (props) => {
    const {current}=props.logs;
    // const { message, attention, tech}=current;
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("");
    useEffect(()=>{
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech)
        }
    },[current])
    const onSubmitForm = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter msg and tech' });
        } else {
            const updLog={
                id: current.id, message, tech, attention,dete:new Date()
            }
            console.log(updLog)
            props.dispatch(updateLog(updLog))
            //clear
            M.toast({ html: "Log Updated!" })
            props.dispatch(clearCurrent())
            setMessage('');
            setTech('');
            setAttention(false);
        }

    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4> Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        {/* <label htmlFor="message" className="active"> Log Message</label> */}
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)} >
                            <option value="" disabled>Select Technician</option>
                            <option value="John Deo">John Deo</option>
                            <option value="Sara willams">Sara willams</option>

                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label> <input type="checkbox" className="filled-in" checked={attention} value={attention}
                                onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>

                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn"
                    onClick={() => { onSubmitForm() }}
                >Enter</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    heigth: '75%'
}
const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}
export default connect(mapStateToProps,null)(EditLogModal);
