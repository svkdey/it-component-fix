import React, { useEffect } from 'react'
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
const SelectTechnician = (props) => {
    const {techs,loading}=props.techs
    // console.log(techs)
    useEffect(() => {
        props.dispatch(getTechs())
        //eslint-disable-next-line
    }, [])
    return (
        !loading &&
        techs !== null &&
        techs.map(t => (
            <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
                {t.firstName} {t.lastName}
            </option>
        ))
    );
};

const mapStateToProps = (state) => {
    return {
        techs: state.techs
    }
}
export default connect(mapStateToProps,null)(SelectTechnician);
