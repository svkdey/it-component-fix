import React, { useEffect } from 'react'

import TechItem from './TechItem';
import {connect} from 'react-redux'
import { getTechs} from '../../actions/techActions'
import Preloader from '../layout/Preloader'
const TechListModal = (props) => {
    const {techs,loading}=props.techs;
    
    useEffect(() => {
        props.dispatch(getTechs());
        //eslint-disable-next-line
    }, [])
   
    if (loading) {
        return <Preloader />
    }
    
    return (
        <div id="tech-list-modal" className="modal">
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className='collection'>
                    {!loading &&
                        techs !== null &&
                        techs.map(tech => (<TechItem tech={tech} key={tech.id} />))}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        techs: state.techs
    }
}
export default connect(mapStateToProps,)(TechListModal);
