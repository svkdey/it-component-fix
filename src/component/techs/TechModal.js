import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions'
const AddTechModal = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
  
    const onSubmitForm = () => {
        if (firstname === '' || lastname === '') {
            M.toast({ html: 'Please enter firstname and lastname' });
        } else {
            console.log(firstname, lastname)
            props.dispatch(addTech({ firstName:firstname, lastName:lastname }))
            M.toast({ html: 'Technician Added' })
            setFirstname('');
            setLastname('');
            
        }

    }
    return (
        <div id="add-tech-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4> Add new Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
                        <label htmlFor="firstname" className="active">First name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
                        <label htmlFor="lastname" className="active">last name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn"
                    onClick={() => { onSubmitForm() }}
                >Add technician</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    heigth: '75%'
}

export default connect(null,null)(AddTechModal);
