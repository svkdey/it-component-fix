import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {deleteTech} from '../../actions/techActions';
import {connect} from 'react-redux';
const TechItem = (props) => {
    const {id,firstName,lastName}=props.tech;
    const onDelete = () => {
        console.log(id)
        props.dispatch(deleteTech(id));
        M.toast({html:"Technician Deleted"})
   
    };
   
    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    );
};



export default connect()(TechItem);